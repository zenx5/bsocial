import * as React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'

function IconGoogle (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 46 46'
    >
      <G transform='translate(-203 -212)'>
        <Circle
          data-name='Elipse 2'
          cx={23}
          cy={23}
          r={23}
          transform='translate(203 212)'
          fill='#2a75f3'
        />
        <Path
          data-name='Icon awesome-google'
          d='M238.893 234.947c0 7.218-4.943 12.355-12.242 12.355a12.65 12.65 0 010-25.3 12.166 12.166 0 018.483 3.311l-3.444 3.309c-4.504-4.346-12.88-1.084-12.88 6.029a7.924 7.924 0 007.84 7.987c5.009 0 6.886-3.591 7.182-5.453h-7.182v-4.347h12.044a11.09 11.09 0 01.199 2.109z'
          fill='#fff'
        />
      </G>
    </Svg>
  )
}

export default IconGoogle
