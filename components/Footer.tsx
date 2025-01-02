import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Ravindra Kumar. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/ravindra-kumar-89bb34286" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ravi1220" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.hackerrank.com/profile/ravindragupta747" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition duration-300">
              <SiHackerrank />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

