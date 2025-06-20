import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Home, Mail, Menu, Presentation, User } from "lucide-react";

export function Header() {

  const navItems = [
    { href: '#inicio', label: 'Inicio', icon: <Home /> },
    { href: '#sobre', label: 'Sobre', icon: <User /> },
    { href: '#projetos', label: 'Projetos', icon: <Presentation /> },
    { href: '#contato', label: 'Contato', icon: <Mail /> },
  ]

  const NavLinks = () => (
    <>
      {navItems.map(item => (
        <Button
          key={item.href}
          asChild
          className="bg-transparent hover:bg-gray-800 text-cyan-400 hover:text-gray-100 text-base shadow-none
          "
        >
          <Link
            href={item.href}
          >
            {item.icon}
            {item.label}
          </Link>
        </Button>
      ))}
    </>
  )

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] flex items-center justify-center px-4 h-20">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-100">
          <span className="text-cyan-400">Caio</span>.Dev
        </h1>

        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        <Sheet>
          <SheetTrigger className="md:hidden bg-gray-800 p-2 rounded-md">
            <Menu className="w-6 h-6 text-cyan-400" />
          </SheetTrigger>

          <SheetContent className="z-[9999] bg-gray-900 [&>button]:text-white">
            <SheetHeader className="text-gray-50">
              <SheetTitle className="text-gray-50">
                Portifólio
              </SheetTitle>

              <SheetDescription className="text-gray-300">
                Menu de seções do portifólio
              </SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-2 w-10/12 mx-auto">
              <NavLinks />
            </nav>
          </SheetContent>

        </Sheet>
      </div>
    </header>
  )
}