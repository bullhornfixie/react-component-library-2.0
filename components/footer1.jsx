import { Flex, Text, Image } from 'rebass'
import { FaInstagram } from 'react-icons/fa'
import { colors, font, sizes } from '../styles/variables'
import styled from 'styled-components'

const Column = styled(Flex)`
  flex-direction: column;
  width: ${({ width }) => width? width : '30%'};
  align-items: 'left';
  background-color: ${colors.black};
  padding-left: 16px;
  padding-top: 16px;
`

const Footer1 = () => (
  <>
    <Flex
      width={1/1}
      mt={sizes.xl}
      minHeight="180px"
      fontFamily={"Helvetica"}
      fontSize={sizes.sm0}
      flexDirection="row"
      lineHeight="2"
    >  
      <Column>
        <Text color={colors.white} mb={sizes.sm}>LOGO</Text>
        {/* <Image src="vercel.svg" /> */}
      </Column>
      <Column width='40%'> 
        <Text color={colors.white} mb={sizes.sm}>SAY HELLO</Text>
        <Text color={colors.grey} width='70%' fontSize={sizes.sm} mb={sizes.sm}> If you are interested in working with us or just want to say hello, simply drop us a line!</Text>
        <Text color={colors.white}>
          <a href="mailto:hello@yourcompany.co.uk">hello@yourcompany.co.uk</a>
        </Text>
      </Column>
      <Column> 
        <Text color={colors.white} mb={sizes.sm}>FOLLOW US</Text>
        <a href="https://www.instagram.com/">
          <FaInstagram color={colors.white} size={30} />
        </a>
      </Column>
    </Flex>
 </>
)

export default Footer1