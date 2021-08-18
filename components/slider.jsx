import { colors } from '../styles/variables'
import { Box } from 'rebass'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const SliderWrapper = ({children}) => (
  <Slider {...settings}>{children}</Slider>
)

export default SliderWrapper


