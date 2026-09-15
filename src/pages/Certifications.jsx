import Footer from '../components/Footer.jsx'

const certs = [
  { badge: 'CERTIFICATION · 2025', title: 'Certified Python Full Stack Developer', org: 'Revature' },
  { badge: 'CERTIFICATION · 2026', title: 'Full-Stack Generative AI Systems Engineer', org: 'Revature' },
  {
    badge: 'ACHIEVEMENT · 2026',
    title: 'III Prize — 24-Hour Software Hackathon',
    org: 'AVANZARE V19.0 · IEEE Student Branch, Kongu Engineering College',
  },
]

export default function Certifications() {
  return (
    <>
      <main className="page">
        <div className="eyebrow">Credentials</div>
        <h1 className="page-title">
          Certifications,
          <br />
          <em>badges & recognition.</em>
        </h1>
        <p className="page-intro">
          Selected credentials that support the work shown across this portfolio.
        </p>
        <div className="grid cert-grid section">
          {certs.map((c) => (
            <div className="card cert" key={c.title}>
              <span className="badge">{c.badge}</span>
              <h3>{c.title}</h3>
              <p className="muted">{c.org}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer label="Credentials" />
    </>
  )
}
