import React from 'react'
import { View, StyleSheet } from 'react-native'

//  components
import HomeHeader from '../../components/HomeHeader'
import UpcomingEvents from '../../components/UpcomingEvents'

const Home = (props) => {
  return (
    <View style={styles.container}>
      <HomeHeader {...props} />
      <UpcomingEvents />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 30
  }
})

export default Home
