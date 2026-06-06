function ProjectsSection() {
  return (
    <section id="projects" className="section projectsSection">
      <div className="container projectsInner" data-reveal>
        <div className="sectionHead" data-reveal>
          <h2 className="sectionTitle">PROJECTS</h2>
          <div className="measureLine">
            <span />
          </div>
        </div>
        <p className="handle" data-reveal>
          Selected work and technical implementations
        </p>
        <div className="projectGroups">
          <div className="projectBlock" data-reveal>
            <strong>Airline Management System</strong>
            <p>
              Built automated CI/CD for a Spring Boot service using Jenkins,
              Docker, and Git, then deployed on AWS EC2 with SSH-based rollout.
            </p>
          </div>
          <div className="projectBlock" data-reveal>
            <strong>AI Career Coach</strong>
            <p>
              AI-powered mentoring platform with RAG-based resume parsing, GPT
              interview prep, OCR extraction workflows, and S3-backed storage.
            </p>
          </div>
          <div className="projectBlock" data-reveal>
            <strong>Dashboards & Monitoring</strong>
            <p>
              Built Recharts and Grafana dashboards using CloudWatch metrics to
              visualize skill progression, pipeline latency, and worker
              utilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
