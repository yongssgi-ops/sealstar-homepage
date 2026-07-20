// ============================================================
// SEALSTAR (주)씰스타 홈페이지 — Cloudflare Worker
// 정적 파일은 그대로 서빙하고, /api/contact 로 오는 POST 요청만
// 가로채서 Resend API로 문의 내용을 이메일로 바로 전송합니다.
// (폴리스타 홈페이지와 동일한 구조입니다.)
// ============================================================

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024; // 8MB (원본 파일 기준)

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    // 그 외 모든 요청은 정적 자산 그대로 서빙
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return jsonResponse({ error: "잘못된 요청 형식입니다." }, 400);
  }

  const { name, email, phone, topic, title, message, file } = data || {};

  if (!name || !email || !title || !message) {
    return jsonResponse({ error: "필수 항목(이름/이메일/제목/문의내용)이 누락되었습니다." }, 400);
  }

  if (!env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");
    return jsonResponse({ error: "이메일 설정이 완료되지 않았습니다. 관리자에게 문의해 주세요." }, 500);
  }

  const subject = "[씰스타 문의] " + title;

  const bodyText = [
    `이름: ${name}`,
    `이메일: ${email}`,
    `연락처: ${phone || "-"}`,
    `문의 제품/분야: ${topic || "-"}`,
    `제목: ${title}`,
    "",
    "문의내용:",
    message,
  ].join("\n");

  const toAddress = env.CONTACT_TO_EMAIL || "info@sealstar.com";
  const fromAddress = env.CONTACT_FROM_EMAIL || "SEALSTAR Website <onboarding@resend.dev>";

  const payload = {
    from: fromAddress,
    to: [toAddress],
    reply_to: email,
    subject,
    text: bodyText,
  };

  // 첨부파일 처리 (base64 content). Resend 이메일 총 용량 한도(40MB, base64 포함)를
  // 넉넉히 지키기 위해 원본 파일 기준 8MB로 제한합니다.
  if (file && file.content && file.filename) {
    const approxBytes = Math.floor((file.content.length * 3) / 4);
    if (approxBytes > MAX_ATTACHMENT_BYTES) {
      return jsonResponse({ error: "첨부파일 용량은 8MB를 초과할 수 없습니다." }, 400);
    }
    payload.attachments = [
      {
        filename: file.filename,
        content: file.content,
      },
    ];
  }

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errText);
      return jsonResponse({ error: "이메일 전송에 실패했습니다." }, 502);
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return jsonResponse({ error: "이메일 전송 중 오류가 발생했습니다." }, 500);
  }
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
