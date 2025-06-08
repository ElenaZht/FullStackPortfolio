import React, { useState } from 'react'

interface SmallProjectCardProps {
  name: string
  stack: string[]
  image: string
  onSeeMore: () => void
}

export default function SmallProjectCard({ name, stack, image, onSeeMore }: SmallProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        {/* Project Image */}
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Card Content */}
        <div className="p-6">
          {/* Project Name */}
          <h3 className="text-xl font-bold text-dark mb-3">
            {name}
          </h3>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <p className="text-sm text-neutral mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-secondary text-dark text-xs rounded-md border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* See More Button */}
          <button 
            onClick={onSeeMore}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            className={`w-full py-3 px-4 rounded-md font-medium
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                       transform hover:-translate-y-0.5 hover:shadow-lg 
                       active:scale-95 ${
                         isPressed 
                           ? 'bg-[#00e054] text-dark' 
                           : isHovered 
                             ? 'bg-primary text-dark' 
                             : 'bg-dark text-white'
                       }`}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  )
}