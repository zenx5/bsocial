import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

//  icons / logos
import Icons from '../Icons/Icons'

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
    <View>
      <View style={{ position: 'relative' }}>
        <Icons name='Password' style={{ position: 'absolute' }} />
      </View>
      <TouchableOpacity style={{ width: 291, borderBottomWidth: 1, borderBottomColor: '#70707016', marginBottom: 22 }}>
        <TextInput secureTextEntry={secureTextEntry} placeholder='Contraseña' placeholderTextColor='#000' style={{ width: 291, fontSize: 14, paddingBottom: 10, paddingLeft: 36 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={showPassword} style={{ position: 'absolute', top: 10, right: 0 }}>
        <Icons name={eye} />
      </TouchableOpacity>
    </View>
  )
}

export default InputPassword
