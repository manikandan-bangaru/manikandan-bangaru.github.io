import { useEffect, useRef, useState } from 'react'

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
      <div hidden>
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
    <div className={`ad ${className}`}>
      <div className="ad-box">
        <div className="ad-label">SPONSORED</div>
        <ins
          ref={insRef}
          className="adsbygoogle"
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
