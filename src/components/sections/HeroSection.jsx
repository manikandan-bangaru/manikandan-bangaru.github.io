import React, { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Download, Layers, Sparkles, Star, Activity, Apple } from 'lucide-react'
import Atropos from 'atropos/react'
import Hero3D from '../canvas/Hero3D'
import ErrorBoundary from '../common/ErrorBoundary'
import { apps, categories } from '../../data/apps'
import { getSmartStoreLink, detectUserDevice } from '../../utils/deviceDetect'

function CounterValue({ target, suffix = '+' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const end = parseInt(target, 10)
    if (isNaN(end)) return

    const duration = 1600
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3)))
      setCount(currentCount)

      if (frame >= totalFrames) {
        setCount(end)
        clearInterval(timer)
      }
    }, frameRate)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function HeroSection({ selectedCategory, onSelectCategory }) {
  const activeCategory = selectedCategory || 'All'

  const filteredApps = activeCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === activeCategory)

  const stats = [
    { 
      label: 'Total Downloads', 
      numValue: 10000, 
      suffix: '+', 
      icon: Download, 
      color: 'text-accent-emerald', 
      bgGradient: 'bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-950/90 border-emerald-500/30 hover:border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.15)]' 
    },
    { 
      label: 'Published Apps', 
      numValue: 8, 
      suffix: '+', 
      icon: Smartphone, 
      color: 'text-accent-neon', 
      bgGradient: 'bg-gradient-to-br from-sky-950/40 via-slate-900/90 to-slate-950/90 border-sky-500/30 hover:border-sky-400 shadow-[0_10px_30px_rgba(14,165,233,0.15)]' 
    },
    { 
      label: 'App Categories', 
      numValue: 4, 
      suffix: '', 
      icon: Layers, 
      color: 'text-accent-purple', 
      bgGradient: 'bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-slate-950/90 border-purple-500/30 hover:border-purple-400 shadow-[0_10px_30px_rgba(139,92,246,0.15)]' 
    },
  ]

  const handleOpenStore = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  // Handle smart device-aware card click
  const handleCardClick = (e, appLinks) => {
    // Only trigger if user clicked on card background/content, not interactive store buttons directly
    const target = e.target
    if (target.closest('a') || target.closest('button')) {
      return
    }
    const targetUrl = getSmartStoreLink(appLinks)
    if (targetUrl && targetUrl !== '#') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const featuredApp = apps.find(app => app.id === 'solo-level-up') || apps[0]

  return (
    <section className="relative min-h-screen pt-6 pb-20 overflow-hidden gradient-mesh-bg">
      {/* 3D WebGL Canvas Background with Resilient ErrorBoundary */}
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-[#090d16]" />}>
        <Suspense fallback={<div className="absolute inset-0 bg-[#090d16]" />}>
          <Hero3D />
        </Suspense>
      </ErrorBoundary>

      {/* Glassmorphism Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090d16]/40 to-[#090d16] -z-10" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[25rem] bg-gradient-to-r from-accent-neon/15 via-accent-purple/15 to-accent-emerald/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
        
        {/* Featured Pill Badge with Dynamic Store Link Action */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={(e) => handleCardClick(e, featuredApp.links)}
          title={`Click to get ${featuredApp.title}`}
          className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 border border-accent-neon/40 text-accent-neon text-xs sm:text-sm font-semibold mb-6 backdrop-blur-xl shadow-[0_0_25px_rgba(14,165,233,0.3)] hover:scale-105 transition-all cursor-pointer group"
        >
          <Sparkles className="w-4 h-4 text-accent-neon group-hover:rotate-12 transition-transform" />
          <span>New Release: {featuredApp.title}</span>
          <span className="flex items-center text-yellow-400 font-bold gap-0.5 ml-1.5">
            <Star className="w-3.5 h-3.5 fill-yellow-400" /> {featuredApp.rating}
          </span>
        </motion.div>

        {/* Main H1 Title - Dynamic Gradient Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-4"
        >
          Magiban <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-accent-purple to-accent-emerald">Technologies</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-sans leading-relaxed"
        >
          Crafting cutting-edge mobile applications, gamified RPG workout trackers, and top-rated puzzle games that transform daily digital experiences.
        </motion.p>

        {/* 3D Stat Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Atropos key={stat.label} className="atropos-stat-card rounded-2xl overflow-hidden" shadow={false} highlight={true}>
                <div className={`h-full rounded-2xl ${stat.bgGradient} backdrop-blur-xl border p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 group overflow-hidden relative`}>
                  
                  <div className={`flex justify-center mb-1.5 ${stat.color}`} data-atropos-offset="3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="text-xl sm:text-3xl font-display font-extrabold text-white tracking-tight" data-atropos-offset="5">
                    <CounterValue target={stat.numValue} suffix={stat.suffix} />
                  </div>

                  <div className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1" data-atropos-offset="2">
                    {stat.label}
                  </div>
                </div>
              </Atropos>
            )
          })}
        </motion.div>

        {/* App Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto"
          role="tablist"
          aria-label="App categories filter"
        >
          <span className="text-xs uppercase font-bold text-slate-400 mr-2 tracking-wider hidden sm:inline flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-accent-neon" />
            Categories:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer backdrop-blur-md border ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-accent-neon via-sky-500 to-accent-purple text-white border-accent-neon shadow-[0_0_25px_rgba(14,165,233,0.6)] scale-105' 
                  : 'bg-slate-900/80 text-slate-300 border-border/80 hover:border-accent-neon/50 hover:text-white hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* DIRECT PAGE 1 PRODUCTS SHOWCASE GRID WITH SMART DEVICE CARD TAP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left max-w-6xl mx-auto"
        >
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
                {/* 3D Atropos Tilt App Card with Smart Device Tap Action */}
                <div 
                  onClick={(e) => handleCardClick(e, app.links)}
                  className="bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/95 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 flex flex-col h-full shadow-2xl hover:border-accent-neon/60 hover:shadow-[0_15px_35px_rgba(14,165,233,0.2)] transition-all duration-500 group cursor-pointer"
                >
                  
                  {/* 3D Atropos Visual Banner */}
                  <Atropos className="atropos-app-card w-full flex-1 rounded-t-2xl overflow-hidden" shadow={false} highlight={true}>
                    <div className="h-full flex flex-col justify-between">
                      
                      {/* Image Header Area */}
                      <div className="h-48 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative flex items-center justify-center p-6">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 z-10" />
                        
                        <div className="absolute w-24 h-24 bg-accent-neon/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                        <img 
                          src={app.image} 
                          alt={`${app.title} - Official Icon`} 
                          className="max-h-36 max-w-[140px] object-contain z-0 transform group-hover:scale-110 transition-transform duration-500 rounded-2xl shadow-xl border border-white/10"
                          loading="lazy"
                          width="140"
                          height="140"
                          data-atropos-offset="4"
                        />
                        
                        {/* Rating Badge */}
                        <div className="absolute top-3 right-3 z-20 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-md" data-atropos-offset="5">
                          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-white text-xs font-bold">{app.rating}</span>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute bottom-3 left-3 z-20" data-atropos-offset="3">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-neon bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-accent-neon/30">
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

                  {/* Dynamic Adaptive Store Action Bar */}
                  <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-2 z-50 relative rounded-b-2xl">
                    <div className="flex items-center gap-2">
                      
                      {/* Apple App Store Link (If provided) */}
                      {(app.links.appstore || app.links.app) && (app.links.appstore !== '#' || app.links.app !== '#') && (app.links.appstore !== '' || app.links.app !== '') && (
                        <a 
                          href={app.links.appstore || app.links.app} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => handleOpenStore(e, app.links.appstore || app.links.app)}
                          onPointerDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          aria-label={`Get ${app.title} on Apple App Store`}
                          className="relative flex items-center px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-600 hover:border-white hover:bg-slate-800 shadow-[0_0_15px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-50 group/storebtn"
                        >
                          <img 
                            src="images/apps/app-store-Batch.png" 
                            alt="Apple App Store" 
                            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover/storebtn:scale-105" 
                          />
                        </a>
                      )}

                      {/* Google Play Store Link (If available) */}
                      {app.links.play && app.links.play !== '#' && app.links.play !== '' && (
                        <a 
                          href={app.links.play} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => handleOpenStore(e, app.links.play)}
                          onPointerDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          aria-label={`Get ${app.title} on Google Play Store`}
                          className="relative flex items-center px-3 py-1.5 rounded-xl bg-slate-900 border border-accent-neon/60 hover:border-accent-neon hover:bg-accent-neon/25 shadow-[0_0_15px_rgba(14,165,233,0.35)] hover:shadow-[0_0_30px_rgba(14,165,233,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-50 group/storebtn"
                        >
                          <img 
                            src="images/apps/google-play-badge.png" 
                            alt="Google Play Store" 
                            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover/storebtn:scale-105" 
                          />
                        </a>
                      )}
                      
                      {/* Samsung Galaxy Store Link (If Play Store missing or Samsung link specified) */}
                      {app.links.samsung && app.links.samsung !== '#' && app.links.samsung !== '' && (
                        <a 
                          href={app.links.samsung} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => handleOpenStore(e, app.links.samsung)}
                          onPointerDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          aria-label={`Get ${app.title} on Samsung Galaxy Store`}
                          className="relative flex items-center px-3 py-1.5 rounded-xl bg-slate-900 border border-purple-500/60 hover:border-purple-400 hover:bg-purple-500/25 shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer z-50 group/storebtn"
                        >
                          <img 
                            src="images/apps/GalaxyStore.png" 
                            alt="Samsung Galaxy Store" 
                            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover/storebtn:scale-105" 
                          />
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
