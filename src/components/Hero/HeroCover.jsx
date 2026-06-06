import ThemeSwitch from "../common/ThemeSwitch"

function HeroCover({
  heroIntroRef,
  introStarted,
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
    <section className="heroCover" ref={heroIntroRef}>
      <div className="heroCoverDecor" aria-hidden="true">
        <svg
          className="heroDecorWaves"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 210 C120 170, 260 250, 420 205 S700 165, 900 218 S1080 248, 1240 198"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M-20 248 C140 288, 300 218, 480 262 S760 302, 980 235 S1120 198, 1240 255"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M-20 285 C100 255, 240 318, 400 272 S640 232, 860 290 S1060 325, 1240 268"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <svg className="heroDecorSwirl" viewBox="0 0 120 160" aria-hidden="true">
          <path
            d="M95 18 C55 8, 18 42, 28 78 C36 108, 72 118, 58 142 C44 162, 12 150, 8 118"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 58 C8 88, 22 122, 48 132"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="heroDecorDot heroDecorDotCenter" />
      </div>

      <div
        className={`heroCoverAvatar heroStagger ${introStarted ? "visible" : ""}`}
        style={{ "--stagger-delay": "120ms" }}
      >
        {!photoLoadError ? (
          <img
            src="/vaidehi-photo.jpg"
            alt="Vaidehi Sahu"
            className="heroCoverPhoto"
            onError={onPhotoError}
          />
        ) : (
          <div className="heroCoverPhotoFallback">VS</div>
        )}
      </div>

      <div
        className={`heroCoverMain heroStagger ${introStarted ? "visible" : ""}`}
        style={{ "--stagger-delay": "60ms" }}
      >
        <div className="heroGreeting">
          <span className="heroHeyThere">Hey There</span>
          <a href="#about" className="heroArrowBtn" aria-label="Go to about section">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1 className="heroCoverTitle">
          <span className="heroCoverIm">
            <span className="heroTypedIm">
              {typedIm}
              {!isImComplete && (
                <span className="typedCursor" aria-hidden="true">
                  |
                </span>
              )}
            </span>
          </span>
          <span
            className={`heroCoverName ${isNameComplete ? "isNameComplete" : ""}`}
          >
            <span className="heroNameRow">
              <span className="heroTypedName">
                {typedName}
                {isImComplete && !isNameComplete && (
                  <span className="typedCursor" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
              <ThemeSwitch
                isDarkMode={isDarkMode}
                onToggle={onToggleDarkMode}
                className="heroThemeSwitch"
              />
            </span>
            <span className="heroDecorDot heroDecorDotName" aria-hidden="true" />
            <span className="heroDecorRing" aria-hidden="true" />
          </span>
        </h1>
      </div>
    </section>
  )
}

export default HeroCover
