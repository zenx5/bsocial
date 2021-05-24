import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function IconHomeOff (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={21.667}
      height={20}
      viewBox='0 0 21.667 20'
    >
      <Path
        data-name='Icon ionic-md-home'
        d='M8.333 20v-6.667h5V20h5.083V10h3.25L10.833 0 0 10h3.25v10z'
        opacity={0.3}
        fill='#000'
      />
    </Svg>
  )
}

export default IconHomeOff
