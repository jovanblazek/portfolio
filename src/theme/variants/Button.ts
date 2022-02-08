import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    transition: 'all 0.3s',
    w: '100%',
    color: 'white',
    _disabled: {
      backgroundColor: 'cc.grayLight',
      opacity: 1,
    },
    _hover: {
      _disabled: {
        backgroundColor: 'cc.grayLight',
      },
    },
    _focus: {
      outline: 'none',
      boxShadow: 'none',
    },
  },
  variants: {
    primary: {
      backgroundColor: 'cc.primary',
      color: 'cc.grayDark',
    },
    primaryOutlined: {
      backgroundColor: 'transparent',
      borderColor: 'cc.primary',
      borderWidth: '2px',
    },
    primaryOutlinedActive: {
      backgroundColor: 'cc.primary',
      color: 'cc.grayDark',
      borderColor: 'cc.primary',
      borderWidth: '2px',
    },
    blue: {
      backgroundColor: 'blue',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}
