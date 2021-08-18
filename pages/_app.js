import App from 'next/app'
import { createGlobalStyle } from 'styled-components'
import global from '../styles/global'

const GlobalStyle = createGlobalStyle`
  ${global}
`

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
