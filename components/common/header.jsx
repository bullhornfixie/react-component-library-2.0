import { Flex, Text } from 'rebass'
import { colors, font, sizes } from '../../styles/variables.js'
import Link from 'next/link'

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
      <Link href='/'> 
        React Component Library 2.0
      </Link>
    </Text>
  </Flex>
)

export default Header