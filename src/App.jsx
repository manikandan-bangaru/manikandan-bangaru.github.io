import Header from './components/Header'
import Hero from './components/Hero'
import AppsList from './components/AppsList'
import NewReleases from './components/NewReleases'
import Studio from './components/Studio'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Footer from './components/Footer'
import AdSenseBanner from './components/common/AdSenseBanner'

// Three pages: / (home), /policy.html and /termsOfService.html. Links between them are plain page loads.
const path = window.location.pathname
const legalPage = /terms/i.test(path) ? 'terms' : /policy|privacy/.test(path) ? 'privacy' : null

export default function App() {
  return (
    <>
      <Header legalPage={legalPage} />
      {legalPage === 'terms' ? (
        <TermsOfService />
      ) : legalPage === 'privacy' ? (
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
