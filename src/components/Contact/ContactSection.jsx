function ContactSection() {
  return (
    <section id="contact" className="section collaborateSection">
      <div className="collaboratePanel">
        <div className="container collaborateInner" data-reveal>
          <div className="collaborateLeft" data-reveal>
            <h2 className="collaborateTitle">
              <span>Let's</span>
              <span>Collaborate</span>
            </h2>
          </div>
          <div className="collaborateRight" data-reveal>
            <p>
              Let&apos;s transform your ideas into real-world digital products.
              Whether you&apos;re a startup, business, or individual with a
              passion project, I can help you build reliable and impactful
              solutions.
            </p>
            <a href="mailto:sahuvaidehi30@gmail.com" className="btn collaborateBtn">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <footer className="collaborateFooter" data-reveal>
        <div className="container footerTop" data-reveal>
          <p className="footerName">Vaidehi Sahu</p>
          <nav className="footerNav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footerSocial">
            <a
              href="https://linkedin.com/vaidehi-sahu"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="socialIcon" aria-hidden="true">
                <path
                  d="M6.94 8.5H3.56v11h3.38v-11Zm-1.69-1.51c1.08 0 1.75-.72 1.75-1.62C7 4.45 6.34 3.75 5.28 3.75s-1.75.7-1.75 1.62c0 .9.67 1.62 1.7 1.62h.02Zm3.56 12.51h3.38v-6.14c0-.32.02-.64.12-.87.26-.64.86-1.3 1.87-1.3 1.32 0 1.85.99 1.85 2.44v5.87h3.38v-6.26c0-3.35-1.79-4.9-4.18-4.9-1.92 0-2.76 1.06-3.24 1.8h.02V8.5H8.81c.04 1.06 0 11 0 11Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://github.com/Vaidehis3007"
              target="_blank"
              rel="noreferrer"
              className="socialLink"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="socialIcon" aria-hidden="true">
                <path
                  d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.22 1.83 1.22 1.06 1.82 2.8 1.29 3.48.99.1-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.91 0-1.31.47-2.38 1.22-3.22-.12-.3-.53-1.53.12-3.19 0 0 1-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.89.12 3.19.76.84 1.22 1.91 1.22 3.22 0 4.6-2.8 5.6-5.48 5.9.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.82.58A12 12 0 0 0 12 .5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="mailto:sahuvaidehi30@gmail.com">sahuvaidehi30@gmail.com</a>
          </div>
        </div>
        <div className="container footerBottom">
          <small>
            © {new Date().getFullYear()} Vaidehi Sahu. All rights reserved.
          </small>
          <small>AI/ML Engineer & Developer</small>
        </div>
      </footer>
    </section>
  )
}

export default ContactSection
