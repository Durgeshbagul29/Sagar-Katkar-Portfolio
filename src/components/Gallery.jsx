import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Dummy gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Tanhaji Game Scene",
      category: "Published",
      image: "/placeholder-image",
      description: "In-game screenshot from Tanhaji: The Lion Maratha Warrior showcasing the combat system."
    },
    {
      id: 2,
      title: "Battle of Jhansi Map",
      category: "Published",
      image: "/placeholder-image",
      description: "Multiplayer map design for Battle of Jhansi with strategic positioning elements."
    },
    {
      id: 3,
      title: "Niagara VFX Demo",
      category: "VFX",
      image: "/placeholder-image",
      description: "Particle effects created with Niagara for explosion sequences."
    },
    {
      id: 4,
      title: "UI Design Concept",
      category: "UI/UX",
      image: "/placeholder-image",
      description: "User interface design for mobile game menu system."
    },
    {
      id: 5,
      title: "Character Animation",
      category: "Animation",
      image: "/placeholder-image",
      description: "Character rig and animation workflow in Unreal Engine."
    },
    {
      id: 6,
      title: "Environment Art",
      category: "Environment",
      image: "/placeholder-image",
      description: "Cinematic environment setup for historical battle scene."
    },
    {
      id: 7,
      title: "Blueprint System",
      category: "Systems",
      image: "/placeholder-image",
      description: "Complex gameplay system implemented with Blueprints."
    },
    {
      id: 8,
      title: "Shader Work",
      category: "Graphics",
      image: "/placeholder-image",
      description: "Custom shader development for realistic water surfaces."
    }
  ]

  const categories = ['All', 'Published', 'VFX', 'UI/UX', 'Animation', 'Environment', 'Systems', 'Graphics']
  const [filter, setFilter] = useState('All')

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="space-y-8">
      {/* Category Filters - only show on full gallery page */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm ${
              filter === category
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-slate-900 shadow-lg'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="card cursor-pointer group"
            onClick={() => openModal(item)}
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 mb-3 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-500">📷</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-sm mb-1 truncate">{item.title}</h3>
            <p className="text-slate-400 text-xs line-clamp-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors z-10"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-6xl">📷</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
                <p className="text-slate-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery