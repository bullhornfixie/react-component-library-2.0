import { Box, Flex, Text, Image } from 'rebass'
import { FaInstagram } from 'react-icons/fa'
import { colors, font, sizes, easing } from '../styles/variables'

const Footer1 = () => (
  <>
    <Flex
      width="100%"
      mt={sizes.xl}
      minHeight="180px"
      fontFamily={"Helvetica"}
      fontSize={sizes.sm0}
      flexDirection="row"
      lineHeight="2"
    >  
      <Flex 
        flexDirection="column" 
        width="30%" 
        alignItems="left"
        bg={colors.black}
        pl={sizes.md}
        pt={sizes.base}
      >
        <Text color={colors.white} mb={sizes.sm}>LOGO</Text>
        {/* <Image src="vercel.svg" /> */}
    </Flex>
    <Flex 
      flexDirection="column" 
      width="40%" 
      alignItems="left"
      bg={colors.black}
      pl={sizes.md}
      pt={sizes.base}
    >
      <Text color={colors.white} mb={sizes.sm}>SAY HELLO</Text>
      <Text color={colors.grey} width='70%' fontSize={sizes.sm} mb={sizes.sm}> If you are interested in working with us or just want to say hello, simply drop us a line!</Text>
      <Text color={colors.white} fontFamily={font.family.heading}>
        <a className="a2" href="mailto:hello@yourcompany.co.uk">hello@yourcompany.co.uk</a>
      </Text>
    </Flex>
    <Flex 
      flexDirection="column" 
      width="30%" 
      alignItems="left"
      bg={colors.black}
      pl={sizes.md}
      pt={sizes.base}
    >
      <Text color={colors.white} mb={sizes.sm}>
        FOLLOW US
      </Text>
      <a href="https://www.instagram.com/">
        <FaInstagram color={colors.white} size={30} />
      </a>
    </Flex>
  </Flex>
 </>
)

export default Footer1