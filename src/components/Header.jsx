import { Logo, BackIcon } from './Icons'
import { SITE_CONFIG } from '../constants/siteConfig'

export default function Header({ isPrivacy }) {
  return (
    <header className="header">
      <div className="wrap header-in">
        <a href="/" className="brand" aria-label={`${SITE_CONFIG.name} home`}>
          <Logo />
          <span className="brand-name">Magiban <span>Technologies</span></span>
        </a>
        {isPrivacy ? (
          <nav className="nav" aria-label="Main">
            <a href="/#apps" className="hide-s">Apps</a>
            <a href="/policy.html" className="hide-s" aria-current="page">Privacy</a>
            <a href="/" className="btn btn-ghost btn-back"><BackIcon />Back to apps</a>
          </nav>
        ) : (
          <nav className="nav" aria-label="Main">
            <a href="#new" className="hide-s">New</a>
            <a href="#apps" className="hide-s">Apps</a>
            <a href="#studio" className="hide-s">Studio</a>
            <a href="/policy.html">Privacy</a>
          </nav>
        )}
      </div>
    </header>
  )
}
