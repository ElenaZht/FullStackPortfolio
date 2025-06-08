import React, { useState } from 'react'
import myPhoto from '../assets/my_photo.jpeg'

export default function AboutMeSection() {
  const [isContactPressed, setIsContactPressed] = useState(false)

  const handleContactMouseDown = () => {
    setIsContactPressed(true)
  }

  const handleContactMouseUp = () => {
    setIsContactPressed(false)
  }

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div id="about" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Text content */}
          <div className="order-1 lg:order-1">
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-dark mb-8 leading-tight">
              About Me
            </h2>
            
            {/* Description */}
            <div className="space-y-6 mb-10">
              <p className="text-lg lg:text-xl text-dark leading-relaxed font-light">
                I'm a full-stack developer passionate about building intuitive, impactful web applications.
                My journey began with curiosity and grew into a strong commitment to creating solutions that improve everyday experiences.
              </p>
              
              <p className="text-lg lg:text-xl text-dark leading-relaxed font-light">
                I specialize in modern technologies like React, TypeScript, Node.js, and relational databases, with a focus on clean, maintainable code and thoughtful design.
              </p>
              
              <p className="text-lg lg:text-xl text-dark leading-relaxed font-light">
                Beyond coding, I enjoy exploring new tools, learning continuously, and collaborating on meaningful projects. I'm always ready for the next challenge and excited to contribute where technology meets purpose.
              </p>
            </div>

            {/* Contact Button */}
            <a 
              href="#contact" 
              className="inline-block btn btn-lg px-10 py-4 font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 rounded-lg"
              style={{
                backgroundColor: isContactPressed ? '#00e054' : '#00ff62',
                borderColor: isContactPressed ? '#00e054' : '#00ff62',
                color: isContactPressed ? '#ffffff' : '#1f2937'
              }}
              onClick={handleContactClick}
              onMouseDown={handleContactMouseDown}
              onMouseUp={handleContactMouseUp}
              onMouseLeave={handleContactMouseUp}
              onTouchStart={handleContactMouseDown}
              onTouchEnd={handleContactMouseUp}
            >
              Contact Me
            </a>
          </div>

          {/* Right side - Portrait */}
          <div className="order-2 lg:order-2">
            <div className="relative max-w-lg mx-auto">
              {/* Your Photo */}
              <div className="w-full h-96 lg:h-[500px] xl:h-[600px] overflow-hidden">
                <img 
                  src={myPhoto} 
                  alt="Elena Zhytomirski - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}