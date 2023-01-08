// Routes.
export const ROUTE_HOME = "/"
export const ROUTE_PROJECTS = "/projects"
export const ROUTE_EXPERIENCE = "/experience"
export const ROUTE_READING_LIST = "/readinglist"
export const ROUTE_TRAVELS = "/travels"

// Route ID Names.
// See Dashboard.jsx and TopNav.jsx.
export const ROUTE_PROJECT_ID = "projectId"

// Colors.
const lightPrimary = "#f1f4f8"
const lightPrimaryHue = "#6a6a6a"
const lightSecondary = "#293238"
const lightSecondaryHue = ""
const lightColorGradient =
  "linear-gradient(90deg, rgba(67, 9, 121, 1) 33%, rgba(255, 0, 228, 1) 100%)"

const darkPrimary = "#293238"
const darkPrimaryHue = "#a7b5be"
const darkSecondary = "#f1f4f8"
const darkSecondaryHue = ""
const darkColorGradient =
  "linear-gradient(90deg, rgba(67, 9, 121, 1) 33%, rgba(255, 0, 228, 1) 100%)"

export const LIGHT_THEME = {
  primary: lightPrimary,
  primaryHue: lightPrimaryHue,
  secondary: lightSecondary,
  secondaryHue: lightSecondaryHue,
  colorGradient: lightColorGradient,
}

export const DARK_THEME = {
  primary: darkPrimary,
  primaryHue: darkPrimaryHue,
  secondary: darkSecondary,
  secondaryHue: darkSecondaryHue,
  colorGradient: darkColorGradient,
}

// Sizes.
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
}
