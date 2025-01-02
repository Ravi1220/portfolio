import React from 'react'
import Link from 'next/link'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Home', 'Resume', 'Projects', 'Experience', 'Education', 'Skills', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          RK
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-600 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header

