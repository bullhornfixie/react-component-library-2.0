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
    color: ${colors.purple};
    cursor: pointer;
  }
`

const Home = () => {
  return (
    <Layout backgroundColor={colors.black}>
      <Flex
        bg={colors.black}
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
          color={colors.purple}
        >
          CUSTOM REACT COMPONENTS 
            <Text color={colors.white}>
              FOR USE WITH EVERYDAY REACT PROJECTS
            </Text>
        </Text>
      </Flex>
      <Flex 
        mt='10vh'
        height='30vh' 
        width='100%'
      >
        <Flex
          flexDirection='column'
          width={1/4}
          textAlign='center'
        >
          <Link href='/footers'> 
            <MenuItem
              fontSize={sizes.base}
              color={colors.white}
              mb={sizes.base}>
              FOOTERS
            </MenuItem>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Home 