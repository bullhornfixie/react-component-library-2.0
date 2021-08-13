import Layout from '../components/common/layout'
import { colors, font, sizes, easing, spacing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import Link from 'next/link'
import styled from 'styled-components'
import Footer1 from '../components/footer1'


const Sliders = () => {
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
            mb={spacing.sm}
          >
            SLIDER STYLE 1
          </Text>
        </Flex>
       <Footer1 />
      </Flex>
    </Layout>
  )
}

export default Sliders