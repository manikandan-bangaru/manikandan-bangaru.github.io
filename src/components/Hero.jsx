import { apps, categories } from '../data/apps'

export default function Hero() {
  const newApps = apps.filter(app => app.feature)

  return (
    <section id="top" className="hero">
      <div className="dots" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="badge in" style={{ '--d': '0s' }}>
            <span className="pill-new">NEW</span>
            Arrows, Block Blast Odyssey &amp; Crossword are out
          </p>
          <h1 className="disp h1 in" style={{ '--d': '.06s' }}>
            Little games and apps you’ll open <span className="mark">every day.</span>
          </h1>
          <p className="lede in" style={{ '--d': '.14s' }}>
            Calm puzzle games, fitness and habit trackers, and learning apps for kids.
          </p>
          <div className="stats in" style={{ '--d': '.2s' }}>
            <span><strong>{apps.length}</strong> apps</span>
            <span><strong>10K+</strong> downloads</span>
            <span><strong>{categories.length - 1}</strong> categories</span>
          </div>
        </div>

        <div className="hero-wall in" style={{ '--d': '.16s' }}>
          <div className="wall">
            {newApps.map((app, i) => (
              <div className="tile" key={app.id} style={{ '--f': `${-1.2 * i}s` }}>
                <img src={app.image} alt={app.title} width="120" height="120" />
                <span className="pill-new">NEW</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
