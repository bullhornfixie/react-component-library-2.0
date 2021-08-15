import { Box } from 'rebass'
import { colors } from '../styles/variables'

const Shape1 = ({color}) => (
  <Box width='1000px'
    sx={{
        border: `1px solid ${color || colors.black}`
    }}
  />
)

export default Shape1