import { useState } from "react"
import AboutSection from "./components/About/AboutSection"
import CertificationsSection from "./components/Certifications/CertificationsSection"
import ContactSection from "./components/Contact/ContactSection"
import ExperienceSection from "./components/Experience/ExperienceSection"
import Hero from "./components/Hero/Hero"
import ProjectsSection from "./components/Projects/ProjectsSection"
import WelcomeOverlay from "./components/WelcomeOverlay"
import { useDarkMode } from "./hooks/useDarkMode"
import { useHeroIntro } from "./hooks/useHeroIntro"
import { useScrollReveal } from "./hooks/useScrollReveal"

function App() {
  const [photoLoadError, setPhotoLoadError] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const {
    showWelcome,
    introStarted,
    typedIm,
    typedName,
    isImComplete,
    isNameComplete,
    heroIntroRef,
  } = useHeroIntro()

  useScrollReveal()

  return (
    <>
      <WelcomeOverlay show={showWelcome} />

      <Hero
        introStarted={introStarted}
        heroIntroRef={heroIntroRef}
        photoLoadError={photoLoadError}
        onPhotoError={() => setPhotoLoadError(true)}
        typedIm={typedIm}
        typedName={typedName}
        isImComplete={isImComplete}
        isNameComplete={isNameComplete}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main>
        <AboutSection
          photoLoadError={photoLoadError}
          onPhotoError={() => setPhotoLoadError(true)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
