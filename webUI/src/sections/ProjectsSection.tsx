import { useState, useEffect } from 'react'
import SmallProjectCard from '../components/SmallProjectCard'
import BigProjectCard from '../components/BigProjectCard'

interface ProjectData {
  name: string
  description: string
  longDescription: string
  stack: string[]
  images: string[]
  links: {
    github?: string
    live?: string
  }
  features: string[]
}

// Interface for the data structure in db.json
interface ProjectFromDB {
  id: number
  title: string
  stack: string[]
  description: string
  longDescription: string
  screenshots: string[]
  features: string[]
  links: {
    github?: string
    live?: string
  }
  status: string
  createdAt: string
  updatedAt: string
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch projects from db.json
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/db.json')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        
        // Transform the data to match our ProjectData interface
        const transformedProjects: ProjectData[] = data.projects.map((project: ProjectFromDB) => ({
          name: project.title,
          description: project.description,
          longDescription: project.longDescription,
          stack: project.stack,
          images: project.screenshots,
          links: {
            github: project.links.github,
            live: project.links.live
          },
          features: project.features
        }))
        
        setProjects(transformedProjects)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleSeeMore = (project: ProjectData) => {
    setSelectedProject(project)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedProject(null)
  }

  if (loading) {
    return (
      <div id="projects" className="bg-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            My Projects
          </h2>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-white text-lg">Loading projects...</div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div id="projects" className="bg-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            My Projects
          </h2>
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="text-red-400 text-lg">Error loading projects: {error}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="projects" className="bg-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          My Projects
        </h2>
        <p className="text-lg text-center text-gray-300 mb-8">
          Take a look at what I've been building lately.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <SmallProjectCard 
              key={index}
              project={project}
              onSeeMore={() => handleSeeMore(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Dialog */}
      {selectedProject && (
        <BigProjectCard 
          project={selectedProject}
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
        />
      )}
    </div>
  )
}
