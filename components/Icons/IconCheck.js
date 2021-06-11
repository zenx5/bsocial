import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function IconCheck (props, { fill }) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 52.244 38.959'
      {...props}
    >
      <Path
        d='M17.744 38.194L.765 21.215a2.612 2.612 0 010-3.694l3.694-3.698a2.612 2.612 0 013.694 0l11.439 11.441 24.5-24.5a2.612 2.612 0 013.694 0l3.694 3.694a2.612 2.612 0 010 3.694L21.439 38.194a2.612 2.612 0 01-3.695 0z'
        fill={fill}
      />
    </Svg>
  )
}

export default IconCheck
