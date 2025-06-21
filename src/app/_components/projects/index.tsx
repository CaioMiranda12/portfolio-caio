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

export function Projects() {


  const projectsData = [
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.'
    },
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger2',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.'
    },
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger3',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.'
    },
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger4',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.'
    },
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger5',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.'
    },
    {
      name: 'Brabos Burger',
      src: BrabosBurger,
      alt: 'Imagem do projeto BrabosBurger6',
      description: 'Meu site pessoal feito com Next.js e Tailwind. Responsivo, animado e otimizado.',
      skills: 'React, Next.js, Tailwind, Framer Motion.'
    }
  ]

  return (
    <section
      id="projetos"
      className="scroll-mt-20 py-20 bg-gray-900 text-white
      min-h-screen"
    >
      <div className="container mx-auto px-4">
        <span className="text-cyan-400 text-sm uppercase tracking-widest block text-center mb-2">
          Portfólio
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
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
                  {item.description}
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
                        Um site feito com Next.js, Tailwind e animações suaves para mostrar meus projetos.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4">
                      <p className="text-sm text-gray-400">
                        Tecnologias: {item.skills}
                      </p>
                      <Link
                        href="https://..."
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