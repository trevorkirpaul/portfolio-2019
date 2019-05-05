import color from './color'

const themeBase = {
  fontFamily: 'Roboto, sans-serif'
}

const themeDay = {
  ...themeBase,
  color: color.day
}

const themeNight = {
  ...themeBase,
  color: color.night
}
export { themeDay, themeNight }
