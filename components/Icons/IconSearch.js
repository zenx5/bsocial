import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

function IconSearch (props) {
  return (
    <Svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={23.611}
      height={23.611}
      viewBox='0 0 23.611 23.611'
    >
      <G
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
      >
        <Path
          data-name='Trazado 112'
          d='M19.269 10.384A8.884 8.884 0 1110.384 1.5a8.884 8.884 0 018.885 8.884z'
        />
        <Path data-name='Trazado 113' d='M21.49 21.49l-4.831-4.831' />
      </G>
    </Svg>
  )
}

export default IconSearch
