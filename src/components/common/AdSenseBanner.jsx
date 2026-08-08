import React, { useEffect, useRef, useState } from 'react'

export default function AdSenseBanner({ 
  adClient = "ca-pub-6804393425769663", 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = "true",
  className = "" 
}) {
  const [adLoaded, setAdLoaded] = useState(false)
  const insRef = useRef(null)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (e) {
      console.warn("AdSense push notification:", e)
    }

    // Monitor if AdSense successfully loads content
    const checkAdStatus = () => {
      if (insRef.current) {
        const status = insRef.current.getAttribute('data-ad-status')
        const height = insRef.current.clientHeight
        if (status === 'filled' || height > 20) {
          setAdLoaded(true)
        }
      }
    }

    const timer = setTimeout(checkAdStatus, 1200)
    const interval = setInterval(checkAdStatus, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  // If ad is not loaded or unfilled, do not render any container or layout box!
  if (!adLoaded) {
    return (
      <div className="hidden">
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'none' }}
          data-ad-client={adClient}
          {...(adSlot ? { 'data-ad-slot': adSlot } : {})}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive}
        />
      </div>
    )
  }

  return (
    <div className={`my-8 max-w-5xl mx-auto px-4 text-center ${className}`}>
      <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-3 sm:p-4 overflow-hidden relative shadow-lg">
        <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span>Sponsored</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
        </div>
        <ins
          ref={insRef}
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          {...(adSlot ? { 'data-ad-slot': adSlot } : {})}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive}
        />
      </div>
    </div>
  )
}
