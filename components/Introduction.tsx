import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

const Introduction: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-animated relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="text-center z-10">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ravindra Kumar
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-text-secondary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Computer Science & Engineering Student | Machine Learning Enthusiast
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://www.linkedin.com/in/ravindra-kumar-89bb34286" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ravi1220" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.hackerrank.com/profile/ravindragupta747" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-accent transition duration-300">
            <SiHackerrank />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction

