import { extendTheme } from '@chakra-ui/react';
import {
  createBreakpoints,
  mode,
  GlobalStyleProps,
} from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        backgroundColor: mode('#fff', '#000')(props),
        color: mode('gray.700', 'whiteAlpha.900')(props),
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
      },
      '*, *::before, ::after': {
        wordWrap: 'normal',
      },
    }),
  },
  initialColorMode: 'light',
  useSystemColorMode: true,
  fonts,
  breakpoints,
  semanticTokens: {
    colors: {
      base: {
        default: '#fff',
        _dark: '#202225',
      },
    },
  },
});

export default theme;
