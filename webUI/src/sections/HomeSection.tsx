import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CvDownloadButton from '../components/CvDownloadButton'

export default function HomeSection() {
  const [isViewProjectsPressed, setIsViewProjectsPressed] = useState(false)

  const handleViewProjectsMouseDown = () => {
    setIsViewProjectsPressed(true)
  }

  const handleViewProjectsMouseUp = () => {
    setIsViewProjectsPressed(false)
  }

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <NavBar/>
      
      {/* Hero Content */}
      <div className="hero min-h-screen pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center justify-between min-h-[80vh] lg:min-h-[70vh]">
            
            {/* Left side - Text content */}
            <div className="flex-1 max-w-3xl text-left lg:text-left md:text-center sm:text-center">
              {/* Greeting */}
              <p className="text-xl lg:text-2xl text-dark mb-4 font-light tracking-wide">
                Hi! I'm
              </p>
              
              {/* Main Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark mb-6 leading-tight tracking-tight">
                Elena Zhytomirski
              </h1>
              
              {/* Role */}
              <div className="relative inline-block mb-8">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-dark font-medium tracking-wide">
                  Full-Stack Developer
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 rounded-full"></div>
              </div>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-dark leading-relaxed font-light max-w-2xl lg:mx-0 sm:mx-auto mb-12">
                Driven to build elegant, intuitive web experiences using modern technologies and clean, efficient code.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-6 flex-wrap items-center lg:justify-start sm:justify-center mb-12">
                {/* Primary Button - View Projects */}
                <a 
                  href="#projects" 
                  className="btn btn-lg px-10 py-4 font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 rounded-lg"
                  style={{
                    backgroundColor: isViewProjectsPressed ? '#00e054' : '#00ff62',
                    borderColor: isViewProjectsPressed ? '#00e054' : '#00ff62',
                    color: isViewProjectsPressed ? '#ffffff' : '#1f2937'
                  }}
                  onMouseDown={handleViewProjectsMouseDown}
                  onMouseUp={handleViewProjectsMouseUp}
                  onMouseLeave={handleViewProjectsMouseUp}
                  onTouchStart={handleViewProjectsMouseDown}
                  onTouchEnd={handleViewProjectsMouseUp}
                >
                  View Projects
                </a>
                
                {/* Secondary Button - Download CV */}
                <CvDownloadButton />
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
