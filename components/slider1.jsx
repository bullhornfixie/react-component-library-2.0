import Slider from 'react-slick'
import { Box } from 'rebass'
import styled, { keyframes } from 'styled-components'
import { colors, font, sizes, easing, spacing } from '../styles/variables'

const fadeIn = keyframes`
  from { opacity: 0;transform:translateX(100vw)}
  to { opacity: 1;transform:translateX(0)}
`

const SlideContainer = styled(Box)`
  overflow: visible;
  position: relative;
  opacity: 0;
  transform: translateX(100vw);
  animation: ${fadeIn} 800ms ${easing.bezier} 1000ms forwards;
  width: 75%;
  min-height: 400px;
  background: ${colors.black}};
  box-shadow: none;
  margin: 0 auto;
`

const settings = {
    arrows: true,
    draggable: true,
    dots: true,
    infinite: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
  }
  
  const Slider1 = ({ children }) => (
    <SlideContainer> 
      <Slider {...settings}>{children}</Slider>
    </SlideContainer>
  )
  
  export default Slider1