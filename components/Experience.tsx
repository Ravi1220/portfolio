'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Text3D } from '@react-three/drei'

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Machine Learning And Python Programming Intern',
      company: 'Whirlybird Electronics Pvt.Ltd, Fatehpur',
      duration: 'Jun 2024 - Aug 2024',
      responsibilities: [
        'Implemented and tested Machine learning algorithms',
        'Performed data preprocessing',
        'Conducted Model evaluation',
        'Contributed to real-world projects, including developing predictive model for sales forecasting',
        'Utilized Python for data analysis and visualization'
      ]
    },
    {
      title: 'Green Intern',
      company: '1M1B (1 Million for 1 Billion) - Government Internship',
      duration: 'Nov 2024 - Present',
      responsibilities: [
        'Utilized Tableau to analyze climate data, identifying emission trends and renewable energy adoption patterns',
        'Developed strategies for decentralized renewable energy systems and emission hotspot mitigation',
        'Enhanced skills in data visualization and actionable climate solutions'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <Canvas>
          <Environment preset="city" />
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text3D
              font="/fonts/Geist_Bold.json"
              size={0.5}
              height={0.2}
              position={[-2, 2, -5]}
            >
              Experience
              <meshStandardMaterial color="#3498db" />
            </Text3D>
          </Float>
        </Canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 text-sm mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (idx * 0.1) }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-300">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 flex items-center gap-2">
                    <span>View Details</span>
                  </button>
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 flex items-center gap-2">
                    <span>Certificate</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

