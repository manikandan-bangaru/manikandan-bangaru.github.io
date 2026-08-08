import React, { useState } from 'react'
import { Smartphone, Shield, Sparkles, Menu, X, Info } from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'

export default function Navbar({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (onNavigate) {
      onNavigate(path)
    }
    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60 transition-all">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo - Renamed to Magiban Technologies */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/', null)}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-neon to-accent-purple p-0.5 shadow-[0_0_15px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_25px_rgba(14,165,233,0.7)] transition-all">
            <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-neon group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="text-lg sm:text-xl font-display font-bold tracking-tight text-white group-hover:text-accent-neon transition-colors">
            Magiban <span className="text-accent-neon">Technologies</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, '/', 'portfolio')}
            className="text-slate-300 hover:text-accent-neon text-sm font-medium transition-colors flex items-center gap-1.5"
          >
            <Smartphone className="w-4 h-4 text-accent-neon" />
            Mobile Apps
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '/', 'about')}
            className="text-slate-300 hover:text-accent-neon text-sm font-medium transition-colors flex items-center gap-1.5"
          >
            <Info className="w-4 h-4 text-accent-purple" />
            About Studio
          </a>
          <a 
            href="/policy.html" 
            onClick={(e) => handleNavClick(e, '/policy.html', null)}
            className={`text-sm font-medium transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
              currentPath === '/policy.html' 
                ? 'bg-accent-neon/20 border-accent-neon text-accent-neon' 
                : 'border-border/80 text-slate-300 hover:border-accent-neon hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4 text-accent-emerald" />
            Privacy Policy
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 py-4 space-y-4">
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, '/', 'portfolio')}
            className="block text-slate-200 hover:text-accent-neon font-medium text-base py-2 border-b border-border/40 flex items-center gap-2"
          >
            <Smartphone className="w-5 h-5 text-accent-neon" />
            Mobile Apps Showcase
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '/', 'about')}
            className="block text-slate-200 hover:text-accent-neon font-medium text-base py-2 border-b border-border/40 flex items-center gap-2"
          >
            <Info className="w-5 h-5 text-accent-purple" />
            About {SITE_CONFIG.name}
          </a>
          <a 
            href="/policy.html" 
            onClick={(e) => handleNavClick(e, '/policy.html', null)}
            className="block text-slate-200 hover:text-accent-emerald font-medium text-base py-2 flex items-center gap-2"
          >
            <Shield className="w-5 h-5 text-accent-emerald" />
            Privacy Policy & Disclosures
          </a>
        </div>
      )}
    </header>
  )
}
