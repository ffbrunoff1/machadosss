import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, User, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'ffbrunoff@yahoo.com.br',
          recaptchaToken: token
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ffbrunoff@yahoo.com.br",
      link: "mailto:ffbrunoff@yahoo.com.br"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Brasil",
      link: null
    },
    {
      icon: Clock,
      title: "Horário de Resposta",
      value: "24-48 horas",
      link: null
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-book-pattern opacity-5"></div>
      <motion.div
        className="absolute bottom-10 right-10 text-accent-100"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <MessageCircle className="h-32 w-32" />
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
            Entre em <span className="gradient-text">Contato</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
          <motion.p
            className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tem alguma dúvida sobre os livros ou gostaria de contratar palestras? 
            Entre em contato e vamos conversar!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-3xl font-bold text-primary-900 mb-8"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6 }}
            >
              Vamos Conversar
            </motion.h3>

            <motion.p
              className="text-lg text-primary-700 leading-relaxed mb-12"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Estou sempre disponível para conversar com leitores, responder dúvidas 
              sobre meus livros ou discutir possibilidades de palestras e eventos. 
              Sua mensagem é importante para mim!
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-primary-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="bg-gradient-to-br from-accent-500 to-secondary-500 p-3 rounded-xl"
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary-900 mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-accent-600 hover:text-accent-700 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-primary-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="mt-12 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl font-bold mb-3">Palestras e Eventos</h4>
              <p className="text-white/90 leading-relaxed">
                Disponível para palestras sobre literatura, espiritualidade e desenvolvimento 
                pessoal. Vamos levar inspiração para seu evento ou instituição!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-primary-100"
              whileHover={{ boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold text-primary-900 mb-6 text-center"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.6 }}
              >
                Envie sua Mensagem
              </motion.h3>

              {submitStatus === 'success' && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Mensagem enviada com sucesso! Responderei em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Erro ao enviar mensagem. Tente novamente.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                />
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}