'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaExpand, FaCompress } from 'react-icons/fa'

const ResumeViewer: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          Resume
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-gray-900 p-6 rounded-xl shadow-2xl transition-all duration-300 ${
            isFullscreen ? 'fixed inset-4 z-50 overflow-auto' : ''
          }`}
        >
          <div className="flex justify-end gap-4 mb-4">
            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              {isFullscreen ? <FaCompress className="text-lg" /> : <FaExpand className="text-lg" />}
              <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
            <a
              href="/ravindra_kumar_resume.pdf"
              download="Ravindra_Kumar_Resume.pdf"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <FaDownload className="text-lg" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
          </div>
          <div className={`w-full ${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'h-[800px]'} bg-white rounded-lg overflow-hidden`}>
            <object
              data="/ravindra_kumar_resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full p-4">
                <p className="text-gray-800 mb-4">Unable to display PDF. Please download to view.</p>
                <a
                  href="/ravindra_kumar_resume.pdf"
                  download="Ravindra_Kumar_Resume.pdf"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeViewer

