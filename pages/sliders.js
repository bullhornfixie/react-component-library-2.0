import Layout from '../components/common/layout'
import { colors, font, sizes, spacing } from '../styles/variables'
import { Flex, Text, Image } from 'rebass'
import styled from 'styled-components'
import Slider1 from '../components/slider1'

const Heading = styled(Text)`
  font-family: ${font.family.body};
  font-weight: ${font.weight.bold};
  color: ${colors.purple};
`

const Sliders = () => {
  return (
    <Layout backgroundColor={colors.white}>
      <Flex
        flexDirection='column'
        alignItems='center'
        width='100%'
        px={sizes.md}
      >
        <Flex justifyContent='center' fontSize={sizes.md} my={spacing.sm}> 
          <Heading>SLIDER</Heading>
        </Flex>
        <Flex> 
        <Slider1>
        </Slider1>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Sliders