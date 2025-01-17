'use client'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const menuItems = [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Skills", href: "skills" },
    { title: "Projects", href: "projects" },
    { title: "Contact", href: "contact" },
  ]

  return (
    <nav className={`fixed w-full transition-all duration-300 z-50 
      ${isScrolled 
        ? 'bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm shadow-lg' 
        : 'bg-blue-900 dark:bg-blue-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className={`text-xl font-bold transition-colors duration-300
              ${isScrolled 
                ? 'text-gray-800 dark:text-white' 
                : 'text-white'}`}>
              Your Name
            </h1>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors duration-300 mr-4
                ${isScrolled 
                  ? 'bg-gray-200 dark:bg-gray-700' 
                  : 'bg-blue-800 dark:bg-blue-800 text-white'}`}
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
            
            <div className="hidden md:flex items-center">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`ml-8 cursor-pointer transition-colors duration-300
                    ${isScrolled 
                      ? 'text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400' 
                      : 'text-white hover:text-blue-200'}`}
                >
                  {item.title}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
