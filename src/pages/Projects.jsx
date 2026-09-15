import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import projects from '../data/projects.jsx'

export default function Projects() {
  return (
    <>
      <main className="page">
        <div className="eyebrow">Selected work</div>
        <h1 className="page-title">
          Things I've
          <br />
          <em>built.</em>
        </h1>
        <p className="page-intro">
          Click into a project to see the problem, approach, architecture, implementation and
          what I learned from building it.
        </p>
        <div className="grid project-grid section">
          {projects.map((p) => (
            <Link className="card" key={p.slug} to={`/projects/${p.slug}`}>
              <span className="num">{p.num}</span>
              <h3>{p.title}</h3>
              <p className="muted">{p.summary}</p>
              <div className="tags">
                {p.listTags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer label="Projects" />
    </>
  )
}
