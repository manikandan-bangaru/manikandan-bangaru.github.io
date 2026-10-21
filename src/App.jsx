import Header from './components/Header'
import Hero from './components/Hero'
import AppsList from './components/AppsList'
import NewReleases from './components/NewReleases'
import Studio from './components/Studio'
import PrivacyPolicy from './components/PrivacyPolicy'
import Footer from './components/Footer'
import AdSenseBanner from './components/common/AdSenseBanner'

// Two pages: / (home) and /policy.html. Links between them are plain page loads.
const isPrivacy = /policy|privacy/.test(window.location.pathname)

export default function App() {
  return (
    <>
      <Header isPrivacy={isPrivacy} />
      {isPrivacy ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
          <AppsList />
          <NewReleases />
          <Studio />
          <AdSenseBanner />
        </main>
      )}
      <Footer />
    </>
  )
}
