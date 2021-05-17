import React from 'react'
import { View } from 'react-native'

//  components
import HomeHeader from '../../components/HomeHeader'
import UpcomingEvents from '../../components/UpcomingEvents'

const Home = () => {
  return (
    <View>
      <HomeHeader />
      <UpcomingEvents />
    </View>
  )
}
export default Home
