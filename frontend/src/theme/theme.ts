import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, Styles } from '@chakra-ui/theme-tools'
import {
  BASE_FONT_SIZE_PX,
  Breakpoints,
  CustomColors,
  FONT_STACK,
  TEXT_COLOR,
} from './constants'
import * as Variants from './variants'

const breakpoints = createBreakpoints(Breakpoints)

const globalStyles: Styles = {
  global: {
    html: {
      fontSize: BASE_FONT_SIZE_PX,
      scrollBehavior: 'smooth',
    },
    body: {
      minHeight: '100vh',
      minWidth: '320px',
      color: TEXT_COLOR,
      backgroundColor: CustomColors.background,
    },
  },
}

const customTheme = {
  colors: {
    cc: {
      ...CustomColors,
    },
  },
  breakpoints,
  styles: globalStyles,
  fonts: {
    body: FONT_STACK,
    heading: FONT_STACK,
  },
  components: {
    ...Variants,
  },
  shadows: {
    outline: 'none',
  },
}

export const theme = extendTheme(customTheme)
