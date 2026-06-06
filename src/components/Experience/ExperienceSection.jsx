function ExperienceSection() {
  return (
    <section id="experience" className="section sectionDark">
      <div className="container" data-reveal>
        <p className="muted" data-reveal>
          over the years
        </p>
        <h2 className="sectionTitle" data-reveal>
          SKILLS & EXPERIENCE
        </h2>
        <div className="chips" data-reveal>
          <span>Python</span>
          <span>Java</span>
          <span>MERN</span>
          <span>SQL</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Git</span>
          <span>MySQL</span>
          <span>SAP ABAP</span>
          <span>Power BI</span>
          <span>Tableau</span>
        </div>
        <div className="metaGrid" data-reveal>
          <div>
            <h3>Platforms & Tools:</h3>
            <p>AWS (EC2, S3, VPC, EKS), GitHub, Tableau</p>
          </div>
          <div>
            <h3>ERP:</h3>
            <p>
              SAP ABAP (hands-on training via NovelVista: Reports, CDS, RAP,
              Forms)
            </p>
          </div>
          <div>
            <h3>Soft Skills:</h3>
            <p>
              Leadership, Event Management, Writing, Public Speaking, Time
              Management
            </p>
          </div>
        </div>
        <div className="timeline">
          <article className="card" data-reveal>
            <h3>Persistent Systems - AI Intern (Mentorship)</h3>
            <p>Remote | Oct 2025 - Dec 2025</p>
            <p>
              Developed a Python-based distributed workflow that converts text
              prompts into short AI-generated videos using distributed
              services.
            </p>
            <p className="result">
              Built a fault-tolerant script-to-video pipeline with retries and
              detailed logging, reducing manual intervention by 60%.
            </p>
            <p className="result">
              Added monitoring and operational documentation to improve
              reliability, root-cause debugging, and cross-team handoff.
            </p>
          </article>

          <article className="card" data-reveal>
            <h3>InfoCepts Pvt. Ltd. - Automation Intern</h3>
            <p>Nagpur, Maharashtra | Jun 2025 - Aug 2025</p>
            <p>
              Analyzed asset lifecycle workflows to identify bottlenecks and
              implemented data-driven automation steps that reduced manual
              operations by 30%.
            </p>
            <p className="result">
              Worked with cross-functional teams to translate business
              requirements into automation logic and improve recurring process
              reliability.
            </p>
            <p className="result">
              Implemented data-driven automation steps that improved the
              reliability of recurring processes across internal systems.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
