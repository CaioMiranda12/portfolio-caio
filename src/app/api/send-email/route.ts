import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: Request){
  try {
    const { name, email, phone, message} = await req.json();

    if (!name || !email || !message || !phone) {
    return new Response(
        JSON.stringify({ success: false, message: "Campos obrigatórios faltando" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nova proposta de ${name}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `
  }

  await transporter.sendMail(mailOptions)

  return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  
  } catch (error) {
    console.log(error)
     return new Response(
      JSON.stringify({ success: false, message: "Erro ao enviar email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}