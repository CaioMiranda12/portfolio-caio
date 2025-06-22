import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export function Contact() {
  return (
    <section
      className="scroll-mt-20 py-20 bg-gray-950 text-white text-center"
    >
      <div
        className="container mx-auto px-4"
      >
        <span
          className="text-cyan-400 text-sm uppercase tracking-widest block mb-2"
          data-aos='fade-up'
        >
          Contato
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos='fade-up'
          date-aos-delay='100'
        >
          Vamos trabalhar juntos?
        </h2>

        <p
          className="text-gray-400 mb-8"
          data-aos='fade-up'
          date-aos-delay='300'
        >
          Estou disponível para novos projetos e parcerias. Fique à vontade para me chamar por email ou redes sociais.
        </p>

        <Button
          asChild
          className="bg-cyan-500 hover:bg-cyan-400 py-3 px-6"
          data-aos='zoom-in'
          date-aos-delay='500'
        >
          <a
            href='mailto:caiomiranda.contato1@gmail.com'
          >
            Enviar email
          </a>
        </Button>

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