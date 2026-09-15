import Footer from '../components/Footer.jsx'

const groups = [
  { title: 'AI / ML', items: 'Python · Machine Learning · Scikit-learn · LLM applications · RAG' },
  { title: 'Backend', items: 'FastAPI · Node.js · Express.js · REST APIs · SQL' },
  { title: 'Frontend', items: 'React.js · Next.js · JavaScript · HTML · CSS' },
  { title: 'Data', items: 'Pandas · NumPy · Matplotlib · MySQL · MongoDB · SQLite' },
  { title: 'AI tooling', items: 'Gemini · Groq · ChromaDB · Hugging Face · Streamlit' },
  { title: 'Engineering', items: 'Git · GitHub · AWS · JWT · CRUD · API integration' },
]

export default function Skills() {
  return (
    <>
      <main className="page">
        <div className="eyebrow">Technical toolkit</div>
        <h1 className="page-title">
          What I
          <br />
          <em>work with.</em>
        </h1>
        <p className="page-intro">
          A practical toolkit built through projects, coursework and internships. The emphasis is
          on what I can use to build a working system.
        </p>
        <div className="grid skills-grid section">
          {groups.map((g) => (
            <div className="card skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.items}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer label="Skills" />
    </>
  )
}
