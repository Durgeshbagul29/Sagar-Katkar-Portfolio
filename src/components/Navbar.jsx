import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({to, children})=>{
  const loc = useLocation()
  const active = loc.pathname === to
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
        active 
          ? 'bg-gradient-to-r from-cyan-400 to-emerald-500 text-slate-900 shadow-lg' 
          : 'text-slate-300 hover:text-white hover:bg-slate-800'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-transparent py-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center font-bold text-slate-900 text-lg md:text-xl shadow-lg cursor-pointer">
            SK
          </div>
          <div>
            <div className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
              Sagar Katkar
            </div>
            <div className="text-xs md:text-sm text-slate-400 hidden sm:block">Game Developer</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/certificates">Certificates</NavLink>
          <NavLink to="/contact">Contact</NavLink>         
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg glass hover:bg-slate-800 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-4 glass rounded-xl mt-2 animate-fade-in-down">
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/certificates" onClick={() => setIsMenuOpen(false)}>Certificates</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <a 
              href="/assets/Sagar_Katkar_CV.pdf" 
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 font-semibold text-center mt-2"
              download
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}