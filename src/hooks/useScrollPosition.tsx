import React from "react"

export default () => {
  const [scrollTop, setScrollTop] = React.useState(0)

  if (typeof window === "undefined") return 0

  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return scrollTop
}
