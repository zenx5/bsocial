import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

//  icons / logos
import Icons from '../Icons/Icons'

const InputLogin = () => {
  return (
    <TouchableOpacity style={{ position: 'relative', width: 291, borderBottomWidth: 1, borderBottomColor: '#70707016', marginBottom: 22 }}>
      <Icons name='Email' style={{ position: 'absolute' }} />
      <TextInput placeholder='Email' placeholderTextColor='#000' style={{ width: 291, fontSize: 14, paddingBottom: 10, paddingLeft: 36 }} />
    </TouchableOpacity>
  )
}

export default InputLogin
