import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { sv } from '@ucheba/utils/helpers/styles/variables'
import { sm } from '@ucheba/utils/helpers/styles/mixins'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${sv.color.black};
    font-family: ${sv.fontFamily.proximaNova};
    font-feature-settings: 'liga','kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
    min-width: 320px;

    ${sm.font.medium}
  }
  
  h1 {
    ${sm.font.h1}
  }
`

export default GlobalStyles
