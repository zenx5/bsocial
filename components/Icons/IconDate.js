import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function IconDate (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={20.188}
      height={22.431}
      viewBox='0 0 20.188 22.431'
    >
      <Path
        d='M17.945 2.243h-1.122V0H14.58v2.243H5.608V0H3.365v2.243H2.243A2.233 2.233 0 00.011 4.486L0 20.188a2.242 2.242 0 002.243 2.243h15.7a2.25 2.25 0 002.243-2.243V4.486a2.25 2.25 0 00-2.241-2.243zm0 17.945H2.243V7.851h15.7z'
        fill='#e1b21c'
      />
    </Svg>
  )
}

export default IconDate
