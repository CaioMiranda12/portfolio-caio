import BrabosBurger from '@/../public/brabosburger.png'
import Findash from '@/../public/findash.png'
import Blog from '@/../public/blog.png'
import MonteiroAdvogados from '@/../public/monteiro-advogados.png'
import Spacegames from '@/../public/spacegames.png'
import Saboaria from '@/../public/saboaria.png'

export const projectsData = [
  {
    name: 'Monteiro Advogados',
    src: MonteiroAdvogados,
    alt: 'Imagem do projeto Monteiro Advogados',
    description: `Desenvolvimento de um sistema completo para hamburguerias, com sistema de login, produtos, 
    usuários, e com funcionalidades para registrar pedidos em um banco de dados, visando a aplicação prática e 
    segura em empresas do setor.`,
    skills: 'React, Styled-components, React Hooks, Material UI, API REST · Node.js/Express (PostgreSQL, MongoDB) com Docker.',
    summary: 'Sistema de pedidos para hamburguerias com registro no banco de dados e foco em uso real.',
    deploy: 'https://monteiro-advogados.vercel.app/',
    repo: '',
  },
  {
    name: 'Saboaria Ecológica',
    src: Saboaria,
    alt: 'Imagem do projeto Saboaria Ecológica',
    description: 'Um e-commerce de móveis e decoração com interface limpa e navegação intuitiva. Possui páginas de categorias, carrinho funcional e compra simplificada diretamente nos cards ou na página do produto.',
    skills: 'React, Next.js, Tailwind, AOS.',
    summary: 'E-commerce de móveis com navegação fluida, carrinho funcional e compra simplificada.',
    deploy: 'https://saboaria-ecologica.vercel.app/',
    repo: '',
  },
  {
    name: 'Brabos Burger',
    src: BrabosBurger,
    alt: 'Imagem do projeto Brabos Burger',
    description: `Desenvolvimento de um sistema completo para hamburguerias, com sistema de login, produtos, 
    usuários, e com funcionalidades para registrar pedidos em um banco de dados, visando a aplicação prática e 
    segura em empresas do setor.`,
    skills: 'React, Styled-components, React Hooks, Material UI, API REST · Node.js/Express (PostgreSQL, MongoDB) com Docker.',
    summary: 'Sistema de pedidos para hamburguerias com registro no banco de dados e foco em uso real.',
    deploy: null,
    repo: 'https://github.com/CaioMiranda12/brabosburger-interface',
  },
  {
    name: 'Dashboard Financeiro',
    src: Findash,
    alt: 'Imagem do projeto FinDash',
    description: 'Sistema de gestor financeiro, focado em usabilidade e visual agradável. Permite gerenciar transações, categorias e visualizar gráficos com resumos mensais e anuais.',
    skills: 'React, Next.js, TypeScript, Tailwind CSS, ShadCN UI, Axios · Node/Express (PostgreSQL).',
    summary: 'Gestor financeiro com visual limpo, controle de transações e gráficos de análise.',
    deploy: 'https://dashboard-interface-omega.vercel.app/',
    repo: '',
  },
  {
    name: 'Blog de Treinos',
    src: Blog,
    alt: 'Imagem do projeto Blog de Treinos',
    description: 'Aplicação que permite aos usuários registrar, compartilhar e comentar sobre treinos. Inclui sistema de login com Google e recursos sociais para interação entre usuários.',
    skills: 'React, Next.js, TypeScript, Tailwind CSS, Firebase.',
    summary: 'Plataforma social para registrar treinos com login Google e comentários entre usuários.',
    deploy: null,
    repo: '',
  },
  {
    name: 'Space Games',
    src: Spacegames,
    alt: 'Imagem do projeto Space Games',
    description: 'Plataforma de jogos que exibe informações sobre os títulos mais populares, com sistema de recomendação e busca. Utiliza Next.js com App Router para roteamento eficiente e SEO otimizado.',
    skills: 'React, Next.js, Tailwind, Framer Motion.',
    summary: 'Plataforma de jogos com busca, recomendações e SEO otimizado via Next.js App Router.',
    deploy: null,
    repo: 'https://github.com/CaioMiranda12/spacegames',
  },
]