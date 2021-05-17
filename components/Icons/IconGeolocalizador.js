import * as React from 'react'
import Svg, { G, Rect, Path } from 'react-native-svg'

function IconGeolocalizador (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={46}
      height={46}
      viewBox='0 0 46 46'
    >
      <G transform='translate(-265 -7)'>
        <Rect
          data-name='Rect\xE1ngulo 33715'
          width={46}
          height={46}
          rx={10}
          transform='translate(265 7)'
          fill='#e1b21c'
        />
        <Path
          d='M288 19.111a7.617 7.617 0 00-7.622 7.622c0 5.717 7.622 14.156 7.622 14.156s7.622-8.439 7.622-14.156A7.617 7.617 0 00288 19.111zm0 10.345a2.722 2.722 0 112.722-2.722A2.723 2.723 0 01288 29.456z'
          fill='#fff'
        />
      </G>
    </Svg>
  )
}

export default IconGeolocalizador
