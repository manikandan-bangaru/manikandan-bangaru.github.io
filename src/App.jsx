import React, { useState, useEffect } from 'react'
import Navbar from './components/sections/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import PrivacyPolicy from './components/sections/PrivacyPolicy'
import Footer from './components/sections/Footer'
import AdSenseBanner from './components/common/AdSenseBanner'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigate = (path) => {
    setCurrentPath(path)
    if (window.history.pushState) {
      window.history.pushState(null, '', path)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isPrivacyPage = currentPath.includes('policy') || currentPath.includes('privacy')

  return (
    <div className="min-h-screen flex flex-col bg-background text-white selection:bg-accent-neon selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Conditional Route Render */}
      {isPrivacyPage ? (
        <PrivacyPolicy onBack={() => handleNavigate('/')} />
      ) : (
        <main>
          {/* Page 1 Unified Landing: Hero, 3D Canvas, Stats, Categories, and Products Showcase */}
          <HeroSection 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory}
          />
          
          {/* Studio Mission & Vision Section */}
          <AboutSection />

          {/* Strategic Ad Banner in Last Section (Only visible if ad is filled) */}
          <AdSenseBanner className="my-8" />
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
