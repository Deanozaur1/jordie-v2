import React from "react"
import gsap, { ScrollToPlugin } from "gsap/all"
gsap.registerPlugin(ScrollToPlugin)

type yType = number | string | Element

type ScrollToOptions = {
  ease?: any
  offsetY?: any
  container?: string | Element | HTMLElement
  onComplete?: () => void
}

export const scrollTo = (y: yType = 0, options?: ScrollToOptions) => {
  // Merge different options with defaults
  const { container, offsetY, onComplete, ease, ...otherOptions } = {
    container: typeof window !== "undefined" ? window : null,
    onComplete: () => null,
    ...options,
  }

  gsap.to(container, {
    scrollTo: { y, offsetY: -offsetY },
    ease,
    onComplete,
    ...otherOptions,
  })
}
