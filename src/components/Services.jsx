import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Star, Heart, Quote, ArrowRight, Eye, MessageCircle, Award } from 'lucide-react'

export default function Services() {
  const book = {
    title: "O Peregrino",
    description: "\"O Peregrino\" é uma clássica alegoria escrita por John Bunyan que retrata a jornada de Cristão em busca da salvação. Ao longo de sua caminhada, ele enfrenta desafios e tentações que simbolizam as dificuldades da vida humana. Através de personagens memoráveis e situações complexas, o livro explora temas como fé, perseverança e redenção. Esta narrativa envolvente transcende gerações, oferecendo lições valiosas sobre a importância da espiritualidade e do autoconhecimento. Uma obra fundamental para aqueles que buscam compreender a essência da fé cristã.",
    image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1755273541741_0.png",
    features: [
      "Narrativa envolvente e profunda",
      "Personagens memoráveis",
      "Lições sobre fé e perseverança",
      "Alegoria atemporal",
      "Reflexões sobre espiritualidade"
    ]
  }

  const testimonials = [
    {
      name: "Ana Silva",
      rating: 5,
      comment: "Uma obra que transforma a alma! A jornada do protagonista me fez refletir profundamente sobre minha própria fé."
    },
    {
      name: "Carlos Santos",
      rating: 5,
      comment: "Machadosss consegue transmitir mensagens profundas de forma simples e tocante. Recomendo a todos!"
    },
    {
      name: "Maria Oliveira",
      rating: 5,
      comment: "Um livro que não consegui largar! Cada página trouxe uma nova revelação sobre a jornada espiritual."
    }
  ]

  return (
    <section id="livros" className="section-padding bg-gradient-to-br from-white to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-book-pattern opacity-5"></div>
      <motion.div
        className="absolute top-20 left-10 text-accent-100"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Quote className="h-24 w-24" />
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
            Livros e <span className="gradient-text">Obras</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <motion.p
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Descubra obras que tocam o coração e transformam vidas através de narrativas 
            poderosas sobre fé, amor e autodescoberta.
          </motion.p>
        </motion.div>

        {/* Featured Book */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20 border border-primary-100"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Book Image */}
            <motion.div
              className="relative bg-gradient-to-br from-accent-100 to-secondary-100 p-8 lg:p-12 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={book.image}
                alt={book.title}
                className="w-80 h-auto rounded-2xl shadow-2xl"
                whileHover={{ rotateY: 15 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="absolute top-4 right-4 bg-secondary-500 text-white px-4 py-2 rounded-full font-semibold"
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Bestseller</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Book Details */}
            <div className="p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-secondary-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-primary-600 font-medium">(5.0)</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
                  {book.title}
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full mb-6"></div>
              </motion.div>

              <motion.p
                className="text-primary-700 leading-relaxed mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {book.description}
              </motion.p>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-xl font-semibold text-primary-900 mb-4">
                  Características da Obra:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {book.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="bg-accent-500 text-white p-1 rounded-full">
                        <Heart className="h-3 w-3" />
                      </div>
                      <span className="text-primary-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Comprar Agora</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.button
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg flex-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="h-5 w-5" />
                  <span>Prévia Gratuita</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h3
            className="text-3xl lg:text-4xl font-bold text-center text-primary-900 mb-12"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            O que os <span className="gradient-text">Leitores</span> Dizem
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-accent-500 to-secondary-500 text-white p-2 rounded-full mr-3">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">{testimonial.name}</h4>
                    <div className="flex text-secondary-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-accent-500 to-secondary-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <motion.div
            className="mb-6"
            whileInView={{ scale: [0.8, 1] }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Comece Sua Jornada Literária
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Mergulhe em histórias que transformam perspectivas e tocam a alma. 
              Descubra o poder das palavras que inspiram e elevam o espírito.
            </p>
          </motion.div>

          <motion.a
            href="https://www.amazon.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-accent-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="h-6 w-6" />
            <span>Explorar Todos os Livros</span>
            <ArrowRight className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}