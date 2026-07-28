'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Cloud, Network, Brain, Code } from 'lucide-react'

const certifications = [
  {
    name: 'AWS Cloud Certification',
    icon: Cloud,
    color: 'from-orange-500 to-yellow-500',
    issuer: 'Amazon Web Services',
  },
  {
    name: 'CCNA 200-301',
    icon: Network,
    color: 'from-blue-500 to-cyan-500',
    issuer: 'Cisco',
  },
  {
    name: 'OCI 2025 AI Foundations Associate',
    icon: Brain,
    color: 'from-red-500 to-orange-500',
    issuer: 'Oracle',
  },
  {
    name: 'OCI 2025 Generative AI Professional',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    issuer: 'Oracle',
  },
  {
    name: 'Oracle Fusion AI Agent Studio Certified Foundations Associate',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    issuer: 'Oracle',
  },
  {
    name: 'Core Java & Python',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    issuer: 'Programming Certifications',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 card-hover group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} p-4 mb-4 flex items-center justify-center`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm">
                  <Award className="w-4 h-4" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

