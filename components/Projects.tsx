'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Brain, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AWS IAM Security Enhancement',
    type: 'Cloud Security Project',
    date: 'January 2025',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    problem: 'Need for comprehensive IAM security policies and enhanced compliance visibility across AWS accounts.',
    solution: 'Designed comprehensive IAM policies, enforced MFA authentication, and activated CloudTrail auditing across all AWS accounts. Streamlined least-privilege access controls and automated security monitoring.',
    tools: ['AWS IAM', 'CloudTrail', 'MFA', 'Python', 'CloudFormation'],
    impact: [
      { metric: '40%', label: 'Reduction in unauthorized access attempts' },
      { metric: '35%', label: 'Increase in compliance visibility' },
    ],
  },
  {
    title: 'Machine Learning: Early Detection of Obesity',
    type: 'Healthcare Analytics Project',
    date: 'January 2022 - December 2024',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    problem: 'Early detection of obesity risk factors to support improved diagnostic workflows and preventive healthcare.',
    solution: 'Analyzed 100+ medical datasets using machine learning algorithms. Identified key predictors for early obesity detection through data preprocessing, feature engineering, and model optimization techniques.',
    tools: ['Python', 'Machine Learning', 'Data Analysis', 'Feature Engineering', 'Model Optimization'],
    impact: [
      { metric: '20%', label: 'Enhancement in model accuracy' },
      { metric: '100+', label: 'Medical datasets analyzed' },
    ],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-xl p-8 card-hover group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} p-3 flex items-center justify-center`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{project.type}</span>
                  <p className="text-sm text-gray-500 mt-1">{project.date}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Problem</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300 border border-gray-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                {project.impact.map((impact, impactIndex) => (
                  <div key={impactIndex} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}>
                      {impact.metric}
                    </div>
                    <div className="text-xs text-gray-400">{impact.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

