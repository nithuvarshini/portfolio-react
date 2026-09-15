import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <main className="page hero">
        <div className="eyebrow">Nithuvarshini · Coimbatore Institute of Technology</div>
        <h1>
          I build <em>AI systems</em>
          <br />
          that actually do things.
        </h1>
        <p className="lead">
          I'm an Integrated M.Sc. Artificial Intelligence & Machine Learning student building
          practical applications around LLMs, RAG, data and full-stack software.
        </p>
        <div className="buttons">
          <Link className="btn primary" to="/projects">
            See my work ↗
          </Link>
          <a className="btn" href="https://github.com/nithuvarshini" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="btn" href="https://linkedin.com/in/nithu-varshini" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <div className="section two">
          <div>
            <h2>About me</h2>
            <p className="muted">
              I enjoy building systems where AI is part of a useful product—not just a model
              sitting in a notebook. My recent work covers LLM applications, retrieval pipelines,
              APIs, dashboards and full-stack platforms.
            </p>
            <p className="muted">
              I'm currently in my 5th semester at CIT, with a CGPA of 8.94. My main interests are
              AI engineering, LLM/RAG systems, AI agents and software that can turn an idea into
              something people can actually use.
            </p>
          </div>
          <div className="facts">
            <div>
              <small>Degree</small>
              <strong>Integrated M.Sc. AI & ML</strong>
            </div>
            <div>
              <small>Institute</small>
              <strong>Coimbatore Institute of Technology</strong>
            </div>
            <div>
              <small>CGPA</small>
              <strong>8.94 · Till 5th semester</strong>
            </div>
            <div>
              <small>Based in</small>
              <strong>India</strong>
            </div>
          </div>
        </div>
      </main>
      <Footer label="AI / ML · Software · Builder" />
    </>
  )
}
