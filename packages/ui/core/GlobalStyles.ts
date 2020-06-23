import {createGlobalStyle} from 'styled-components'
import {sv} from '@ucheba/utils/helpers/styles'
import {normalize} from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${sv.colors.base};
    font-family: Arial, sans-serif;
    margin: 0;
  }
`

export default GlobalStyles
