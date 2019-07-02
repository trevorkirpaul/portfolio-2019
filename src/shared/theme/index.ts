import color from './color'
import typography from './typography'

const themeBase = {
  fontFamily: 'Roboto, sans-serif',
  typography
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
