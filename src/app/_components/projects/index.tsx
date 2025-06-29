import Image from "next/image";
import BrabosBurger from '@/../public/brabosburger.png'
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { IoTelescopeOutline } from "react-icons/io5";

export function Projects() {


  const projectsData = [
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger',
      description: 'Desenvolvimento de uma aplicação completa para hamburguerias, com funcionalidades para registrar pedidos em um banco de dados, visando a aplicação prática em empresas do setor. ',
      skills: 'React, Styled-components, JavaScript, React Hooks, Material UI, API REST.',
      summary: 'Sistema de pedidos para hamburguerias com registro no banco de dados e foco em uso real.',
      link: 'https://...'
    },
    {
      name: 'FinDash$ - Dashboard Financeiro',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger2',
      description: 'Sistema de gestor financeiro, focado em usabilidade e visual agradável. Permite gerenciar transações, categorias e visualizar gráficos com resumos mensais e anuais.',
      skills: 'React, Next.js, TypeScript, Tailwind CSS, ShadCN UI, Axios.',
      summary: 'Gestor financeiro com visual limpo, controle de transações e gráficos de análise.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7339407486958931968/'
    },
    {
      name: 'Blog de Treinos',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger3',
      description: 'Aplicação que permite aos usuários registrar, compartilhar e comentar sobre treinos. Inclui sistema de login com Google e recursos sociais para interação entre usuários. ',
      skills: 'React, Next.js, TypeScript, Tailwind CSS, Firebase.',
      summary: 'Plataforma social para registrar treinos com login Google e comentários entre usuários.',
      link: 'https://treino-plus.vercel.app/'
    },
    {
      name: 'Decorar - Ecommerce',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger4',
      description: 'Um e-commerce de móveis e decoração com interface limpa e navegação intuitiva. Possui páginas de categorias, carrinho funcional e compra simplificada diretamente nos cards ou na página do produto.',
      skills: 'React, Next.js, Tailwind, AOS.',
      summary: 'E-commerce de móveis com navegação fluida, carrinho funcional e compra simplificada.',
      link: 'https://...'
    },
    {
      name: 'Space Games',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger5',
      description: 'Space Games é uma plataforma de jogos que mostra informações sobre os jogos mais em alta, com um sistema de recomendação e pesquisa de jogos. O projeto usa Next.js com App Router, garantindo um roteamento eficiente e otimizado para SEO.',
      skills: 'React, Next.js, Tailwind, Framer Motion.',
      summary: 'Plataforma de jogos com busca, recomendações e SEO otimizado via Next.js App Router.',
      link: 'https://...'
    },
    {
      name: 'Projeto 6',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger6',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.',
      summary: 'resumo do projeto',
      link: 'https://...'
    }
  ]

  return (
    <section
      id="projetos"
      className="scroll-mt-20 py-20 bg-gray-900 text-white
      min-h-screen"
    >
      <div className="container mx-auto px-4">
        <span
          className="text-cyan-400 text-sm uppercase tracking-widest block text-center mb-2"
          data-aos='fade-up'
        >
          Portfólio
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          data-aos='fade-up'
          data-aos-delay='300'
        >
          Projetos Recentes
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map(item => (
            <div
              key={item.alt}
              className="bg-gray-800 w-full rounded-xl overflow-hidden shadow-lg  "
              style={{ animationDelay: '200ms' }}
              data-aos='fade-up'
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-48"
              />

              <div className="p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.summary}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-cyan-400 hover:bg-cyan-300 duration-300 cursor-pointer text-black hover:scale-105 transition-all"
                    >
                      Ver mais
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-xl bg-gray-900 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-cyan-400 font-semibold">Projeto: {item.name}</DialogTitle>

                      <div className="h-54 mt-4">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          className="h-54 object-cover"
                        />
                      </div>

                      <DialogDescription className="text-gray-300 mt-4">
                        {item.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4">
                      <p className="text-sm text-gray-400">
                        Tecnologias: {item.skills}
                      </p>
                      <Link
                        href={item.link}
                        target="_blank"
                        className="text-cyan-400 hover:underline text-sm mt-4 inline-block"
                      >
                        Ver projeto →
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}