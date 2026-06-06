function WelcomeOverlay({ show }) {
  return (
    <div
      className={`welcomeOverlay ${show ? "show" : "hide"}`}
      aria-hidden={!show}
    >
      <p>Welcome In</p>
    </div>
  )
}

export default WelcomeOverlay
