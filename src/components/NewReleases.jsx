import { apps } from '../data/apps'
import { PlayIcon, GalaxyIcon } from './Icons'

export default function NewReleases() {
  const newApps = apps.filter(app => app.feature)

  return (
    <section id="new" className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <p className="eyebrow">JUST RELEASED</p>
            <h2 className="disp h2">Three new puzzles this month</h2>
          </div>
          <p>Relaxing, offline, and free to play. Start with whichever one fits your mood.</p>
        </div>

        <div className="three">
          {newApps.map(app => (
            <article className="card reveal" key={app.id}>
              <div className="card-shot">
                <img src={app.feature} alt={`${app.title} feature graphic`} width="720" height="352" loading="lazy" />
              </div>
              <div className="card-body">
                <h3 className="disp">{app.title}</h3>
                <p>{app.shortDescription}</p>
                <div className="app-links">
                  {app.links.play && (
                    <a className="chip" href={app.links.play} target="_blank" rel="noopener noreferrer"><PlayIcon />Google Play</a>
                  )}
                  {app.links.samsung && (
                    <a className="chip" href={app.links.samsung} target="_blank" rel="noopener noreferrer"><GalaxyIcon />Galaxy Store</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
