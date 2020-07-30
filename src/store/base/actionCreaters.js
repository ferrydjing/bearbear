import * as constants from './constants'

export const setScreenWidth = (width) => ({
  type: constants.SET_SCREEN_WIDTH,
  value: width
})

export const setScreenHeight = (height) => ({
  type: constants.SET_SCREEN_HEIGHT,
  value: height
})

export const setIsMobile = (isMobile) => {
  return {
    type: constants.SET_IS_MOBILE,
    value: isMobile
  }
}
