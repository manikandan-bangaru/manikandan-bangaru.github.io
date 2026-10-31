import { apps, categories } from '../data/apps'

export default function Hero() {
  // New releases first, then a few favourites, for a 3 x 2 icon wall
  const wallApps = [
    ...apps.filter(app => app.feature),
    ...['solo-level-up', 'sudoku-master', 'kiddoz'].map(id => apps.find(app => app.id === id)),
  ].filter(Boolean).slice(0, 6)

  return (
    <section id="top" className="hero">
      <div className="dots" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="badge in" style={{ '--d': '0s' }}>
            <span className="pill-new">NEW</span>
            Prism Panes is out: a brand-new color mix puzzle, plus Car Parking Jam
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
            {wallApps.map((app, i) => (
              <div className="tile" key={app.id} style={{ '--f': `${-1.1 * i}s` }}>
                <img src={app.image} alt={app.title} width="120" height="120" />
                {app.feature && <span className="pill-new">NEW</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
