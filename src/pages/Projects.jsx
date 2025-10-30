import React, { useState, useEffect, useRef } from 'react'
import Gallery from '../components/Gallery'

export default function Projects(){
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('projects') // 'projects' or 'gallery'
  const [counts, setCounts] = useState({
    total: 0,
    published: 0,
    personal: 0,
    wip: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)
  const projects = [
    {
      id: 1,
      title: "Tanhaji: The Lion Maratha Warrior",
      description: "Lead Gameplay & Blueprint Developer. Published on Play Store & Steam with over 500K downloads. Historical action game based on the life of Tanhaji Malusare.",
      tags: ["Mobile", "Steam", "Published", "Blueprints", "Combat", "Historical"],
      category: "published",
      year: "2023",
      platform: "Mobile, PC",
      role: "Lead Developer",
      image: "tanhaji",
      link: "https://play.google.com/",
      github: "https://github.com"
    },
    {
      id: 2,
      title: "Battle of Jhansi",
      description: "Multiplayer minimap system, quiz system, and eCommerce integration for historical game. Featured in Google Play's Editor's Choice.",
      tags: ["Multiplayer", "UI", "Systems", "C++", "Networking", "Historical"],
      category: "published",
      year: "2022",
      platform: "Mobile",
      role: "Systems Developer",
      image: "jhansi",
      demo: true,
      github: "https://github.com"
    },
    {
      id: 3,
      title: "Maharana Pratap",
      description: "Cinematic environments & Niagara VFX for upcoming historical action game. Creating immersive battle sequences and character animations.",
      tags: ["VFX", "Environments", "Niagara", "WIP", "Cinematics", "Animation"],
      category: "wip",
      year: "2024",
      platform: "PC",
      role: "VFX Artist",
      image: "pratap",
      trailer: true
    },
    {
      id: 4,
      title: "Space Explorer",
      description: "Indie space exploration game with procedural generation and custom physics engine. Features dynamic asteroid fields and realistic orbital mechanics.",
      tags: ["Indie", "Procedural", "C++", "Blueprints", "Physics", "Space"],
      category: "personal",
      year: "2023",
      platform: "PC",
      role: "Solo Developer",
      image: "space",
      github: "https://github.com",
      demo: true
    },
    {
      id: 5,
      title: "Medieval Battle Simulator",
      description: "Real-time strategy game with complex AI systems and large-scale battles. Supports up to 1000 units on screen with optimized performance.",
      tags: ["AI", "Strategy", "Multiplayer", "C++", "RTS", "Optimization"],
      category: "personal",
      year: "2022",
      platform: "PC",
      role: "AI & Systems",
      image: "medieval",
      demo: true,
      github: "https://github.com"
    },
    {
      id: 6,
      title: "Puzzle Quest VR",
      description: "Virtual reality puzzle game with hand tracking and spatial audio. Created for Oculus Quest 2 with intuitive gesture-based controls.",
      tags: ["VR", "Puzzle", "Blueprints", "Niagara", "Oculus", "Hand Tracking"],
      category: "wip",
      year: "2024",
      platform: "VR",
      role: "VR Developer",
      image: "vr",
      trailer: true
    },
    {
      id: 7,
      title: "Cyber Runner",
      description: "Fast-paced cyberpunk endless runner with neon aesthetics. Features dynamic level generation and adaptive difficulty system.",
      tags: ["Mobile", "Cyberpunk", "Blueprints", "Runner", "Procedural"],
      category: "published",
      year: "2021",
      platform: "Mobile",
      role: "Gameplay Developer",
      image: "cyber",
      link: "https://play.google.com/",
      github: "https://github.com"
    },
    {
      id: 8,
      title: "Fantasy Tavern",
      description: "Cozy management simulation game with dialogue trees and relationship systems. Features over 50 unique characters with branching storylines.",
      tags: ["Simulation", "UI", "Dialogue", "Blueprints", "Story", "Management"],
      category: "personal",
      year: "2023",
      platform: "PC",
      role: "UI & Systems",
      image: "tavern",
      demo: true,
      github: "https://github.com"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateNumbers()
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [hasAnimated])

  const animateNumbers = () => {
    const targets = {
      total: projects.length,
      published: projects.filter(p => p.category === 'published').length,
      personal: projects.filter(p => p.category === 'personal').length,
      wip: projects.filter(p => p.category === 'wip').length
    }
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        total: Math.floor(targets.total * progress),
        published: Math.floor(targets.published * progress),
        personal: Math.floor(targets.personal * progress),
        wip: Math.floor(targets.wip * progress)
      })

      if (currentStep >= steps) {
        setCounts(targets)
        clearInterval(interval)
      }
    }, stepDuration)
  }

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'published', name: 'Published' },
    { id: 'personal', name: 'Personal' },
    { id: 'wip', name: 'Work in Progress' }
  ]

  return (
    <section className="space-y-12">
      <div className="text-center">
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle mx-auto">
          A collection of my game development work, from published titles to personal experiments
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-slate-800 rounded-lg">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 rounded-md font-semibold transition-all ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-slate-900 shadow-lg'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-2 rounded-md font-semibold transition-all ${
              activeTab === 'gallery'
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-slate-900 shadow-lg'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Gallery
          </button>
        </div>
      </div>

      {activeTab === 'projects' ? (
        <>
          {/* Filter and Search */}
          <div className="card p-4 sm:p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && e.target.blur()}
                    className="w-full p-2 sm:p-3 pr-12 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                  <button
                    onClick={() => document.activeElement.blur()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-slate-800 transition-colors"
                    aria-label="Search"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm ${
                      filter === category.id
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-slate-900 shadow-lg'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="card fade-in-up hover:scale-[1.02]"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="h-36 sm:h-48 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl font-bold text-slate-500">{project.title.charAt(0)}</div>
                    </div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2">
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded-full bg-slate-900/80 text-slate-200">
                        {project.year}
                      </span>
                      <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded-full ${
                        project.category === 'published' ? 'bg-emerald-500/20 text-emerald-400' : 
                        project.category === 'personal' ? 'bg-cyan-500/20 text-cyan-400' : 
                        'bg-amber-500/20 text-amber-400'
                      }`}>
                        {project.category === 'published' ? 'Published' : 
                         project.category === 'personal' ? 'Personal' : 'WIP'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    <span className="text-xs bg-slate-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                      {project.platform}
                    </span>
                  </div>
                  
                  <div className="text-slate-400 text-xs sm:text-sm mb-1">{project.role}</div>
                  
                  <p className="text-slate-300 mb-4 text-xs sm:text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded-full bg-slate-700 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs rounded-full bg-slate-800 text-slate-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5"
                      >
                        View Game
                      </a>
                    )}
                    
                    {project.demo && (
                      <button 
                        onClick={() => alert('Demo not included in this portfolio')}
                        className="btn-secondary text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5"
                      >
                        Play Demo
                      </button>
                    )}
                    
                    {project.trailer && (
                      <button 
                        onClick={() => alert('Trailer not embedded in this portfolio')}
                        className="btn-secondary text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5"
                      >
                        Watch Trailer
                      </button>
                    )}
                    
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-md glass text-xs sm:text-sm hover:bg-slate-700 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-4xl sm:text-5xl mb-4">🔍</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-slate-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" ref={statsRef}>
            <div className="text-center p-4 sm:p-6 glass rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{counts.total}</div>
              <div className="text-slate-300 text-sm sm:text-base">Total Projects</div>
            </div>
            <div className="text-center p-4 sm:p-6 glass rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">
                {counts.published}
              </div>
              <div className="text-slate-300 text-sm sm:text-base">Published Games</div>
            </div>
            <div className="text-center p-4 sm:p-6 glass rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                {counts.personal}
              </div>
              <div className="text-slate-300 text-sm sm:text-base">Personal Projects</div>
            </div>
            <div className="text-center p-4 sm:p-6 glass rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">
                {counts.wip}
              </div>
              <div className="text-slate-300 text-sm sm:text-base">In Development</div>
            </div>
          </div>
        </>
      ) : (
        /* Gallery Tab */
        <Gallery />
      )}
    </section>
  )
}