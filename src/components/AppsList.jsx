import { useState } from 'react'
import { apps, categories } from '../data/apps'
import { PlayIcon, GalaxyIcon, StarIcon } from './Icons'

export default function AppsList() {
  const [category, setCategory] = useState('All')
  const shown = category === 'All' ? apps : apps.filter(app => app.category === category)

  return (
    <section id="apps" className="apps-sec">
      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter apps by category">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              className="filter"
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
            >
              {cat}
              <span>{cat === 'All' ? apps.length : apps.filter(app => app.category === cat).length}</span>
            </button>
          ))}
        </div>

        <div className="apps">
          {shown.map(app => {
            const isNew = app.rating === 'New'
            return (
              <article className="app" key={`${category}-${app.id}`}>
                <img src={app.image} alt="" width="64" height="64" loading="lazy" />
                <div className="app-body">
                  <div className="app-title">
                    <h3>{app.title}</h3>
                    {isNew && <span className="pill-new">NEW</span>}
                  </div>
                  <div className="app-meta">
                    <span>{app.category}</span>
                    {!isNew && <><span aria-hidden="true">·</span><StarIcon /><span>{app.rating}</span></>}
                  </div>
                  <div className="app-links">
                    {app.links.play && (
                      <a className="chip" href={app.links.play} target="_blank" rel="noopener noreferrer" aria-label={`Get ${app.title} on Google Play`}>
                        <PlayIcon size={10} />Play
                      </a>
                    )}
                    {app.links.samsung && (
                      <a className="chip" href={app.links.samsung} target="_blank" rel="noopener noreferrer" aria-label={`Get ${app.title} on Galaxy Store`}>
                        <GalaxyIcon size={10} />Galaxy
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
