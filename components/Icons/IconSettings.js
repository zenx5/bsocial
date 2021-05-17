import * as React from 'react'
import Svg, { G, Path, Circle } from 'react-native-svg'

function IconSettings (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={16}
      viewBox='0 0 20 16'
    >
      <G stroke='#231f20'>
        <Path
          data-name='L\xEDnea 6'
          fill='none'
          strokeLinecap='round'
          strokeWidth={2}
          d='M1 2h18'
        />
        <Path
          data-name='L\xEDnea 14'
          fill='none'
          strokeLinecap='round'
          strokeWidth={2}
          d='M1 14h18'
        />
        <Path
          data-name='L\xEDnea 13'
          fill='none'
          strokeLinecap='round'
          strokeWidth={2}
          d='M1 8h18'
        />
        <G data-name='Elipse 53' transform='translate(13)' fill='#fff'>
          <Circle cx={2} cy={2} r={2} stroke='none' />
          <Circle cx={2} cy={2} r={1.5} fill='none' />
        </G>
        <G data-name='Elipse 55' transform='translate(13 12)' fill='#fff'>
          <Circle cx={2} cy={2} r={2} stroke='none' />
          <Circle cx={2} cy={2} r={1.5} fill='none' />
        </G>
        <G data-name='Elipse 54' transform='translate(3 6)' fill='#fff'>
          <Circle cx={2} cy={2} r={2} stroke='none' />
          <Circle cx={2} cy={2} r={1.5} fill='none' />
        </G>
      </G>
    </Svg>
  )
}

export default IconSettings
