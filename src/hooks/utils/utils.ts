export const rcEncodeUri = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

export const getNavigator = () => {
  try {
    return navigator?.userAgent
  } catch {
    return undefined
  }
}
export const windowHasMobileWidth = () => {
  try {
    if (typeof window !== `undefined`) return window.innerWidth <= 960
    else {
      return false
    }
  } catch {
    return false
  }
}

export const isNumbers = (s: string): boolean =>
  new RegExp(/^\d*(\.\d+)?$/).test(s)
export const arrayInLength = (length = 10, onEach = (v, i) => i + 1) =>
  Array.from({ length }, onEach)

export const getElementsFromObject = (obj: any): Element[] =>
  Object.values(obj).map(({ current }: any) => current)

export const isMobile = /Mobi/.test(getNavigator()) || windowHasMobileWidth()
export const isNativeMobile = /Mobi/.test(getNavigator())

export const isCookieEnabled = (cookie: string) => {
  try {
    return document.cookie.includes(`${cookie}=true`) || undefined
  } catch {
    return undefined
  }
}

// Returns cuurrent path without domain
export const getPaths = () => {
  const url = typeof window !== "undefined" ? window.location.href : ""
  let split = url.endsWith("/")
    ? url.substring(0, url.length - 1).split("/")
    : url.split("/")
  split = split.splice(3, split.length - 1)
  return split
}

export const isCurrentPage = (find: string[]) => {
  const paths = getPaths()
  return (
    paths.length === 0 ||
    find
      .map((x) => x.replace("/", "").toLowerCase())
      .includes(paths[paths.length - 1])
  )
}

export const routeMatch = (path, routeRegex, exact = true) => {
  const splitted = path?.split("/").filter(Boolean)
  if (!splitted.length) {
    return
  } else if (exact) {
    return !!splitted[0].match(routeRegex) && !splitted?.[1]
  } else {
    return !!splitted[0].match(routeRegex)
  }
}

//////////////////////////////////////////////////// ANIMATIONS

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

// Map number x from range [a, b] to [c, d]
export const map = (
  x: number,
  a: number,
  b: number,
  c: number,
  d: number
): number => ((x - a) * (d - c)) / (b - a) + c

// Linear interpolation
export const lerp = (a: number, b: number, n: number): number =>
  (1 - n) * a + n * b

export const calcWinsize = (): { width: number; height: number } => {
  try {
    return { width: window.innerWidth, height: window.innerHeight }
  } catch {
    return undefined
  }
}

// Gets the mouse position
export const getMousePos = (e: MouseEvent): { x: number; y: number } => {
  let posX = 0
  let posY = 0

  posX = e.clientX + document.body.scrollLeft
  posY = e.clientY + document.body.scrollTop

  return { x: posX, y: posY }
}

export const mapRemarkToPage = <T = any>(edges: any): T => {
  if (edges.edges) {
    edges = edges.edges
  }
  if (!edges)
    throw new Error(
      `Error in mapRemarkToPage: edges is not available, { edges: ${JSON.stringify(
        edges
      )} }`
    )
  const isArray = Array.isArray(edges)
  if (!isArray) edges = [edges]
  const mapped = edges.map((n) => {
    if (isArray || n?.node) n = n?.node
    return {
      id: n?.id ?? null,
      slug: n?.fields?.slug ?? null,
      ...(n?.frontmatter || n),
    }
  })
  return !isArray ? mapped[0] : mapped
}


export const isUrl = (url: string) => {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
  const regex = new RegExp(expression)

  return regex.test(url)
}

export const fixUnit = (v, unit = "px") =>
  !v ? null : String(typeof v === "string" ? v : v + unit)
