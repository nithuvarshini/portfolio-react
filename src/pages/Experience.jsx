import Footer from '../components/Footer.jsx'

const items = [
  {
    date: 'JUN 2025',
    title: 'Web Development Intern — CIT × Boredom Technologies LLP',
    body:
      'Built a recipe recommendation MVP, integrated APIs and implemented top-3 ranking using ingredient match, recipe type and preparation duration.',
  },
  {
    date: 'MAY — JUN 2026',
    title: 'Virtual Data Science Apprentice — YuvaIntern',
    body:
      'Worked on data cleaning, exploratory analysis and preprocessing using a student-performance dataset containing 6,607 records and 20 features.',
  },
  {
    date: '2024 — PRESENT',
    title: 'Integrated M.Sc. Artificial Intelligence & Machine Learning',
    body: 'Coimbatore Institute of Technology · CGPA 8.94 through 5th semester.',
  },
]

export default function Experience() {
  return (
    <>
      <main className="page">
        <div className="eyebrow">Experience & education</div>
        <h1 className="page-title">
          Where I've
          <br />
          <em>learned by doing.</em>
        </h1>
        <div className="timeline section">
          {items.map((it) => (
            <div className="timeline-item" key={it.title}>
              <div className="date">{it.date}</div>
              <div>
                <h3>{it.title}</h3>
                <p className="muted">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer label="Experience" />
    </>
  )
}
