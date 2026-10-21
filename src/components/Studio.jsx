import { MailIcon } from './Icons'
import { SITE_CONFIG } from '../constants/siteConfig'

export default function Studio() {
  return (
    <section id="studio" className="sec">
      <div className="wrap studio">
        <div className="reveal">
          <p className="eyebrow">THE STUDIO</p>
          <h2 className="disp h2">A small team building apps that respect your time.</h2>
        </div>
        <div className="studio-copy reveal">
          <p>
            {SITE_CONFIG.name} has been publishing mobile apps since {SITE_CONFIG.establishedYear} — puzzle games, an RPG-style fitness tracker, a weather-aware habit tracker, and an offline learning app for kids. Most of our games work offline and keep your progress on your device.
          </p>
          <div>
            <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="btn btn-ghost"><MailIcon />{SITE_CONFIG.supportEmail}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
