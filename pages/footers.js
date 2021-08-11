import Layout from '../components/common/layout'
import { colors, font, sizes, easing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import Link from 'next/link'
import styled from 'styled-components'
import Footer1 from '../components/footer1'

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

const Footers = () => {
  return (
    <Layout backgroundColor={colors.white}>
      <Flex
        flexDirection='column'

        width='100%'
        px={sizes.md}
      >
        <Flex justifyContent='center'> 
          <Text
            fontFamily={font.family.body}
            fontWeight={font.weight.bold}
            fontSize={sizes.md}
            color={colors.purple}
          >
            FOOTER STYLE 1
          </Text>
        </Flex>
       <Footer1 />
      </Flex>
     
    </Layout>
  )
}

export default Footers