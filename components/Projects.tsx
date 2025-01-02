import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Shoe Shopping App | EVOLITE',
      description: 'A basic and clean UI app for shopping different shoes online with ease. Features include category browsing for shoes, clothing, accessories, and new arrivals. The app showcases a minimalist design with the iconic tree logo representing growth and sustainability.',
      technologies: ['Flutter', 'Dart'],
      github: 'https://github.com/Ravi1220/evolite',
      image: '/evolite-preview.webp'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center text-gradient"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group perspective"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative transform-gpu transition-all duration-500 group-hover:rotate-y-12">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary transform-gpu transition-all duration-500 group-hover:scale-105 -z-10" />
                <div className="bg-background p-6 rounded-xl transform transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                  <div className="relative aspect-[9/19] mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={850}
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary bg-opacity-20 rounded-full text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                      View Source
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-80 transition-colors duration-300"
                    >
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

