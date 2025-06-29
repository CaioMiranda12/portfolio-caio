import nodemailer from 'nodemailer'

export async function POST(req: Request){
  try {
    const { name, email, phonenumber, message} = await req.json();

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
      <p><strong>Telefone:</strong> ${phonenumber}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `
  }

  await transporter.sendMail(mailOptions)

  return new Response(
    JSON.stringify({ success: true, message: "Email enviado com sucesso!"})
  )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Erro ao enviar email."}),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json" }
      }
    )
  }
}