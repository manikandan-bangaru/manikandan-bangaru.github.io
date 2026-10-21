import { SITE_CONFIG } from '../constants/siteConfig'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.name}</span>
        <nav aria-label="Footer">
          <a href="/#apps">Apps</a>
          <a href="/policy.html">Privacy Policy</a>
          <a href={`mailto:${SITE_CONFIG.supportEmail}`}>Contact</a>
        </nav>
      </div>
    </footer>
  )
}
