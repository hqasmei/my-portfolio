import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer-smtp-transport";

export const smtpEmail = process.env.GMAIL_EMAIL;
export const smtpPassword = process.env.GMAIL_PASSWORD; 

export const transporter = nodemailer.createTransport(
  SMTPTransport({
    service: "gmail",
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  })
);