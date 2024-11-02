import { Resend } from "resend";

const resend = new Resend(process.env.RESND_API_KEY);

export const sendTwoFactorTokenEmail = async(
  email: string,
  token: string,
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Email",
    html: `<p>Your 2FA code <strong>${token}</strong></p>`
  })
}

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Email",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password</p>`
  })
}

export const sendVerificationEmail = async (
  email: string,
  token: string,
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm Email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email</p>`
  })
}
