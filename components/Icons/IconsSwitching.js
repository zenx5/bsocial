import * as React from 'react'
import IconEye from './IconEye'
import IconEyeOff from './IconEyeOff'
import IconEyeOffBlack from './IconEyeOffBlack'
import IconHomeOff from './IconHomeOff'
import IconHomeOn from './IconHomeOn'
import IconSettingOn from './IconSettingOn'
import IconSettingOff from './IconSettingOff'

function IconsSwitching ({ name, style }) {
  switch (name) {
    case 'Eye':
      return <IconEye style={style} />
    case 'EyeOff':
      return <IconEyeOff style={style} />
    case 'EyeOffBlack':
      return <IconEyeOffBlack />
    case 'HomeOn':
      return <IconHomeOn />
    case 'HomeOff':
      return <IconHomeOff />
    case 'SettingOn':
      return <IconSettingOn />
    case 'SettingOff':
      return <IconSettingOff />
  }
}

export default IconsSwitching
