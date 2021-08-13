import Layout from '../components/common/layout'
import { colors, font, sizes, easing, spacing } from '../styles/variables'
import { Flex, Text } from 'rebass'
import styled from 'styled-components'
import Button1 from '../components/button1'

const BtnText = styled(Text)`
  transition: ${easing.default};
  font-size: ${sizes.base}px;
  color: ${colors.black};
  font-weight: ${font.weight.bold};
  &:hover {
    color: ${colors.white}
  }
`

const Buttons = () => {
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
            BUTTON STYLE 1
          </Text>
        </Flex>
      </Flex>
     <Button1>
       <BtnText>CLICK ME</BtnText>
     </Button1>
    </Layout>
  )
}

export default Buttons