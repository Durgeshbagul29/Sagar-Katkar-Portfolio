import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

export default function App(){
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Routes location={location}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/certificates" element={<Certificates/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}