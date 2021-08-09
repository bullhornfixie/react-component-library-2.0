import { Flex, Text } from 'rebass'
import { colors, font, sizes } from '../../styles/variables.js'

const Header = () => (
  <Flex 
    alignItems='center' 
    height='10vh' 
    px={sizes.md} 
    justifyContent='left' 
    bg={colors.white}
  >
    <Text
      fontFamily={font.family.body}
      color={colors.black}
      fontSize={sizes.sm}
      fontWeight={font.weight.bold}
    >
      React Component Library 2.0
    </Text>
  </Flex>
)

export default Header