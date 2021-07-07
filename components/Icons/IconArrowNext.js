import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent (props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 489.6 489.6'
      fill='#000'
      {...props}
    >
      <Path d='M0 244.8c0 9.5 7.7 17.2 17.2 17.2h414.2L322.9 370.4c-3.3 3.3-5 7.7-5 12.1s1.7 8.8 5 12.1c6.7 6.7 17.6 6.7 24.3 0l137.6-137.7c6.4-6.4 6.4-17.8 0-24.3L347.1 95c-6.7-6.7-17.6-6.7-24.3 0-6.7 6.7-6.7 17.6 0 24.3l108.4 108.4H17.1C7.6 227.6 0 235.3 0 244.8z' />
    </Svg>
  )
}

export default SvgComponent
