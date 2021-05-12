import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { useFonts } from 'expo-font'

//  components
import Button from './Button'

const Separator = () => (
  <View style={styles.separator} />
)

const Login = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
  })

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <View style={styles.container}>
        <Separator />
        <TextInput />
        <Button />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '21px'
  },

  signup: {
    backgroundColor: '#E1B21C',
    width: '100%',
    paddingVertical: '16px',
    borderRadius: '29px',
    marginBottom: '20'
  },

  textSignup: {
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  },

  signin: {
    backgroundColor: '#E1B21C',
    width: '100%',
    paddingVertical: '16px',
    borderRadius: '29px',
    marginBottom: '20'
  },

  textSignin: {
    color: '#000',
    fontSize: '18px',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})

export default Login
