import React from 'react'
import { View } from 'react-native'

//  components
import HomeHeader from '../../components/HomeHeader'
import UpcomingEvents from '../../components/UpcomingEvents'

const Home = (props) => {
  return (
    <View>
      <HomeHeader {...props} />
      <UpcomingEvents />
    </View>
  )
}

export default Home
