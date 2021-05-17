import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

//  icons / logos
import IconEmail from '../../components/Icons/IconEmail'

const InputLogin = () => {
  return (
    <TouchableOpacity style={{ position: 'relative', width: 291, borderBottomWidth: 1, borderBottomColor: '#70707016', marginBottom: 22 }}>
      <IconEmail style={{ position: 'absolute', left: 0, bottom: 5 }} />
      <TextInput placeholder='Email' placeholderTextColor='#000' style={{ width: 291, fontSize: 14, paddingBottom: 10, paddingLeft: 36 }} />
    </TouchableOpacity>
  )
}

export default InputLogin
