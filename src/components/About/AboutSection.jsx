import ThemeSwitch from "../common/ThemeSwitch"

function AboutSection({ photoLoadError, onPhotoError, isDarkMode, onToggleDarkMode }) {
  return (
    <section id="about" className="section aboutSection">
      <div className="container">
        <div className="aboutShowcase" data-reveal>
          <div className="aboutShowcaseText" data-reveal>
            <div className="aboutTitleRow">
              <h2 className="aboutDisplayTitle">
                <span>About</span>
                <span>Me</span>
              </h2>
              <ThemeSwitch
                isDarkMode={isDarkMode}
                onToggle={onToggleDarkMode}
              />
            </div>
            <div className="aboutUnderline" />
            <p className="aboutDescription">
              I am a Computer Science (AI/ML) student and developer focused on
              AI systems, automation workflows, and cloud-backed products. My
              approach combines practical engineering with thoughtful product
              decisions, helping transform ideas into dependable, real-world
              solutions.
            </p>
          </div>
          <div className="aboutShowcaseMedia" data-reveal>
            {!photoLoadError ? (
              <img
                src="/vaidehi-photo.jpg"
                alt="Vaidehi Sahu portrait"
                className="aboutPhoto"
                onError={onPhotoError}
              />
            ) : (
              <div className="aboutPhotoFallback">VS</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
