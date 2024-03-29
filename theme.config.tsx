import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <span>
    <Image src="/logo-celepar.png" alt='Logo da Celepar' width={150} height={150} />
  </span>,
  project: {
    link: 'https://github.com/junioralvesbr/celepar-docs-documentador/blob/main',
  },
  chat: {
    link: 'https://chat.paas.pr.gov.br/channel/documentador',
    icon: <Image src='/rocket-chat.svg' alt='Icone do rocket chat' width={22} height={22} />
  },
  darkMode: true,
  docsRepositoryBase: 'https://github.com/junioralvesbr/celepar-docs-documentador/blob/main',
  search: {
    loading: "Procurando...",
    error: "Houve um erro na pesquisa",
    placeholder: "Pesquisar no documento"
  },
  head: <>
    <title>Docs | Documentador</title>
    <link href='/favicon.ico' type='image/x-icon' rel='shortcut ison' />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Documentador: Documentação do Documentador" />
    <meta name="og:title" content="Documentador: Documentação do Documentador" />
  </>,
  sidebar: {
    autoCollapse: true,
    toggleButton: true
  },
  toc: {
    title: "Esta Pagina",
    backToTop: true,
  },
  editLink: {
    text: 'Editar essa pagina',
  },
  feedback: {
    content: null,
  },
  footer: {
    text: `Celepar ${new Date().getFullYear()} © Companhia de Tecnologia da Informação e Comunicação do Paraná.`,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Claro',
        dark: 'Escuro',
        system: 'Sistema'
      }
    }
  }
}

export default config