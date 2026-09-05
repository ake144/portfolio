import nodemailer from "nodemailer";

/** Shared Gmail transporter factory — both the contact form and the cron
 * keepalive route send through the same address, so this is the one place
 * that config lives instead of being duplicated per route. */
export function getMailTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}
