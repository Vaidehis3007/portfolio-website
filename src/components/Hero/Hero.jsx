import Navbar from "./Navbar"
import HeroCover from "./HeroCover"

function Hero({
  introStarted,
  heroIntroRef,
  photoLoadError,
  onPhotoError,
  typedIm,
  typedName,
  isImComplete,
  isNameComplete,
  isDarkMode,
  onToggleDarkMode,
}) {
  return (
    <header className={`hero ${introStarted ? "introStarted" : ""}`}>
      <Navbar />
      <HeroCover
        heroIntroRef={heroIntroRef}
        introStarted={introStarted}
        photoLoadError={photoLoadError}
        onPhotoError={onPhotoError}
        typedIm={typedIm}
        typedName={typedName}
        isImComplete={isImComplete}
        isNameComplete={isNameComplete}
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
    </header>
  )
}

export default Hero
