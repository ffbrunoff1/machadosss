import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, BookOpen, Heart, Quote } from 'lucide-react'

export default function Hero() {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-book-pattern opacity-5"></div>
      <motion.div
        className="absolute top-20 left-10 text-white/10"
        animate={floatingAnimation}
      >
        <Quote className="h-32 w-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-white/10"
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
      >
        <BookOpen className="h-24 w-24" />
      </motion.div>

      <div className="relative pt-32 pb-16 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 mb-6"
              >
                <div className="flex text-secondary-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-secondary-300 font-medium">
                  Autor Bestseller
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="gradient-text">Machadosss</span>
                <br />
                <span className="text-3xl lg:text-4xl text-white/90">
                  Autor de Romance
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl text-white/80 mb-8 leading-relaxed"
              >
                Explore jornadas emocionantes que tocam a alma e transformam 
                perspectivas. Descubra histórias que falam diretamente ao coração 
                e despertam a essência da fé e do autoconhecimento.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Comprar Livros</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#sobre"
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="h-5 w-5" />
                  <span>Conheça o Autor</span>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center space-x-6 text-white/70"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-400">1k+</div>
                  <div className="text-sm">Leitores</div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-400">5</div>
                  <div className="text-sm">Estrelas</div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-400">Romance</div>
                  <div className="text-sm">Especialidade</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right content - Featured Book */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <motion.div
                    className="text-center mb-6"
                    whileInView={{ scale: [0.8, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">
                      Livro em Destaque
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto rounded-full"></div>
                  </motion.div>

                  <motion.img
                    src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755273541741_0.png"
                    alt="O Peregrino - Livro"
                    className="w-64 h-auto mx-auto mb-6 rounded-xl shadow-lg"
                    whileHover={{ rotateY: 15 }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.h4
                    className="text-2xl font-bold text-primary-900 mb-3 text-center"
                    whileInView={{ y: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    O Peregrino
                  </motion.h4>

                  <motion.p
                    className="text-primary-700 text-center mb-6 leading-relaxed"
                    whileInView={{ y: [20, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Uma jornada épica de fé e descoberta pessoal que transforma 
                    a alma e ilumina o caminho para a redenção.
                  </motion.p>

                  <motion.a
                    href="https://www.amazon.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Comprar Agora</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-secondary-500 text-white p-3 rounded-full shadow-lg"
                animate={floatingAnimation}
              >
                <Star className="h-6 w-6 fill-current" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-accent-500 text-white p-3 rounded-full shadow-lg"
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              >
                <Heart className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}