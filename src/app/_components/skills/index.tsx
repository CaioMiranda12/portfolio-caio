import { FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";





export function Skills() {

  const skillsList = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="w-10 h-10" />
    },
    {
      name: 'CSS',
      icon: <IoLogoCss3 className="w-10 h-10" />
    },
    {
      name: 'JavaScript',
      icon: <IoLogoJavascript className="w-10 h-10" />
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-10 h-10" />
    },
    {
      name: 'React',
      icon: <FaReact className="w-10 h-10" />
    },
    {
      name: 'Next.js',
      icon: <RiNextjsFill className="w-10 h-10" />
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="w-10 h-10" />
    },
    {
      name: 'ShadCN',
      icon: <SiShadcnui className="w-10 h-10 " />
    },
    {
      name: 'Node',
      icon: <FaNodeJs className="w-10 h-10" />
    },
    {
      name: 'Python',
      icon: <FaPython className="w-10 h-10" />
    },
    {
      name: 'Java',
      icon: <FaJava className="w-10 h-10" />
    }

  ]

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 bg-gray-900 text-white"
    >
      <div
        className="container mx-auto px-4"
      >
        <span
          className="text-cyan-400 text-sm uppercase tracking-widest block mb-2 text-center"
          data-aos='fade-up'
        >
          Habilidades
        </span>

        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          data-aos='fade-up'
          date-aos-delay='300'
        >
          Minhas skills
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {
            skillsList.map((item, index) => (
              <div
                key={item.name}
                data-aos='zoom-in'
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-lg transition-colors duration-200">

                  <div className="mb-2">
                    {item.icon}
                  </div>

                  <span className="text-sm text-gray-300">
                    {item.name}
                  </span>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}