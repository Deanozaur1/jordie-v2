import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 2,
  headerFontFamily: ["Montserrat"],
  bodyFontFamily: ["Cormorant"],
  scaleRatio: 6,
  bodyColor: "#0d261e",
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ["Cormorant"].join(","),
      marginBottom: rhythm(10 / 16),
    },
    h3: {
      marginBottom: rhythm(8 / 16),
      ...adjustFontSizeTo("23px"),
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
      // marginBottom: rhythm(3 / 16),
    },
    li: {
      marginBottom: rhythm(3 / 16),
      listStyle: "none",
    },
    ul: {
      marginLeft: rhythm(0 / 16),
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
  }),
})

export const typographyCSS = typography.toString()

export default typography
