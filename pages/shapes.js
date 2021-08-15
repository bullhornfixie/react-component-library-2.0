import Layout from '../components/common/layout'
import { colors, font, sizes, spacing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import Shape1 from '../components/shape1'
import Shape2 from '../components/shape2'

const Heading = styled(Text)`
  font-family: ${font.family.body};
  font-weight: ${font.weight.bold};
  color: ${colors.purple};
`

const Shapes = () => {
  return (
    <Layout backgroundColor={colors.white}>
      <Flex
        flexDirection='column'
        alignItems='center'
        width='100%'
        px={sizes.md}
      >
        <Flex justifyContent='center' fontSize={sizes.md} my={spacing.sm}> 
          <Heading>SHAPE 1 - LINE</Heading>
        </Flex>
        <Shape1 />
        <Flex justifyContent='center' fontSize={sizes.md} my={spacing.md}> 
          <Heading>SHAPE 2 - CIRCLE</Heading>
        </Flex>
        <Shape2 />
      </Flex>
    </Layout>
  )
}

export default Shapes