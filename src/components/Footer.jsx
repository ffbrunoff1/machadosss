import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Feather, ArrowUp, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#inicio" },
        { label: "Sobre", href: "#sobre" },
        { label: "Livros", href: "#livros" },
        { label: "Contato", href: "#contato" }
      ]
    },
    {
      title: "Livros",
      links: [
        { label: "O Peregrino", href: "https://www.amazon.com.br" },
        { label: "Próximos Lançamentos", href: "#contato" },
        { label: "Ebooks", href: "https://www.amazon.com.br" },
        { label: "Audiobooks", href: "https://www.amazon.com.br" }
      ]
    },
    {
      title: "Contato",
      links: [
        { label: "ffbrunoff@yahoo.com.br", href: "mailto:ffbrunoff@yahoo.com.br" },
        { label: "Palestras", href: "#contato" },
        { label: "Eventos", href: "#contato" },
        { label: "Imprensa", href: "#contato" }
      ]
    }
  ]

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-book-pattern opacity-5"></div>
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-secondary-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container-max relative z-10">
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute -top-6 right-8 bg-gradient-to-r from-accent-500 to-secondary-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>

        <div className="section-padding">
          {/* Top section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-4 gap-12 mb-12"
          >
            {/* Logo and description */}
            <div className="lg:col-span-1">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-gradient-to-br from-accent-500 to-secondary-500 p-3 rounded-xl"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BookOpen className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="absolute -top-1 -right-1 bg-white text-accent-600 p-1 rounded-full">
                    <Feather className="h-3 w-3" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Machadosss</h3>
                  <p className="text-white/70 text-sm">Autor de Romance</p>
                </div>
              </motion.div>

              <motion.p
                className="text-white/80 leading-relaxed mb-6"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Criando histórias que tocam a alma e transformam vidas através 
                do poder das palavras e da narrativa envolvente.
              </motion.p>

              <motion.a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="h-4 w-4" />
                <span>Ver Livros</span>
              </motion.a>
            </div>

            {/* Links sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6 text-secondary-300">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                        whileHover={{ x: 5 }}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-2xl p-8 mb-12 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h4
                  className="text-2xl font-bold mb-3"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  Fique por Dentro das Novidades
                </motion.h4>
                <motion.p
                  className="text-white/80"
                  whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Receba atualizações sobre novos livros, eventos e conteúdos exclusivos
                </motion.p>
              </div>
              <motion.div
                className="flex space-x-3"
                whileInView={{ opacity: [0, 1], x: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <motion.button
                  className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                  <span>Inscrever</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                className="flex items-center space-x-2 text-white/70"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.6 }}
              >
                <span>&copy; 2024 Machadosss. Todos os direitos reservados.</span>
                <Heart className="h-4 w-4 text-accent-500" />
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 text-white/70"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span>Criado com</span>
                <a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-accent-400 hover:text-accent-300 transition-colors duration-300"
                >
                  Papum
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}