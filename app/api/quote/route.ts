import { NextRequest, NextResponse } from "next/server";

/**
 * Receives quote/booking/contact form submissions.
 *
 * The form's primary, always-working conversion path is the pre-filled
 * WhatsApp deep link built client-side in components/forms/QuoteForm.tsx —
 * that happens regardless of what this route does. This route is the
 * secondary record-keeping path: an email/CRM copy of every submission.
 *
 * // TODO: plug in a real email service before launch. Two common options:
 *
 * 1) Resend (https://resend.com) — add RESEND_API_KEY to .env.local, then:
 *      import { Resend } from "resend";
 *      const resend = new Resend(process.env.RESEND_API_KEY);
 *      await resend.emails.send({
 *        from: "Strike Freight Website <noreply@yourdomain.com>",
 *        to: businessInfo.email,
 *        subject: "New website quote request",
 *        text: JSON.stringify(data, null, 2),
 *      });
 *
 * 2) Formspree (https://formspree.io) — simplest option, no SDK needed:
 *      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *        method: "POST",
 *        headers: { "Content-Type": "application/json" },
 *        body: JSON.stringify(data),
 *      });
 *
 * Until one of these is wired up, submissions are only logged server-side
 * (visible in your hosting provider's function logs) and the WhatsApp path
 * remains the real way bookings reach the business.
 */
export async function POST(request: NextRequest) {
  const data = await request.json().catch(() => null);

  if (!data) {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  console.log("[api/quote] submission received (no email service configured yet):", data);

  return NextResponse.json({ ok: true });
}
