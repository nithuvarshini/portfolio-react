import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import projects from '../data/projects.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <main className="page not-found">
          <div className="eyebrow">Not found</div>
          <h1 className="page-title">No project here.</h1>
          <p className="page-intro" style={{ margin: '0 auto 28px' }}>
            That project doesn't exist. Head back to the project list.
          </p>
          <Link className="btn primary" to="/projects">
            ← All projects
          </Link>
        </main>
        <Footer label="Projects" />
      </>
    )
  }

  return (
    <>
      <main className="page">
        <Link className="muted" to="/projects">
          ← All projects
        </Link>
        <div className="section">
          <div className="eyebrow">{project.kicker}</div>
          <h1 className="page-title">{project.titleHtml}</h1>
          <p className="page-intro">{project.intro}</p>
        </div>

        <div className="project-detail section">
          <div className="eyebrow">The problem</div>
          <div>
            <h2>{project.problemTitle}</h2>
            <p>{project.problemBody}</p>
          </div>
        </div>

        <div className="project-detail">
          <div className="eyebrow">What I built</div>
          <div>
            <ul className="bullets">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-detail">
          <div className="eyebrow">Stack</div>
          <div>
            <div className="tags">
              {project.stack.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {project.note && <p className="muted">{project.note}</p>}
            <a className="btn" href={project.github} target="_blank" rel="noreferrer">
              View GitHub ↗
            </a>
          </div>
        </div>
      </main>
      <Footer label={project.title} />
    </>
  )
}
