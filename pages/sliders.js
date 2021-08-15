import Layout from '../components/common/layout'
import { colors, font, sizes, easing, spacing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import Slider1 from '../components/slider1'


const Sliders = () => {
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
            SLIDER STYLE 1
          </Text>
        </Flex>
       <Slider1>
         <Text color={colors.yellow}>Hello</Text>
         <Text color={colors.yellow}>Hello</Text>
         <Text color={colors.yellow}>Hello</Text>
       </Slider1>
      </Flex>
    </Layout>
  )
}

export default Sliders