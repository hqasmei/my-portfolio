import { NextRequest, NextResponse } from "next/server";

import { Email } from "../../../components/email";

import { render } from "@react-email/render";

import { transporter, smtpEmail } from "@/utils/nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    transporter.sendMail(options); 
  } catch (error) {
    console.error("Failed to send email:", error); 
  }

  return new Response("OK");
}
