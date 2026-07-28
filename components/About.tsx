'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, Network, Zap } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Network, label: 'Network Reliability', value: '15%', description: 'Improvement' },
    { icon: Zap, label: 'Downtime Reduction', value: '20%', description: 'Reduction' },
    { icon: Cloud, label: 'Operational Efficiency', value: '30%', description: 'Boost' },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-blue-400 font-semibold">Cloud and NOC Engineer</span> with a passion for 
              building robust, scalable infrastructure solutions. My expertise spans AWS cloud services, 
              networking technologies, and automation through Python.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I've demonstrated success in improving network reliability by <span className="text-cyan-400 font-bold">15%</span>, 
              slashing downtime by <span className="text-cyan-400 font-bold">20%</span>, and accelerating operational 
              efficiency by <span className="text-cyan-400 font-bold">30%</span> through strategic automation and 
              proactive monitoring.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My focus is on architecting scalable cloud solutions, enforcing security best practices, 
              and optimizing infrastructure for high availability and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center card-hover"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Profile image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-48 h-48 rounded-full glass border-4 border-blue-500/30 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-400">HD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

