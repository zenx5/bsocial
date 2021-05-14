import * as React from 'react'
import Svg, { Defs, ClipPath, Path, G } from 'react-native-svg'

function IconPassword (props) {
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
            data-name='Rect\xE1ngulo 11'
            transform='translate(61 267)'
            fill='#fff'
            stroke='#707070'
            d='M0 0h30v30H0z'
          />
        </ClipPath>
      </Defs>
      <G transform='translate(-61 -267)' clipPath='url(#prefix__a)'>
        <Path
          data-name='Icon awesome-lock'
          d='M81.588 280.938h-.8v-2.388a5.041 5.041 0 10-10.083 0v2.388h-.8a1.592 1.592 0 00-1.584 1.592v6.368a1.592 1.592 0 001.592 1.592h11.675a1.592 1.592 0 001.592-1.592v-6.368a1.592 1.592 0 00-1.592-1.592zm-3.449 0h-4.777v-2.388a2.388 2.388 0 114.776 0z'
          fill='#e1b21c'
        />
      </G>
    </Svg>
  )
}

export default IconPassword
