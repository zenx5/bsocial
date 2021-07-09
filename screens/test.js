import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const GOOGLE_PLACES_API_KEY = '' // never save your real api key in a snack!

const App = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en' // language of the results
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={(error) => console.error(error)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1'
  }
})

export default App
