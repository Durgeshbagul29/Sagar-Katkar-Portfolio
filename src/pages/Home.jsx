import React, { useState, useEffect, useRef } from 'react'

export default function Home(){
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    games: 0,
    systems: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)

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
      experience: 5,
      projects: 15,
      games: 10,
      systems: 100
    }
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        games: Math.floor(targets.games * progress),
        systems: Math.floor(targets.systems * progress)
      })

      if (currentStep >= steps) {
        setCounts(targets)
        clearInterval(interval)
      }
    }, stepDuration)
  }

  const skills = [
    "Unreal Engine 4/5", 
    "Blueprints", 
    "C++ Gameplay", 
    "Niagara VFX", 
    "UI/UX Design",
    "Game Optimization",
    "Multiplayer Systems",
    "Shader Programming"
  ]

  const featuredProjects = [
    {
      title: "Tanhaji: The Lion Maratha Warrior",
      description: "Lead Gameplay & Blueprint Developer. Published on Play Store & Steam with over 500K downloads. Historical action game based on the life of Tanhaji Malusare.",
      tags: ["Mobile", "Steam", "Published", "Blueprints", "Combat", "Historical"],
      status: "Published",
      link: "https://play.google.com/store/apps/details?id=com.tanhaji.game" // Replace with actual link
    },
    {
      title: "Battle of Jhansi",
      description: "Multiplayer minimap system, quiz system, and eCommerce integration for historical game. Featured in Google Play's Editor's Choice.",
      tags: ["Multiplayer", "UI", "Systems", "C++", "Networking", "Historical"],
      status: "Published",
      link: "https://play.google.com/store/apps/details?id=com.jhansi.game" // Replace with actual link
    },
    {
      title: "Maharana Pratap",
      description: "Cinematic environments & Niagara VFX for upcoming historical action game. Creating immersive battle sequences and character animations.",
      tags: ["VFX", "Environments", "Niagara", "WIP", "Cinematics", "Animation"],
      status: "In Development",
      link: "#" // No link for in-development project
    }
  ]

  const services = [
    {
      icon: "🎮",
      title: "Gameplay Programming",
      description: "Creating engaging gameplay mechanics and systems using Blueprints and C++."
    },
    {
      icon: "✨",
      title: "Visual Effects",
      description: "Designing stunning particle effects and visual systems with Niagara VFX."
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description: "Optimizing games for mobile platforms with efficient resource management."
    },
    {
      icon: "🌐",
      title: "Multiplayer Systems",
      description: "Building robust multiplayer architectures and networked gameplay features."
    }
  ]

  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center my-10 md:mt-20">
        {/* Left Side - Text Content */}
        <div className="space-y-6 fade-in-up">
          <div className="inline-block px-4 py-1 bg-slate-800 rounded-full text-cyan-400 text-sm font-semibold mb-4">
            Unreal Engine Developer
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Sagar Katkar</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Game Developer</span>
          </h1>
          <p className="text-md text-slate-300">
            I create immersive gaming experiences with cutting-edge technology, focusing on gameplay systems, 
            visual effects, and optimized performance for PC and mobile platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a 
              className="btn-primary" 
              href="/projects"
            >
              View My Work
            </a>
            <a 
              className="btn-secondary" 
              href="https://www.linkedin.com/in/sagar-katkar-a3ab50146/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center overflow-hidden">
              <img 
                src="assets\sagar.png" 
                alt="Sagar Katkar" 
                className="w-full h-full object-cover"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))'
                }}
              />
            </div>
            {/* Horizontal line below image */}
            <div className="mt-6 mx-auto max-w-md">
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
       

      {/* Services Section */}
      <div className="py-8">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle mx-auto">
          Specialized services to bring your game ideas to life
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card text-center fade-in-up cursor-pointer hover:scale-[1.03] transition-transform duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-8" ref={statsRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 glass rounded-xl fade-in-up">
            <div className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-2">{counts.experience}+</div>
            <div className="text-slate-300 text-sm sm:text-base">Years Experience</div>
          </div>
          <div className="text-center p-4 sm:p-6 glass rounded-xl fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="text-2xl sm:text-4xl font-bold text-emerald-400 mb-2">{counts.projects}+</div>
            <div className="text-slate-300 text-sm sm:text-base">Projects Completed</div>
          </div>
          <div className="text-center p-4 sm:p-6 glass rounded-xl fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="text-2xl sm:text-4xl font-bold text-purple-400 mb-2">{counts.games}+</div>
            <div className="text-slate-300 text-sm sm:text-base">Games Published</div>
          </div>
          <div className="text-center p-4 sm:p-6 glass rounded-xl fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="text-2xl sm:text-4xl font-bold text-amber-400 mb-2">{counts.systems}+</div>
            <div className="text-slate-300 text-sm sm:text-base">Systems Developed</div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="section-title !text-left">Featured Projects</h2>
            <p className="section-subtitle !text-left">
              Check out some of my recent work and game development projects
            </p>
          </div>
          <a href="/projects" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center whitespace-nowrap">
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="card fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="h-40 sm:h-48 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="text-3xl sm:text-4xl font-bold text-slate-500">{project.title.charAt(0)}</div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Published' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 text-xs rounded-full bg-slate-700 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-sm"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 text-center">
        <div className="card max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Have a game development project in mind? I'm always excited to collaborate on innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Start a Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}