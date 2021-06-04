import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = () => <ActivityIndicator size='large' color='#00000050' style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, zIndex: 100 }} />

export default Loading
