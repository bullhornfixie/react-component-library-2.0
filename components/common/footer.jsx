import { Flex, Text } from 'rebass'
import { colors, font, sizes } from '../../styles/variables.js'

const Footer = () => (
  <Flex height='10vh' bg={colors.white}>
    <Text
      fontFamily={font.family.body}
      color={colors.black}
      fontSize={sizes.xs}
    >
      Created by Bullhornfixie
    </Text>
  </Flex>
)

export default Footer