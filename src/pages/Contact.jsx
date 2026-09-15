import Footer from '../components/Footer.jsx'

export default function Contact() {
  return (
    <>
      <main className="page">
        <div className="eyebrow">Contact</div>
        <div className="contact-box">
          <h2>
            Have an opportunity
            <br />
            worth talking about?
          </h2>
          <p>
            I'm open to AI/ML, AI engineering and software development internships, projects and
            technical collaborations.
          </p>
          <div className="contact-links">
            <a href="mailto:knithuvarshini@gmail.com">knithuvarshini@gmail.com ↗</a>
            <a href="https://linkedin.com/in/nithu-varshini" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com/nithuvarshini" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </main>
      <Footer label="Contact" />
    </>
  )
}
