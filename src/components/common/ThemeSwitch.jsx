function ThemeSwitch({ isDarkMode, onToggle, className = "" }) {
  return (
    <button
      type="button"
      className={`themeSwitch ${className} ${isDarkMode ? "active" : ""}`}
      aria-label="Toggle dark mode"
      aria-pressed={isDarkMode}
      onClick={onToggle}
    >
      <span className="themeSwitchKnob" />
    </button>
  )
}

export default ThemeSwitch
