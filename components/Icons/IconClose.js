import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

function IconClose (props) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      viewBox='0 0 20.536 20.535'
    >
      <G fill='none' stroke='#000' strokeLinecap='round' strokeWidth={2.5}>
        <Path data-name='Trazado 110' d='M1.768 18.768l17-17' />
        <Path data-name='Trazado 111' d='M18.768 18.768l-17-17' />
      </G>
    </Svg>
  )
}

export default IconClose
