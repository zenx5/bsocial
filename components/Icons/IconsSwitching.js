import * as React from 'react'
import IconBack from './IconBack'
import IconEmail from './IconEmail'
import IconEye from './IconEye'
import IconEyeOff from './IconEyeOff'
import IconEyeOffBlack from './IconEyeOffBlack'
import IconFacebook from './IconFacebook'
import IconGoogle from './IconGoogle'
import IconPassword from './IconPassword'
import LogoBsocialBienvenida from './LogoBsocialBienvenida'

function IconsSwitching ({ name, style }) {
  switch (name) {
    case 'Back':
      return <IconBack style={style} />
    case 'Email':
      return <IconEmail style={style} />
    case 'Eye':
      return <IconEye style={style} />
    case 'EyeOff':
      return <IconEyeOff style={style} />
    case 'EyeOffBlack':
      return <IconEyeOffBlack />
    case 'Facebook':
      return <IconFacebook style={style} />
    case 'Google':
      return <IconGoogle style={style} />
    case 'Password':
      return <IconPassword style={style} />
    case 'BSocialBienvenida':
      return <LogoBsocialBienvenida style={style} />
  }
}

export default IconsSwitching
