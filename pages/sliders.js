import Layout from '../components/common/layout'
import { colors, font, sizes, spacing } from '../styles/variables'
import { Flex, Text, Image } from 'rebass'
import styled from 'styled-components'
import SliderWrapper from '../components/slider'

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
        <SliderWrapper>
          <Image src='screenshot.png' />
          <Image src='screenshot.png' />
        </SliderWrapper>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Sliders