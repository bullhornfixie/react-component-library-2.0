import Layout from '../components/common/layout'
import { colors, font, sizes, spacing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import Footer1 from '../components/footer1'


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
            mb={spacing.sm}
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