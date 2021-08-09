import Layout from '../components/common/layout'
import { colors, font, sizes, easing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import Link from 'next/link'
import styled from 'styled-components'

const MenuItem = styled.a`
  transition: ${easing.default};
  font-size: ${sizes.base}px;
  color: ${colors.white};
  font-weight: ${font.weight.bold};
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`

const Home = () => {
  return (
    <Layout backgroundColor={colors.white}>
      <Flex
        bg={colors.white}
        height='20vh'
        width='100%'
        mt='20vh'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          fontFamily={font.family.body}
          fontWeight={font.weight.bold}
          fontSize={sizes.md}
          color={colors.black}
        >
          FOOTERS
        </Text>
      </Flex>
    </Layout>
  )
}

export default Home 