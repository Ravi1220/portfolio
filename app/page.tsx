'use client'

import React, { useState, useEffect } from 'react'
import Background from '../components/3d/Background'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import ResumeViewer from '../components/ResumeViewer'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
            section.classList.add('fade-in')
          }
        }
      })
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Call the function to apply initial states
    handleScroll()

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Background />
      <div className="relative z-10">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Introduction />
          <ResumeViewer />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

