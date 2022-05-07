import Typography from "typography"
const DEFAULT_FONTS = ["Arial", "Helvetica", "sans-serif"]

export enum Fonts {
  Kepler = "kepler-std-display",
  KeplerCondensed = "kepler-std-condensed-display",
  Usual = "usual",
}

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 2,
  headerFontFamily: [Fonts.KeplerCondensed, ...DEFAULT_FONTS],
  bodyFontFamily: [Fonts.Usual, ...DEFAULT_FONTS],
  scaleRatio: 6,
  bodyColor: "#0d261e",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      marginBottom: rhythm(10 / 16),
    },
    "h2, .head-2": {
      fontWeight: 300,
      marginBottom: rhythm(8 / 16),
      ...adjustFontSizeTo("64px"),
    },
    h3: {
      fontFamily: [Fonts.Kepler, ...DEFAULT_FONTS].join(", "),
      fontWeight: 500,
      marginBottom: rhythm(8 / 16),
      ...adjustFontSizeTo("48px"),
    },
    h4: {
      marginBottom: "0.5rem",
    },
    blockquote: {
      ...adjustFontSizeTo("19px"),
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
    },
    p: {
      ...adjustFontSizeTo("18px"),
      lineHeight: "1.3",
      marginBottom: rhythm(3 / 16),
    },
    li: {
      marginBottom: rhythm(3 / 16),
      listStyle: "none",
    },
    ul: {
      marginLeft: rhythm(0 / 16),
    },
    a: {
      color: "inherit",
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    ".font-primary": {
      fontFamily: [Fonts.KeplerCondensed, ...DEFAULT_FONTS].join(", "),
    },
    ".font-secondary": {
      fontFamily: [Fonts.Usual, ...DEFAULT_FONTS].join(", "),
    },
  }),
})

export const typographyCSS = typography.toString()

export default typography
