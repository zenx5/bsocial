import React from 'react'
import IconEye from './IconEye'
import IconEyeOff from './IconEyeOff'
import IconEyeOffBlack from './IconEyeOffBlack'
import IconHomeOff from './IconHomeOff'
import IconHomeOn from './IconHomeOn'
import IconSettingOn from './IconSettingOn'
import IconSettingOff from './IconSettingOff'
import IconContactOn from './IconContactOn'
import IconContactOff from './IconContactOff'
import IconListOn from './IconListOn'
import IconListOff from './IconListOff'
import IconCheck from './IconCheck'

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
    case 'ContactOn':
      return <IconContactOn />
    case 'ContactOff':
      return <IconContactOff />
    case 'ListOn':
      return <IconListOn />
    case 'ListOff':
      return <IconListOff />
    case 'Check':
      return <IconCheck />
    default:
      return null
  }
}

export default IconsSwitching
