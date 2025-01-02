import React from 'react'
import { motion } from 'framer-motion'

const Skills: React.FC = () => {
  const skills = [
    { name: 'C Programming', color: 'from-blue-400 to-blue-600' },
    { name: 'C++ Programming', color: 'from-indigo-400 to-indigo-600' },
    { name: 'Machine Learning', color: 'from-green-400 to-green-600' },
    { name: 'SQL', color: 'from-red-400 to-red-600' },
    { name: 'Tableau', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Linux', color: 'from-purple-400 to-purple-600' },
    { name: 'Data Analysis', color: 'from-pink-400 to-pink-600' },
    { name: 'Flutter', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Dart', color: 'from-teal-400 to-teal-600' },
    { name: 'Python', color: 'from-orange-400 to-orange-600' }
  ]

  const certifications = [
    'Complete Machine Learning 2024 A-Z™: 10 Real World Projects (Udemy)',
    'Master Python by building 100 projects in 100 days (Udemy)',
    'Hackerrank Certifications'
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-animated">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Certifications
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`h-32 rounded-lg p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 bg-gradient-to-br ${skill.color}`}
              >
                <div className="relative z-10 h-full flex items-center justify-center text-center">
                  <span className="font-semibold text-white text-lg">{skill.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Certifications & Trainings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="text-lg font-medium text-white">{cert}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

