import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, botField } = body || {};

    // Bot trap / honeypot check
    if (botField) {
      return NextResponse.json({ success: true, message: "Inquiry received" });
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a detailed message (at least 5 characters)." },
        { status: 400 }
      );
    }

    const submission = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: typeof phone === "string" ? phone.trim() : "",
      subject: typeof subject === "string" ? subject.trim() : "General Inquiry",
      message: message.trim(),
    };

    // Structured server log so inquiry data is securely captured
    console.info("[CONTACT_SUBMISSION_RECEIVED]", JSON.stringify(submission, null, 2));

    // Optional webhook forwarding (e.g. Slack / Discord / Zapier / CRM)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL || process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `*New Inquiry / Sponsorship Form Submission*\n*From:* ${submission.name} (${submission.email})\n*Phone:* ${submission.phone || "N/A"}\n*Subject:* ${submission.subject}\n*Message:*\n${submission.message}`,
            submission,
          }),
        });
      } catch (webhookErr) {
        console.error("[CONTACT_WEBHOOK_ERROR]", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been securely recorded.",
        id: `SUB-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
