import React, { useState } from 'react'
import CvDownloadButton from './CvDownloadButton'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    closeMenu() // Close mobile menu if open
  }

  return (
    <div className="navbar-container fixed top-0 left-0 w-full bg-secondary px-4 lg:px-8 py-6 z-50">
      <div className="flex items-center justify-between w-full max-w-full min-w-0">
        {/* Logo section */}
        <a 
          href="#home" 
          className="text-2xl lg:text-3xl font-bold text-dark hover:text-primary transition-colors cursor-pointer flex-shrink-0"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          EZ
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
          <a 
            href="#projects" 
            className="text-lg text-dark hover:text-primary transition-colors py-2 px-4 whitespace-nowrap"
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href="#about" 
            className="text-lg text-dark hover:text-primary transition-colors py-2 px-4 whitespace-nowrap"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-lg text-dark hover:text-primary transition-colors py-2 px-4 whitespace-nowrap"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
          <CvDownloadButton />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden relative flex-shrink-0">
          <button 
            onClick={toggleMenu}
            className="btn btn-ghost p-3 text-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={closeMenu}
              ></div>
              
              <ul className="menu menu-lg absolute right-0 top-16 bg-white rounded-box z-50 w-60 min-w-[240px] p-4 shadow-lg border border-gray-100">
                <li>
                  <a 
                    href="#projects" 
                    className="text-lg text-dark transition-colors py-3 px-4 active:bg-gray-100"
                    onClick={(e) => handleNavClick(e, 'projects')}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-lg text-dark transition-colors py-3 px-4 active:bg-gray-100"
                    onClick={(e) => handleNavClick(e, 'about')}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-lg text-dark transition-colors py-3 px-4 active:bg-gray-100"
                    onClick={(e) => handleNavClick(e, 'contact')}
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-4">
                  <div onClick={closeMenu}>
                    <CvDownloadButton />
                  </div>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
