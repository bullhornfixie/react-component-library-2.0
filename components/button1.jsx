import { Flex, Text, Image } from 'rebass'
import { colors, font, sizes, easing, spacing } from '../styles/variables'
import styled from 'styled-components'

const Wrapper = styled(Flex)`
  transition: ${easing.default};
  border: 1px solid;
  justify-content: center;
  width: 30vh;
  color: ${colors.purple};
  border-radius: ${sizes.md}px;
  padding: ${sizes.sm}px ${sizes.base}px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.black};
  }
`

const Button1 = ({ children }) => (
  <Wrapper >
    {children}
  </Wrapper>
)

export default Button1