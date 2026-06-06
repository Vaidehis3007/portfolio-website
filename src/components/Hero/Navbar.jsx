import { useState } from "react"
import {
  MOBILE_RESUME_URL,
  NAV_ITEMS,
  RESUME_URL,
} from "../../constants/navigation"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav container">
      <p className="brand">Vaidehi Sahu</p>
      <div className="navCenter">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="navActions">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="btn navCta"
        >
          Resume
        </a>
        <a href="#contact" className="btn navGhost" onClick={closeMenu}>
          Collaborate
        </a>
      </div>
      <button
        className="menuToggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <div className={`navMobile ${menuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a
          href={MOBILE_RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="btn navCta"
          onClick={closeMenu}
        >
          Resume
        </a>
        <a href="#contact" className="btn navGhost" onClick={closeMenu}>
          Collaborate
        </a>
      </div>
    </nav>
  )
}

export default Navbar
