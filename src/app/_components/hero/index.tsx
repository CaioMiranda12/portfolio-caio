import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="h-screen flex justify-center items-center bg-black"
    >
      <div className="container mx-auto px-4 text-center flex flex-col gap-2">

        <span
          className="text-gray-500 text-sm md:text-lg tracking-wide uppercase"
          data-aos='fade-in'
        >
          React & Next.js Developer
        </span>

        <h2
          className="text-2xl md:text-4xl text-gray-100"
          data-aos='fade-up'
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          Olá! Me chamo <span className="text-cyan-400 font-bold">Caio Miranda</span>
        </h2>


        <p
          className="text-gray-400 text-xl md:text-3xl"
          data-aos='fade-up'
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          Sites modernos com foco em performance e experiência do usuário
        </p>

        <Button
          className="bg-gray-800 hover:bg-gray-700 cursor-pointer w-max mx-auto text-xl p-6 mt-4"
          style={{ animationDelay: '500ms' }}
          data-aos='fade-up'
          data-aos-delay="500"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          Saiba mais
        </Button>
      </div>
    </section>
  )
}