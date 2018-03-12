import { colors } from 'hig-vanilla';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`
const HigTheme = {
  colors: {
    primaryColor60: colors['hig-blue-60'],
    primaryColor10: colors['hig-blue-10'],
    secondaryColor: colors['hig-green-50']
  }
}

export default HigTheme;