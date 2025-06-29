'use client'

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(8, 'Telefone é obrigatório'),
  message: z.string().min(1, 'Digite uma mensagem')
})

type ContactSchema = z.infer<typeof schema>

export function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data: ContactSchema) => {
    console.log("Formulário válido:", data);
    return new Promise<void>(resolve => {
      setTimeout(() => {
        toast.success('Mensagem enviada com sucesso!');
        reset({
          name: '',
          email: '',
          phone: '',
          message: ''
        }, { keepErrors: false });
        resolve();
      }, 1500)
    })
  }

  return (
    <section
      id="contato"
      className="scroll-mt-20 py-20 bg-gray-950 text-white text-center"
    >
      <div
        className="container mx-auto px-4"
      >
        <span
          className="text-cyan-400 text-sm uppercase tracking-widest block mb-2"

        >
          Contato
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4"

        >
          Vamos trabalhar juntos?
        </h2>

        <p
          className="text-gray-400 mb-8"

        >
          Estou disponível para novos projetos e parcerias. Fique à vontade para me chamar por email ou redes sociais.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto mt-10 space-y-6 text-left"
        >
          <div>
            <Label htmlFor="name" className="mb-2">Nome</Label>

            <input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Seu nome"
              className="bg-gray-800 w-full p-3 rounded text-white placeholder-gray-400 outline-none"

            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="mb-2">Email</Label>

            <input
              id="email"
              {...register("email")}
              type="text"
              placeholder="Seu email"
              className="bg-gray-800 w-full p-3 rounded text-white placeholder-gray-400 outline-none"

            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="mb-2">Telefone</Label>
            <input
              id="phone"
              {...register("phone")}
              type="text"
              placeholder="Seu telefone"
              className="bg-gray-800 w-full p-3 rounded text-white placeholder-gray-400 outline-none"

            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="mb-2">Mensagem</Label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Mensagem"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 resize-none outline-none"
              rows={5}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>



        <div
          className="flex justify-center gap-6 mt-8"
        >
          <a
            href='https://www.linkedin.com/in/caio-miranda-ofc/'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
          </a>

          <a
            href='https://github.com/CaioMiranda12'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-400 hover:text-white text-2xl" />
          </a>
        </div>
      </div>
    </section>
  )
}