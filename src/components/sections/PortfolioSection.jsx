import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Atropos from 'atropos/react'
import { apps, categories } from '../../data/apps'
import { Star, Download, ExternalLink } from 'lucide-react'

export default function PortfolioSection({ selectedCategory, onSelectCategory }) {
  const activeCategory = selectedCategory || 'All'

  const filteredApps = activeCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === activeCategory)

  const handleOpenStore = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full bg-accent-neon/10 border border-accent-neon/30 text-accent-neon text-xs font-semibold uppercase tracking-wider mb-3"
          >
            Showcase Directory
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-display font-bold text-white mb-4"
          >
            Mobile Apps & Games Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base font-sans"
          >
            Explore our studio's top-rated applications across Fitness RPG, Puzzle Games, Productivity, and Education.
          </motion.p>
        </div>

        {/* Accessible Filter Tabs */}
        <div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          role="tablist"
          aria-label="App categories filter"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-accent-neon text-white shadow-[0_0_15px_rgba(14,165,233,0.5)] scale-105' 
                  : 'bg-card text-slate-300 hover:bg-slate-800 border border-border/60 hover:border-accent-neon/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* App Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredApps.map((app) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={app.id}
                className="h-full flex flex-col"
              >
                {/* Outer Card Wrapper */}
                <div className="bg-card backdrop-blur-md rounded-2xl overflow-hidden border border-border/80 flex flex-col h-full shadow-xl hover:border-accent-neon/50 transition-all duration-300 group">
                  
                  {/* 3D Atropos Banner & Info Container */}
                  <Atropos className="atropos-app-card w-full flex-1" shadow={false} highlight={true}>
                    <div className="h-full flex flex-col justify-between">
                      
                      {/* Image Header Area */}
                      <div className="h-48 overflow-hidden bg-slate-900/90 relative flex items-center justify-center p-6">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 z-10" />
                        
                        <img 
                          src={app.image} 
                          alt={`${app.title} - Official Icon`} 
                          className="max-h-36 max-w-[140px] object-contain z-0 transform group-hover:scale-110 transition-transform duration-500 rounded-2xl shadow-lg"
                          loading="lazy"
                          width="140"
                          height="140"
                          data-atropos-offset="2"
                        />
                        
                        {/* Rating Badge */}
                        <div className="absolute top-3 right-3 z-20 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-md" data-atropos-offset="4">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-white text-xs font-bold">{app.rating}</span>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute bottom-3 left-3 z-20" data-atropos-offset="3">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-neon bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-accent-neon/30">
                            {app.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Body Area */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent-neon transition-colors" data-atropos-offset="2">
                            {app.title}
                          </h3>
                          <p className="text-slate-300 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed" data-atropos-offset="1">
                            {app.shortDescription}
                          </p>

                          {/* Feature Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-2" data-atropos-offset="1.5">
                            {app.features.map(feature => (
                              <span key={feature} className="text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </Atropos>

                  {/* 100% Reliable & Touch-Friendly Store Action Bar Outside Atropos Tilt */}
                  <div className="p-4 bg-slate-950/90 border-t border-border/60 flex items-center justify-end gap-2 z-40 relative">
                    
                    {/* Large, Glowing, High-Contrast Store Buttons */}
                    <div className="flex items-center gap-2">
                      {app.links.play && app.links.play !== '#' && (
                        <a 
                          href={app.links.play} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => handleOpenStore(e, app.links.play)}
                          onPointerDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          aria-label={`Get ${app.title} on Google Play Store`}
                          className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-accent-neon/60 hover:border-accent-neon hover:bg-accent-neon/25 shadow-[0_0_15px_rgba(14,165,233,0.35)] hover:shadow-[0_0_30px_rgba(14,165,233,0.8)] transform hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-50 group/storebtn"
                        >
                          <img 
                            src="images/apps/google-play-badge.png" 
                            alt="Google Play Store" 
                            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover/storebtn:scale-105" 
                          />
                          <ExternalLink className="w-3.5 h-3.5 text-accent-neon opacity-80 group-hover/storebtn:opacity-100 hidden sm:inline" />
                        </a>
                      )}
                      
                      {app.links.samsung && app.links.samsung !== '#' && (
                        <a 
                          href={app.links.samsung} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => handleOpenStore(e, app.links.samsung)}
                          onPointerDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          aria-label={`Get ${app.title} on Samsung Galaxy Store`}
                          className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-purple-500/60 hover:border-purple-400 hover:bg-purple-500/25 shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transform hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-50 group/storebtn"
                        >
                          <img 
                            src="images/apps/GalaxyStore.png" 
                            alt="Samsung Galaxy Store" 
                            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover/storebtn:scale-105" 
                          />
                          <ExternalLink className="w-3.5 h-3.5 text-purple-400 opacity-80 group-hover/storebtn:opacity-100 hidden sm:inline" />
                        </a>
                      )}
                    </div>

                  </div>
                  
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
