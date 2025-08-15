import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Award, Users, Feather, Quote, Lightbulb } from 'lucide-react'

export default function About() {
  const achievements = [
    { icon: BookOpen, number: "1+", label: "Livros Publicados" },
    { icon: Users, number: "1000+", label: "Leitores Impactados" },
    { icon: Star, number: "5", label: "Avaliação Média" },
    { icon: Award, number: "Romance", label: "Especialidade" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Paixão pela Escrita",
      description: "Cada palavra é cuidadosamente escolhida para tocar o coração dos leitores."
    },
    {
      icon: Lightbulb,
      title: "Inspiração Constante",
      description: "Busco constantemente novas formas de transmitir mensagens profundas através da literatura."
    },
    {
      icon: Feather,
      title: "Arte Literária",
      description: "A escrita é uma forma de arte que pode transformar vidas e despertar consciências."
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-book-pattern opacity-5"></div>
      <motion.div
        className="absolute top-10 right-10 text-accent-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Quote className="h-32 w-32" />
      </motion.div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-primary-900 mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            Sobre o <span className="gradient-text">Autor</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <motion.p
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conheça a jornada de um escritor dedicado a criar histórias que tocam a alma 
            e transformam perspectivas através do poder da palavra escrita.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content - Author info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-primary-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center mb-6"
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-accent-500 to-secondary-500 p-3 rounded-xl mr-4">
                  <Feather className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900">Machadosss</h3>
                  <p className="text-accent-600 font-medium">Autor Especialista em Romance</p>
                </div>
              </motion.div>

              <motion.p
                className="text-primary-700 leading-relaxed mb-6"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Machadosss é um autor dedicado à arte de contar histórias que transcendem 
                o tempo e tocam profundamente o coração humano. Especializado no gênero 
                romance, ele combina narrativas envolventes com reflexões profundas sobre 
                a condição humana, a espiritualidade e o amor.
              </motion.p>

              <motion.p
                className="text-primary-700 leading-relaxed mb-6"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Sua obra mais conhecida, "O Peregrino", representa uma jornada épica de 
                autodescoberta e fé, explorando temas universais como perseverança, 
                redenção e a busca pelo sentido da vida. Através de uma prosa elegante 
                e personagens memoráveis, Machadosss cria mundos literários que 
                permanecem na memória dos leitores.
              </motion.p>

              <motion.div
                className="flex items-center space-x-4"
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex text-secondary-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-primary-600 font-medium">
                  Avaliação dos leitores
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3
              className="text-3xl font-bold text-primary-900 mb-8"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6 }}
            >
              Valores e Filosofia
            </motion.h3>

            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="bg-gradient-to-br from-accent-500 to-secondary-500 p-3 rounded-xl flex-shrink-0"
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-primary-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-accent-500 to-secondary-500 rounded-3xl p-8 lg:p-12 text-white"
        >
          <motion.h3
            className="text-3xl lg:text-4xl font-bold text-center mb-12"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            Conquistas e Reconhecimento
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="bg-white/20 p-4 rounded-2xl mb-4 mx-auto w-fit"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <IconComponent className="h-8 w-8 mx-auto" />
                  </motion.div>
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-white/90 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}