import Image from "next/image";
import { projectsData } from "./projects-data";
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
  return (
    <section
      id="projetos"
      className="scroll-mt-20 py-20 bg-gray-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-4">
        <span
          className="text-cyan-400 text-sm uppercase tracking-widest block text-center mb-2"
          data-aos="fade-up"
        >
          Portfólio
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Projetos Recentes
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((item, index) => (
            <div
              key={item.name}
              className="bg-gray-800 w-full rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
                    <Button className="bg-cyan-400 hover:bg-cyan-300 duration-300 cursor-pointer text-black hover:scale-105 transition-all">
                      Ver mais
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-xl bg-gray-900 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-cyan-400 font-semibold">
                        Projeto: {item.name}
                      </DialogTitle>

                      <div className="mt-4">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-56 object-cover rounded-lg"
                        />
                      </div>

                      <DialogDescription className="text-gray-300 mt-4">
                        {item.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4 flex flex-col gap-2">
                      <p className="text-sm text-gray-400">
                        Tecnologias: {item.skills}
                      </p>

                      {item.deploy ? (
                        <Link
                          href={item.deploy}
                          target="_blank"
                          className="text-cyan-400 hover:underline text-sm mt-2 inline-block"
                        >
                          Ver projeto online →
                        </Link>
                      ) : item.repo ? (
                        <Link
                          href={item.repo}
                          target="_blank"
                          className="text-cyan-400 hover:underline text-sm mt-2 inline-block"
                        >
                          Ver repositório →
                        </Link>
                      ) : null}
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