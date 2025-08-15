import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, BookOpen, Feather } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#livros', label: 'Livros' },
    { href: '#contato', label: 'Contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'bg-accent-100 text-accent-600' 
                    : 'bg-white/20 text-white'
                }`}
              >
                <BookOpen className="h-8 w-8" />
              </motion.div>
              <motion.div
                className={`absolute -top-1 -right-1 p-1 rounded-full transition-colors duration-300 ${
                  isScrolled 
                    ? 'bg-secondary-500 text-white' 
                    : 'bg-accent-500 text-white'
                }`}
                whileHover={{ scale: 1.2 }}
              >
                <Feather className="h-3 w-3" />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-900' : 'text-white'
              }`}>
                Machadosss
              </h1>
              <span className={`text-xs lg:text-sm transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white/80'
              }`}>
                Autor de Romance
              </span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-accent-600' 
                    : 'text-white hover:text-secondary-300'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://www.amazon.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Comprar Livros
            </motion.a>
          </div>

          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-primary-900 hover:bg-primary-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
          >
            <div className="px-4 py-3 space-y-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-primary-700 hover:text-accent-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprar Livros
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}