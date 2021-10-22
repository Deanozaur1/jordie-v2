import React from "react"
import gsap, { ScrollTrigger } from "gsap/all"

const useRevealedList = (el: string | Element | any) => {
  React.useEffect(() => {
    if (typeof el === "string") {
      el = document.querySelectorAll(el)
      if (!el) return
    }

    gsap.set(el, { y: 100, opacity: 0 })

    const scrollTriggers = ScrollTrigger.batch(el, {
      interval: 0.1,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
          ease: "power3",
        }),
      onLeave: (batch) =>
        gsap.set(batch, {
          autoAlpha: 0,
          y: -100,
          overwrite: true,
          ease: "power3",
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          ease: "power3",
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, {
          autoAlpha: 0,
          y: 100,
          overwrite: true,
          ease: "power3",
        }),
    })

    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set(el, { y: 0, opacity: 1 })
    )

    return () => {
      for (const st of scrollTriggers) {
        st.kill()
      }
    }
  }, [el])
}

export default useRevealedList
