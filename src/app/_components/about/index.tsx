import Image from "next/image";
import CaioImg from '@/../public/me.jpg'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 py-20 bg-gray-950 text-white"
    >
      <div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
      >
        <div
          className="w-full md:w-1/2"
          data-aos='fade-right'
        >
          <Image
            src={CaioImg}
            alt="Imagem de Caio Miranda"
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <span
            className="text-cyan-400 text-sm uppercase tracking-widest block mb-2"
            data-aos='fade-up'
          >
            Sobre mim
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos='fade-up'
            date-aos-delay='100'
          >
            Desenvolvedor Front-End apaixonado por interfaces
          </h2>

          <p
            className="text-gray-400 leading-relaxed mb-4"
            data-aos='fade-up'
            date-aos-delay='300'
          >
            Me chamo Caio Miranda, sou desenvolvedor React/Next.js com foco em performance, acessibilidade e experiências agradáveis. Atualmente, atuo como freelancer, criando interfaces modernas e otimizadas para negócios digitais.
          </p>

          <p
            className="text-gray-400 leading-relaxed mb-6"
            data-aos='fade-up'
            date-aos-delay='500'
          >
            Tenho experiência com Tailwind CSS, integração com APIs REST, consumo de CMSs, e estou sempre buscando aprender novas ferramentas para entregar mais valor aos projetos.
          </p>

          <p
            className="text-gray-400 leading-relaxed mb-6"
            data-aos='fade-up'
            date-aos-delay='600'
          >
            Além disso, também atuo como desenvolvedor full stack em projetos pessoais, com back-end em Node.js, Express e bancos de dados como PostgreSQL e MongoDB.

          </p>

          <Button
            className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 text-white font-medium cursor-pointer"
            data-aos='zoom-in'
            date-aos-delay='700'
          >
            <Link href='#projetos'>
              Ver projetos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}