import React from 'react'
import images from '../assets/images'

export default function Certificates(){
  const certificates = [
    {
      id: 1,
      title: "Unreal Engine Developer Certification",
      description: "Comprehensive certification covering Unreal Engine 4/5 development, including Blueprints, C++ programming, and advanced rendering techniques.",
      tech: ["Unreal Engine 4/5", "Blueprints", "C++", "Rendering"],
      issuer: "Epic Games",
      date: "March 2022",
      link: "https://example.com/certificate1",
      image: "https://cdn2.unrealengine.com/ue-logo-1400x788-1400x788-8f185e1e3635.jpg" // Epic Games logo
    },
    {
      id: 2,
      title: "Advanced Blueprint Scripting",
      description: "In-depth course on advanced Blueprint scripting techniques, including custom nodes, macros, and performance optimization.",
      tech: ["Blueprints", "Performance", "Optimization"],
      issuer: "Udemy",
      date: "November 2021",
      link: "https://example.com/certificate2",
      image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" // Udemy logo
    },
    {
      id: 3,
      title: "Game Physics & Animation",
      description: "Specialized course covering physics simulation, character animation systems, and ragdoll implementations in game engines.",
      tech: ["Physics", "Animation", "Ragdoll"],
      issuer: "Coursera",
      date: "August 2020",
      link: "https://example.com/certificate3",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png" // Coursera logo
    },
    {
      id: 4,
      title: "Niagara VFX Masterclass",
      description: "Masterclass focusing on Niagara Visual Effects system, particle simulation, and advanced VFX techniques.",
      tech: ["Niagara", "VFX", "Particles"],
      issuer: "Unreal Engine Academy",
      date: "June 2020",
      link: "https://example.com/certificate4",
      image: "https://cdn2.unrealengine.com/ue-logo-1400x788-1400x788-8f185e1e3635.jpg" // Unreal Engine logo
    },
    {
      id: 5,
      title: "Game Optimization & Performance",
      description: "Comprehensive guide to optimizing game performance across multiple platforms, including mobile and console.",
      tech: ["Optimization", "Performance", "Mobile"],
      issuer: "Pluralsight",
      date: "January 2020",
      link: "https://example.com/certificate5",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Pluralsight_logo.svg/2560px-Pluralsight_logo.svg.png" // Pluralsight logo
    },
    {
      id: 6,
      title: "Multiplayer Game Development",
      description: "Specialized training on developing multiplayer games, networking protocols, and server architecture.",
      tech: ["Multiplayer", "Networking", "Server"],
      issuer: "LinkedIn Learning",
      date: "September 2019",
      link: "https://example.com/certificate6",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" // LinkedIn Learning logo
    }
  ]

  return (
    <section className="space-y-12 mx-w-[1200px] mx-auto">
      <div className="text-center">
        <h1 className="section-title">Certificates</h1>
        <p className="section-subtitle mx-auto">
          My professional certifications and completed courses
        </p>
      </div>

      {/* Certificates Gallery */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id} 
            className="glass fade-in-up transition-all duration-300 p-6 relative overflow-visible group hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {/* Shining effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            <div className="relative z-10">
            {/* Certificate Header with Logo */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-700">
              {/* Small Provider Logo */}
              <div className="w-16 h-16 rounded-lg bg-slate-800 flex items-center justify-center p-2 flex-shrink-0">
                <img 
                  src={cert.image} 
                  alt={`${cert.issuer} logo`}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <div className="hidden text-2xl">🎓</div>
              </div>
              
              {/* Issuer and Date */}
              <div className="flex-1">
                <div className="text-cyan-400 font-bold text-sm">{cert.issuer}</div>
                <div className="text-slate-500 text-xs">{cert.date}</div>
              </div>
            </div>
            
            {/* Certificate Title */}
            <h3 className="text-lg font-bold mb-3 leading-tight">{cert.title}</h3>
            
            {/* Description */}
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{cert.description}</p>
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.tech.slice(0, 3).map((technology, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {technology}
                </span>
              ))}
              {cert.tech.length > 3 && (
                <span className="px-2 py-1 text-xs rounded bg-slate-900 text-slate-500">
                  +{cert.tech.length - 3}
                </span>
              )}
            </div>
            
            {/* View Button */}
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-xs flex items-center justify-center gap-2 py-2"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Certificate
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}