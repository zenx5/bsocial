import React from 'react'
import { View, StyleSheet } from 'react-native'

//  components
import HomeHeader from './HomeHeader'
import UpcomingEvents from './UpcomingEvents'
import FeaturedEvents from './FeaturedEvents'

const Home = (props) => {
  return (
    <View style={styles.container}>
      <HomeHeader {...props} />
      <UpcomingEvents />
      <FeaturedEvents />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
