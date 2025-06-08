import React, { useState, useEffect } from 'react'
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectData {
  name: string
  description: string
  longDescription: string
  stack: string[]
  images: string[]
  links: {
    github?: string
    live?: string
    demo?: string
  }
  features: string[]
}

interface BigProjectCardProps {
  project: ProjectData
  isOpen: boolean
  onClose: () => void
}

export default function BigProjectCard({ project, isOpen, onClose }: BigProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Disable background scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl lg:text-3xl font-bold text-dark">
            {project.name}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image Carousel */}
          {project.images.length > 0 && (
            <div className="relative mb-6">
              <div className="w-full h-64 lg:h-80 overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Carousel Controls */}
              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-dark p-2 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 text-dark p-2 rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-md"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-primary' 
                            : 'bg-white bg-opacity-60'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-dark mb-3">Description</h3>
            <p className="text-dark leading-relaxed mb-4">
              {project.description}
            </p>
            {project.longDescription && (
              <p className="text-dark leading-relaxed">
                {project.longDescription}
              </p>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-dark mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-secondary text-dark text-sm rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-dark mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-dark text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-dark rounded-lg hover:bg-green-400 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-dark text-dark rounded-lg hover:bg-dark hover:text-white transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}