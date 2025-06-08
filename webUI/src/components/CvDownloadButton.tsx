import React from 'react'

export default function CvDownloadButton() {
  const handleDownloadCV = () => {    
    const link = document.createElement('a')
    link.href = '/Elena_Zhytomirski_FullStack_CV (1).pdf'
    link.download = 'Elena_Zhytomirski_FullStack_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button 
      className="btn btn-lg px-8 py-3 border-2 rounded transition-all duration-300 hover:shadow-lg hover:bg-primary hover:border-primary hover:text-white text-base whitespace-nowrap"
      style={{
        borderColor: '#1f2937',
        color: '#1f2937',
        backgroundColor: 'transparent'
      }}
      onClick={handleDownloadCV}
    >
      Download CV
    </button>
  )
}
