import React from 'react'
import '../index.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Header from '@/Components/Header/Header'
import Footer from '@/Footer/Footer'

export const metadata = {
  title: 'Portfólio - Wilson Noni | Desenvolvedor Fullstack',
  description: 'Desenvolvedor Fullstack especializado em criar soluções web completas com Firebase e Cloudinary',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        cz-shortcut-listen="true">

        <ThemeProvider>
          <Header />
          <div className="menu-header">
            {children}
          </div>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  )
}
