import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function IconImage (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={27}
      height={27}
      viewBox='0 0 27 27'
    >
      <Path d='M27 24V3a3.009 3.009 0 00-3-3H3a3.009 3.009 0 00-3 3v21a3.009 3.009 0 003 3h21a3.009 3.009 0 003-3zM8.25 15.75l3.75 4.5 5.25-6.75 6.75 9H3z' />
    </Svg>
  )
}

export default IconImage
