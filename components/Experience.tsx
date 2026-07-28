'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react'

const experiences = [
  {
    role: 'NOC Engineer (L1)',
    company: 'Net Access India Pvt Ltd',
    location: 'Pune, Maharashtra',
    duration: 'March 2025 - Present',
    achievements: [
      {
        text: 'Monitored and optimized L2/L3 network devices using Zabbix and MikroTik',
        metrics: '15% reliability boost, 20% downtime reduction',
      },
      {
        text: 'Configured OLT/ONU for GPON/EPON deployments',
        metrics: '99.9% uptime achieved',
      },
      {
        text: 'Orchestrated collaboration with L2/L3 escalation teams',
        metrics: '25% faster incident closure rate',
      },
    ],
  },
  {
    role: 'Junior Cloud Engineer (Intern)',
    company: 'SevenMentor Pvt Ltd',
    location: 'Pune, Maharashtra',
    duration: 'December 2024 - February 2025',
    achievements: [
      {
        text: 'Deployed and managed AWS services (EC2, S3, IAM, RDS, VPC, Lambda, CloudFormation)',
        metrics: '30% efficiency boost through Python automation',
      },
      {
        text: 'Implemented IAM least-privilege policies and MFA authentication',
        metrics: '40% reduction in unauthorized access attempts',
      },
      {
        text: 'Established CloudWatch monitoring and CloudTrail auditing',
        metrics: '50% system visibility increase, 35% compliance tracking improvement',
      },
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10"></div>

                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass rounded-xl p-6 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 }}
                          className="text-gray-300"
                        >
                          <div className="flex items-start gap-2">
                            {index % 2 !== 0 && <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />}
                            <div className="flex-1">
                              <span>{achievement.text}</span>
                              <span className="text-cyan-400 font-semibold block mt-1">
                                → {achievement.metrics}
                              </span>
                            </div>
                            {index % 2 === 0 && <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

