import { Box, Flex, Text, Image } from 'rebass'
import { colors } from '../../styles/variables'
// import Footer from './footer'
import Header from './header'

const Layout = ({children, backgroundColor}) => (
  <>
  <Header />
    <Flex 
      justifyContent='center' 
      height='90vh' 
      bg={backgroundColor}
    >
      {children}
    </Flex>
 </>
)

export default Layout 