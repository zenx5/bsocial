import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

//  icons / logos
import IconPassword from '../../components/Icons/IconPassword'
import IconsSwitching from '../../components/Icons/IconsSwitching'

const InputPassword = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [eye, setEye] = useState('EyeOff')
  const showPassword = () => {
    if (secureTextEntry === true) {
      setSecureTextEntry(false)
      setEye('Eye')
    } else {
      setSecureTextEntry(true)
      setEye('EyeOff')
    }
  }

  return (
    <View style={{ marginBottom: 40, position: 'relative' }}>
      <IconPassword style={{ position: 'absolute', left: 0, bottom: 5 }} />
      <TouchableOpacity style={{ width: 291, borderBottomWidth: 1, borderBottomColor: '#70707016' }}>
        <TextInput secureTextEntry={secureTextEntry} placeholder='Contraseña' placeholderTextColor='#000' style={{ width: 291, fontSize: 14, paddingBottom: 10, paddingLeft: 36 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={showPassword} style={{ position: 'absolute', top: 0, right: 0 }}>
        <IconsSwitching name={eye} />
      </TouchableOpacity>
    </View>
  )
}

export default InputPassword
