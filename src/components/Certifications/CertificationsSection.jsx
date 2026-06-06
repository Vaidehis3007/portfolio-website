function CertificationsSection() {
  return (
    <section id="certifications" className="section sectionDark">
      <div className="container" data-reveal>
        <p className="muted" data-reveal>
          credentials and community leadership
        </p>
        <h2 className="sectionTitle" data-reveal>
          CERTIFICATION & PUBLICATION
        </h2>
        <div className="timeline">
          <article className="card" data-reveal>
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Validity: Sept 2025 - Sept 2028</p>
          </article>
          <article className="card" data-reveal>
            <h3>Smart Home Security Manager - Design Patent</h3>
            <p>Issued: Feb 2025</p>
          </article>
        </div>

        <h2 className="sectionTitle" style={{ marginTop: "2rem" }} data-reveal>
          VOLUNTEER EXPERIENCE
        </h2>
        <div className="timeline">
          <article className="card" data-reveal>
            <h3>Student Coordinator - Career Development & Placement Cell</h3>
            <p>RBU | Jan 2025 - Present</p>
          </article>
          <article className="card" data-reveal>
            <h3>Director of Public Relations - Rotaract Club</h3>
            <p>RBU | Oct 2024 - Oct 2025</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
