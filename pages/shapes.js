import Layout from '../components/common/layout'
import { colors, font, sizes, easing, spacing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import Shape1 from '../components/shape1'


const Shapes = () => {
  return (
    <Layout backgroundColor={colors.white}>
      <Flex
        flexDirection='column'
        alignItems='center'
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
            SHAPE 1 - LINE 
          </Text>
        </Flex>
       <Shape1 />
      </Flex>
    </Layout>
  )
}

export default Shapes