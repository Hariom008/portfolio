'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Cloud, 
  Network, 
  Code, 
  Monitor, 
  Terminal, 
  GitBranch,
  Users,
  Database,
  Server,
  Shield,
  Zap,
  Settings
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Cloud Technologies',
    icon: Cloud,
    skills: ['AWS (EC2, S3, IAM, RDS, VPC, Lambda)', 'CloudFormation', 'CloudWatch', 'CloudTrail', 'OCI'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Networking',
    icon: Network,
    skills: ['CCNA', 'TCP/IP', 'VLAN', 'DHCP', 'Switching & Routing', 'L2/L3 Troubleshooting', 'GPON/EPON', 'OLT/ONU'],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Automation & DevOps',
    icon: Zap,
    skills: ['Python', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'Monitoring & Tools',
    icon: Monitor,
    skills: ['Zabbix', 'CloudWatch', 'MikroTik', 'Cisco', 'Huawei'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'Core Java', 'HTML'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Operating Systems',
    icon: Server,
    skills: ['Linux Administration', 'Windows Server'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
    color: 'from-gray-500 to-gray-700',
  },
  {
    title: 'Methodologies',
    icon: Users,
    skills: ['Agile', 'Scrum', 'Team Collaboration'],
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 card-hover group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-3 mb-4 flex items-center justify-center`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="text-sm text-gray-400 flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

