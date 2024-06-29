import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333333',
  cinzaClaro: '#a3a3a3',
  verde: '#10AC84'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
`
