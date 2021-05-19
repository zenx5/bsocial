import React from 'react'
import { ScrollView, View } from 'react-native'

//  components
import HomeHeader from '../../components/HomeHeader'
import UpcomingEvents from '../../components/UpcomingEvents'
import FeaturedEvents from '../../components/FeaturedEvents'

const Home = (props) => {
  return (
    <>
      <View>
        <HomeHeader {...props} />
      </View>

      <ScrollView>
        <UpcomingEvents />
        <FeaturedEvents />
      </ScrollView>
    </>
  )
}

export default Home
