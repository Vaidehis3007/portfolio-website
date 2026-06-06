import { useEffect, useRef, useState } from "react"
import { FULL_NAME, HERO_IM } from "../constants/hero"

export function useHeroIntro() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [introStarted, setIntroStarted] = useState(false)
  const [startTyping, setStartTyping] = useState(false)
  const [typedIm, setTypedIm] = useState("")
  const [typedName, setTypedName] = useState("")
  const heroIntroRef = useRef(null)

  const isImComplete = typedIm.length >= HERO_IM.length
  const isNameComplete = isImComplete && typedName.length >= FULL_NAME.length

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setShowWelcome(false)
      setIntroStarted(true)
      setStartTyping(true)
      setTypedIm(HERO_IM)
      setTypedName(FULL_NAME)
      return
    }

    const welcomeTimer = window.setTimeout(() => {
      setShowWelcome(false)
    }, 1500)

    const introTimer = window.setTimeout(() => {
      setIntroStarted(true)
    }, 1850)

    return () => {
      window.clearTimeout(welcomeTimer)
      window.clearTimeout(introTimer)
    }
  }, [])

  useEffect(() => {
    if (!introStarted) return

    const timer = window.setTimeout(() => setStartTyping(true), 220)
    return () => window.clearTimeout(timer)
  }, [introStarted])

  useEffect(() => {
    if (!startTyping) return

    if (typedIm.length < HERO_IM.length) {
      const timer = window.setTimeout(() => {
        setTypedIm(HERO_IM.slice(0, typedIm.length + 1))
      }, 85)
      return () => window.clearTimeout(timer)
    }

    if (typedName.length < FULL_NAME.length) {
      const timer = window.setTimeout(() => {
        setTypedName(FULL_NAME.slice(0, typedName.length + 1))
      }, 85)
      return () => window.clearTimeout(timer)
    }
  }, [startTyping, typedIm, typedName])

  return {
    showWelcome,
    introStarted,
    typedIm,
    typedName,
    isImComplete,
    isNameComplete,
    heroIntroRef,
  }
}
