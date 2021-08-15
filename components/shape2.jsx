import { colors } from '../styles/variables'
import { Box } from 'rebass'

const Shape2 = () => (
  <Box
    width={['100px', '300px']}
    height={['100px', '300px']}
    sx={{borderRadius: '1000px', objectFit: 'contain', backgroundSize: 'contain' }}
    bg={colors.purple}
  />
)

export default Shape2

// can use <Image src='' /> instead of <Box /> if inserting logo. 
