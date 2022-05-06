

type MediaQueries = "orientation" | "min-width" | "max-width"

type Matchers = "<" | ">" | "<=" | ">="

type MqArgs =
  | keyof typeof bp
  | `${Matchers}${keyof typeof bp}`
  | "portrait"
  | "landscape"

export const bp = {
  xs: 324,
  sm: 600,
  md: 960,
  lg: 1370,
  xl: 1920,
  xxl: 2100,
}

/** Creates a media query string */
const genQuery = (state: MediaQueries, bp: string) => `and (${state}: ${bp})`

/**
 * @param {MqArgs} bp - breakpoint name or a name that starts with "<" or ">"
 * @param args - Can be one of the following: `sm`, `md`, `lg`, `xl`, `xxl`, `>sm`, `<md`, `>lg`, `<xl`, `>xxl`, `portrait`, `landscape`
 * @returns A media query string
 */
export const mq = (...args: Array<MqArgs>) => {
  const query = [`@media only screen`]

  for (let name of args as string[]) {
    let state: MediaQueries = "max-width"

    if (name === "portrait" || name === "landscape") {
      query.push("orientation", name)
      continue
    }

    if (name.startsWith("<") || name.startsWith(">")) {
      state = name.startsWith("<") ? "max-width" : "min-width"
      name = name.slice(1)
    }

    const breakpoint = bp[name]
    if (!breakpoint) {
      console.error(`Unknown breakpoint: ${name}`)
      return null
    }

    query.push(genQuery(state, breakpoint + "px"))
  }

  return query.join(" ")
}
