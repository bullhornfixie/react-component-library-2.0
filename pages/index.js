import Layout from '../components/common/layout'
import { colors, font, sizes } from '../styles/variables'
import { Flex, Text } from 'rebass'

const Home = () => {
  return (
    <Layout backgroundColor={colors.black}>
      <Flex
        bg={colors.black}
        height='20vh'
        width='100%'
        mt='30vh'
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
    </Layout>
  )
}

export default Home 