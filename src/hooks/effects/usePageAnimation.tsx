import React from "react"
import gsap, { Power3 } from "gsap/all"

const usePageAnimation = (
  selectorAll: string,
  options: { x?: boolean; negative?: boolean } = {}
) => {
  React.useLayoutEffect(() => {
    if (
      !selectorAll?.length ||
      (typeof window !== `undefined` &&
        !(window as any).___APP_INITIAL_RENDER_COMPLETE)
    ) {
      return
    }

    const $all = document.querySelectorAll(selectorAll)
    const tl = gsap.timeline({ ease: Power3.easeInOut }).from(
      $all,
      {
        overflow: "hidden",
        [options?.x ? "x" : "y"]: options?.negative ? -100 : 100,
        autoAlpha: 0,
        stagger: { from: "start", amount: 0.185 },
        clearProps: "all",
      },
      "<0.125"
    )

    return () => {
      tl.kill()
    }
  }, [])
}

export default usePageAnimation
