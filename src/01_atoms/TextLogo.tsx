import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { buildColorStyle, COLORS } from '../00_quarks/colors'
import { minWidth, SIZES } from '../00_quarks/sizing'

type TextLogoProps = {
  className?: string,
  fill?: COLORS,
  shade?: number,
  minWidth?: SIZES
}

const TextLogo: FunctionComponent<TextLogoProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 779.36 199.85">
    <title>the_last_word_logo_final</title>
    <path className="text" d="M65.7,158.22v-2.71h9.92V56.9H71.79a9.05,9.05,0,0,0-6.16,2.42,20.64,20.64,0,0,0-4.76,6.76,52.81,52.81,0,0,0-3.41,10.06,97.86,97.86,0,0,0-2.1,12.31H53.51V54.19h60.74V88.45h-1.76a96,96,0,0,0-2.12-12.31,54.21,54.21,0,0,0-3.43-10.06,20.64,20.64,0,0,0-4.76-6.76A9.05,9.05,0,0,0,96,56.9H92.14v98.61h9.93v2.71Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M120.21,158.22v-2.71h6.22V56.9h-6.22V54.19h21V155.51h4.2v2.71Zm29.55,0v-2.71H154v-40q0-5.84-.29-9.09a10.7,10.7,0,0,0-1.13-4.54,2.7,2.7,0,0,0-2.42-1.28,4.6,4.6,0,0,0-3.67,2.28,21.08,21.08,0,0,0-2.82,6.14,53.23,53.23,0,0,0-1.81,8.6,73.55,73.55,0,0,0-.63,9.68l-1.49.07a92.22,92.22,0,0,1,.72-11.07,57.25,57.25,0,0,1,2.49-11.23,23.26,23.26,0,0,1,4.87-8.67,10.3,10.3,0,0,1,7.9-3.36c3.36,0,6,.9,7.87,2.7a14.91,14.91,0,0,1,4,7.42,45.43,45.43,0,0,1,1.15,10.75v41.61h6.18v2.71Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M204.73,159.6a18.92,18.92,0,0,1-11.62-3.78q-5.09-3.78-8-11.2t-2.91-18.3q0-10.89,2.82-18.31t7.83-11.2A18.66,18.66,0,0,1,204.41,93a15.49,15.49,0,0,1,11.12,4.23,26.27,26.27,0,0,1,6.7,10.95,44.52,44.52,0,0,1,2.26,14.29H188.21v-2.77h21.12q0-4.44-.18-8.71a76.65,76.65,0,0,0-.61-7.73,19.17,19.17,0,0,0-1.45-5.51,3,3,0,0,0-2.68-2,3.51,3.51,0,0,0-3,2.19,20.28,20.28,0,0,0-1.87,6.13,79.5,79.5,0,0,0-1,9.12q-.27,5.17-.27,11.13,0,7.08.39,12.94a59.85,59.85,0,0,0,1.4,10.09,16.42,16.42,0,0,0,2.86,6.52,5.83,5.83,0,0,0,4.74,2.29,12,12,0,0,0,9.59-4.86,29,29,0,0,0,5.66-12.41h1.85a33,33,0,0,1-6.66,14.77Q213.21,159.61,204.73,159.6Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M257.16,158.22v-2.71h8.17V56.9h-8.17V54.19h32.76V56.9h-8.08v98.61h6.5a17.67,17.67,0,0,0,8.46-2,18.4,18.4,0,0,0,6.3-5.69,32.27,32.27,0,0,0,4.26-9A62.65,62.65,0,0,0,309.73,127h1.76v31.21Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M332.29,159.6a11.13,11.13,0,0,1-9.36-4.61q-3.49-4.61-3.5-12.52,0-9.28,5.26-14.59t14.87-5.31h10.92v2.36H343.8a6.17,6.17,0,0,0-5.05,2.32A14.45,14.45,0,0,0,336,133a27.64,27.64,0,0,0-.85,6.69,28.85,28.85,0,0,0,.49,5.69,10.42,10.42,0,0,0,1.49,3.85,3,3,0,0,0,2.53,1.42,4.18,4.18,0,0,0,3.13-1.84,14.91,14.91,0,0,0,2.51-5.72,41.54,41.54,0,0,0,1-10h1.17a46.82,46.82,0,0,1-1.89,14.08,21.18,21.18,0,0,1-5.3,9.19A11.22,11.22,0,0,1,332.29,159.6Zm25.14,0a12.14,12.14,0,0,1-5.82-1.35,9.21,9.21,0,0,1-3.93-4.09,15.33,15.33,0,0,1-1.4-7V116a64.16,64.16,0,0,0-.68-9.57,19.41,19.41,0,0,0-2.52-7.52,6,6,0,0,0-5.46-3,14.22,14.22,0,0,0-4.06.66,13.6,13.6,0,0,0-4.2,2.11,11.44,11.44,0,0,0-3.27,3.85,12.38,12.38,0,0,0-1.29,5.93h-2.12a11.86,11.86,0,0,1,2.42-7.7,7.17,7.17,0,0,1,5.7-3,7.88,7.88,0,0,1,5.91,2.67q2.54,2.67,2.53,7.73c0,3.52-.85,6.22-2.55,8.12a7.73,7.73,0,0,1-5.89,2.84,7.24,7.24,0,0,1-5.89-2.91,12.15,12.15,0,0,1-2.32-7.77,15,15,0,0,1,1.53-7.11,13.52,13.52,0,0,1,4.09-4.68,17.07,17.07,0,0,1,5.62-2.6,24.49,24.49,0,0,1,6.18-.8q7.17,0,11.8,2.81a17.14,17.14,0,0,1,6.88,7.91A29.44,29.44,0,0,1,361,116v32.94a10.42,10.42,0,0,0,.65,4,2.34,2.34,0,0,0,2.33,1.59,4.75,4.75,0,0,0,2.68-1.28,8.94,8.94,0,0,0,2.59-4.27l1.18,1.39a12.25,12.25,0,0,1-4.83,6.94A14.12,14.12,0,0,1,357.43,159.6Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M377,159.6V136.93h1.8a49.92,49.92,0,0,0,4.11,10.81,20.33,20.33,0,0,0,5.41,6.73,10.92,10.92,0,0,0,6.77,2.29,10.19,10.19,0,0,0,4.69-1,7.79,7.79,0,0,0,3.18-2.91,8.42,8.42,0,0,0,1.15-4.51,7.28,7.28,0,0,0-1.89-5.24,17.17,17.17,0,0,0-4.87-3.43c-2-1-4.09-2-6.3-3.22A32.62,32.62,0,0,1,384.7,132a19.5,19.5,0,0,1-4.87-7.08A29,29,0,0,1,378,113.62a28.08,28.08,0,0,1,1.85-10.57,17.33,17.33,0,0,1,5.12-7.25,11.68,11.68,0,0,1,7.56-2.63,10.48,10.48,0,0,1,5.57,1.52,16.71,16.71,0,0,1,4.45,4L407.69,93h1.54v19.42h-1.76a59.24,59.24,0,0,0-3.61-8.12,19.79,19.79,0,0,0-4.78-6,10,10,0,0,0-6.55-2.25,6.72,6.72,0,0,0-3.58,1,7.28,7.28,0,0,0-2.58,2.7,8.07,8.07,0,0,0-1,4,7,7,0,0,0,1.94,5.09,18.68,18.68,0,0,0,5,3.51q3.07,1.51,6.48,3.26a32.11,32.11,0,0,1,6.45,4.36,19.94,19.94,0,0,1,5,6.9,26.2,26.2,0,0,1,1.94,10.79q0,7.69-2.48,12.55a17.07,17.07,0,0,1-6.32,7.14,15,15,0,0,1-7.81,2.29,12.76,12.76,0,0,1-6.56-1.73,17.57,17.57,0,0,1-5.31-5l-5.23,6.72Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M418.25,97.12V94.41h30.82v2.71Zm18.1,62.07q-4.69,0-7.2-2.12a11.07,11.07,0,0,1-3.47-6,38.71,38.71,0,0,1-1-9.26V80.54a35.56,35.56,0,0,0,7.69-.93,17,17,0,0,0,7-3.23v67.06a25.53,25.53,0,0,0,.79,7.53c.52,1.55,1.42,2.32,2.68,2.32s2.57-.81,3.93-2.42a19.38,19.38,0,0,0,3.34-7.22l1.62,1.11a23.51,23.51,0,0,1-5.46,10.41A13.07,13.07,0,0,1,436.35,159.19Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M514.41,159.6,488.51,56.9h-7.4V54.19h81.32V56.9H537.25L556,132.35,574.66,56.9h-8.35V54.19h18.23V56.9H576.6L551.42,159.6h-5.24L520.23,56.9H507.55l18.78,75.45L534,101.7l1,4.16L521.63,159.6Zm30.51-64.42-1.67-1.6L553.08,55l2,.21Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M614.09,159.6A17.46,17.46,0,0,1,602,155a29.44,29.44,0,0,1-7.81-12.14,51.68,51.68,0,0,1,0-33.15A29.44,29.44,0,0,1,602,97.6a18.32,18.32,0,0,1,24.21,0,29.73,29.73,0,0,1,7.8,12.14,51.15,51.15,0,0,1,0,33.15,29.73,29.73,0,0,1-7.8,12.14A17.4,17.4,0,0,1,614.09,159.6Zm0-2.7a4,4,0,0,0,3.34-2.22,19.54,19.54,0,0,0,2.26-6.28,74.45,74.45,0,0,0,1.28-9.67q.43-5.62.43-12.41c0-4.54-.14-8.67-.43-12.42a74.45,74.45,0,0,0-1.28-9.67A19.54,19.54,0,0,0,617.43,98a4,4,0,0,0-3.34-2.22A3.92,3.92,0,0,0,610.78,98a20.28,20.28,0,0,0-2.26,6.28,69.45,69.45,0,0,0-1.29,9.67c-.27,3.75-.4,7.88-.4,12.42s.13,8.66.4,12.41a69.45,69.45,0,0,0,1.29,9.67,20.28,20.28,0,0,0,2.26,6.28A3.92,3.92,0,0,0,614.09,156.9Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M665,94.41v61.1h7.27v2.71h-28.2v-2.71h6.22V97.12h-6.22V94.41Zm-1,34.33a119.78,119.78,0,0,1,.74-13.8,57.91,57.91,0,0,1,2.37-11.37,20.43,20.43,0,0,1,4.24-7.7,8.37,8.37,0,0,1,6.32-2.77,7.79,7.79,0,0,1,5.73,2.35,15.1,15.1,0,0,1,3.54,6,24.41,24.41,0,0,1,1.2,7.63,18.32,18.32,0,0,1-2.39,9.46c-1.6,2.71-3.64,4.06-6.14,4.06s-4.55-1.22-6.16-3.68a15.42,15.42,0,0,1-2.41-8.67,17.57,17.57,0,0,1,2.3-9.32,7,7,0,0,1,6.18-3.78,6.41,6.41,0,0,1,4.4,1.73,12.06,12.06,0,0,1,3,4.44,15,15,0,0,1,1.11,5.76h-1.76a19.65,19.65,0,0,0-1.06-6.45,12.14,12.14,0,0,0-3.05-4.93,6.65,6.65,0,0,0-4.74-1.87,7,7,0,0,0-5.14,2.43,19.86,19.86,0,0,0-3.93,6.86,52,52,0,0,0-2.48,10.47,93.81,93.81,0,0,0-.86,13.11Z" transform="translate(-10.55 -6.69)"/>
    <path className="text" d="M713.91,159.53a13.55,13.55,0,0,1-9.23-3.95q-4.35-3.95-7.06-11.37a52,52,0,0,1-2.71-17.83,52.29,52.29,0,0,1,2.71-17.85q2.7-7.45,7.06-11.45a13.54,13.54,0,0,1,9.23-4q5.42,0,9.05,5.3t5.12,14.88V56.9h-6.23V54.19h20.94V155.51H749v2.71H728.08V139.49q-1.5,9.57-5.12,14.81T713.91,159.53Zm3.79-4.78q2.38,0,4.76-3.19a27.84,27.84,0,0,0,4-9.5,63.68,63.68,0,0,0,1.63-15.68,64.41,64.41,0,0,0-1.63-15.77,28.2,28.2,0,0,0-4-9.57q-2.37-3.23-4.76-3.23-2,0-3.41,3a30.82,30.82,0,0,0-2,9.22q-.64,6.28-.65,16.4t.65,16.37c.44,4.16,1.11,7.2,2,9.12S716.35,154.75,717.7,154.75Z" transform="translate(-10.55 -6.69)"/>
    <path className="border" d="M767.42,204.05H33.05a20,20,0,0,0-20-20V29.19a20,20,0,0,0,20-20H767.42a20,20,0,0,0,20,20V184.05A20,20,0,0,0,767.42,204.05Z" transform="translate(-10.55 -6.69)"/>
  </svg>
)

const StyledTextLogo: FunctionComponent<TextLogoProps> = styled(TextLogo)`
  ${props => minWidth(props.minWidth)}
  .text{
    ${props => `${buildColorStyle('fill')(props.fill, props.shade)}`}
    transition: fill 0.2s ease-in;
  }
  .border {
    fill: none;
    ${props => `${buildColorStyle('stroke')(props.fill, props.shade)}`}
    transition: stroke 0.2s ease-in;
    stroke-width: 5;
  }
`

StyledTextLogo.defaultProps = {
  fill: COLORS.GREY,
  shade: 0,
  minWidth: SIZES.S48
}

export default StyledTextLogo