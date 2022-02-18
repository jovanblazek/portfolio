import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    transition: 'all 0.3s',
    w: '100%',
    color: 'cc.primaryDark',
    _focus: {
      outline: 'none',
      boxShadow: 'none',
    },
  },
  variants: {
    accent: {
      backgroundColor: 'cc.accent',
      color: 'white',
    },
    accentOutlined: {
      backgroundColor: 'transparent',
      borderColor: 'cc.accent',
      borderWidth: '2px',
    },
    primary: {
      backgroundColor: 'cc.primaryDark',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'accent',
  },
}
