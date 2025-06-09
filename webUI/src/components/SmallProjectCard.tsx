import React, { useState } from 'react'

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

interface SmallProjectCardProps {
  project: ProjectData
  onSeeMore: () => void
}

export default function SmallProjectCard({ project, onSeeMore }: SmallProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
        {/* Project Image */}
        <div className="w-full h-64 overflow-hidden">
          <img 
            src={project.images[0] || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4odza4FnWTVq+EveWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8sqlf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRRctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg=="} 
            alt={project.name}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Card Content */}
        <div className="p-6">
          {/* Project Name */}
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-dark">
              {project.name}
            </h3>
            {project.links.live && (
              <>
                <span className="text-gray-400">|</span>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-green-600 text-sm font-medium transition-colors duration-200"
                >
                  Live
                </a>
              </>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <p className="text-sm text-neutral mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-secondary text-dark text-xs rounded-md border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-xs text-neutral">
                  +{project.stack.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Short Description - Fixed to 2 lines */}
          <p className="text-dark text-sm mb-4 flex-grow line-clamp-2 leading-relaxed min-h-[2.5rem]">
            {project.description}
          </p>
          
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
                           ? 'bg-[#00b341] text-white' 
                           : isHovered 
                             ? 'bg-[#00e054] text-white' 
                             : 'bg-[#00d14a] text-white'
                       }`}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  )
}