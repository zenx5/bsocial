import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

function IconEmail (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      viewBox='0 0 30 30'
    >
      <Defs>
        <ClipPath id='prefix__a'>
          <Path
            data-name='Rect\xE1ngulo 10'
            transform='translate(61 267)'
            fill='#fff'
            stroke='#707070'
            d='M0 0h30v30H0z'
          />
        </ClipPath>
      </Defs>
      <G transform='translate(-61 -267)' clipPath='url(#prefix__a)'>
        <Path
          data-name='Icon awesome-user-alt'
          d='M76 283.125a5.063 5.063 0 10-5.062-5.062A5.064 5.064 0 0076 283.125zm4.5 1.125h-1.937a6.12 6.12 0 01-5.126 0H71.5a4.5 4.5 0 00-4.5 4.5v.562A1.688 1.688 0 0068.688 291h14.625A1.688 1.688 0 0085 289.313v-.563a4.5 4.5 0 00-4.5-4.5z'
          fill='#e1b21c'
        />
      </G>
    </Svg>
  )
}

export default IconEmail
