import styled from 'styled-components'
import { color, COLORS } from '../../00_quarks/colors'
import {
  fontFamily,
  fontSize,
  fontWeight,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT
} from '../../00_quarks/typography'

import { Heading } from './typeography'

export const H3 = styled.h3<Heading>`
  ${props =>  color(props.colorName, props.shade)}
  ${props => fontFamily(props.font)}
  ${props => fontWeight(props.weight)}
  ${props => fontSize(props.size)}
`

H3.defaultProps = {
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  size: FONT_SIZE.XL2,
  weight: FONT_WEIGHT.BOLD
}

export default H3