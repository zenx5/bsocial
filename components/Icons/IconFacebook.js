import * as React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'

function IconFacebook (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={46}
      height={46}
      viewBox='0 0 46 46'
    >
      <G transform='translate(-117 -212)'>
        <Circle
          data-name='Elipse 1'
          cx={23}
          cy={23}
          r={23}
          transform='translate(117 212)'
          fill='#4867aa'
        />
        <Path
          data-name='Icon awesome-facebook-f'
          d='M145.339 236.422l.691-4.5h-4.318v-2.921a2.25 2.25 0 012.537-2.431h1.963v-3.836a23.94 23.94 0 00-3.485-.3c-3.556 0-5.881 2.155-5.881 6.057v3.43h-3.953v4.5h3.953v10.88h4.865v-10.879z'
          fill='#fff'
        />
      </G>
    </Svg>
  )
}

export default IconFacebook
