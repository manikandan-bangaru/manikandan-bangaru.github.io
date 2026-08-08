import React from 'react'
import { Mail, Shield, Smartphone } from 'lucide-react'
import { SITE_CONFIG } from '../../constants/siteConfig'

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, path, sectionId) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(path)
    }
    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId)
        if (elem) elem.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-border/80 pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Intro */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-white mb-3">
              Magiban <span className="text-accent-neon">Technologies</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {SITE_CONFIG.fullName} is a premier mobile studio crafting top-tier Android & iOS puzzle games, RPG workout trackers, and educational software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-accent-purple" />
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, '/', null)} className="hover:text-accent-neon transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, '/', 'portfolio')} className="hover:text-accent-neon transition-colors">
                  Mobile Apps Directory
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '/', 'about')} className="hover:text-accent-neon transition-colors">
                  About Our Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent-emerald" />
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/policy.html" 
                  onClick={(e) => handleLinkClick(e, '/policy.html', null)}
                  className="hover:text-accent-emerald transition-colors font-medium flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-accent-emerald" />
                  Privacy Policy & Disclosures
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="hover:text-accent-neon transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-neon" /> 
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} {SITE_CONFIG.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>{SITE_CONFIG.location}</span>
            <span>•</span>
            <a href="/policy.html" onClick={(e) => handleLinkClick(e, '/policy.html', null)} className="hover:text-slate-300">
              Privacy Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
