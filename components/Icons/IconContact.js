import * as React from 'react'
import Svg, { G, Rect, Path } from 'react-native-svg'

function IconContact (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={46}
      height={46}
      viewBox='0 0 46 46'
    >
      <G data-name='Grupo 148' transform='translate(-27 -213)'>
        <Rect
          data-name='contact'
          width={46}
          height={46}
          rx={10}
          transform='translate(27 213)'
          fill='#e1b21c'
        />
        <Path
          data-name='Icon awesome-user-alt'
          d='M50.2 237.372a6.172 6.172 0 10-6.172-6.172 6.173 6.173 0 006.172 6.172zm5.486 1.372h-2.358a7.461 7.461 0 01-6.249 0h-2.365a5.486 5.486 0 00-5.486 5.484v.686a2.058 2.058 0 002.057 2.057h17.83a2.058 2.058 0 002.057-2.057v-.686a5.486 5.486 0 00-5.486-5.485z'
          fill='#fff'
        />
      </G>
    </Svg>
  )
}

export default IconContact
