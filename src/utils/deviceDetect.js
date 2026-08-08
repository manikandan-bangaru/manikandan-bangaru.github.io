export function detectUserDevice() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'desktop'
  }
  const userAgent = navigator.userAgent || navigator.vendor || window.opera || ''
  const platform = navigator.platform || ''
  
  // Detect Apple devices (MacBook, iMac, iPhone, iPad)
  if (
    /iPad|iPhone|iPod/.test(userAgent) || 
    /Macintosh|MacIntel|MacPPC|Mac68K/i.test(platform) || 
    /Mac OS X/i.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0)
  ) {
    return 'apple'
  }
  
  // Detect Samsung devices/browsers
  if (/Samsung/i.test(userAgent) || /SamsungBrowser/i.test(userAgent)) {
    return 'samsung'
  }
  
  // Detect Android devices
  if (/android/i.test(userAgent)) {
    return 'android'
  }
  
  return 'desktop'
}

export function getSmartStoreLink(appLinks) {
  if (!appLinks) return '#'
  const device = detectUserDevice()
  const iosLink = appLinks.appstore || appLinks.app
  
  // On Apple devices (MacBook, iPhone, iPad): Prioritize App Store if available
  if (device === 'apple' && iosLink && iosLink !== '#' && iosLink !== '') {
    return iosLink
  }
  
  // On Samsung devices: Prioritize Samsung Store if available
  if (device === 'samsung' && appLinks.samsung && appLinks.samsung !== '#' && appLinks.samsung !== '') {
    return appLinks.samsung
  }
  
  // Default prioritize Play Store
  if (appLinks.play && appLinks.play !== '#' && appLinks.play !== '') {
    return appLinks.play
  }
  
  // Fallback to Samsung Store
  if (appLinks.samsung && appLinks.samsung !== '#' && appLinks.samsung !== '') {
    return appLinks.samsung
  }
  
  // Fallback to App Store
  if (iosLink && iosLink !== '#' && iosLink !== '') {
    return iosLink
  }
  
  return '#'
}
