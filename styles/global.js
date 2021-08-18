import { colors, font, sizes, spacing } from './variables'

const global = `

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .slick-slider {
    height: 40vh;
    width: 60vh;
  }

  .slick-dots {
    position: absolute;
    bottom: 0;
    margin: ${spacing.md}px 0;
    padding: 0;
    width: 50%;
    text-align: center;
    li {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 ${spacing.xs}px;
      button {
        display: block;
        width: 12px;
        height: 12px;
        background: ${colors.black};
        border: none;
        border-radius: 100%;
        text-indent: -99999px;
        appearance: none;
        -webkit-appearance: none
        font-size: 0; 
      }
      &.slick-active {
        button {
          background: ${colors.purple};
        }
      }    
  
`

export default global 


