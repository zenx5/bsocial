import React from 'react'
import { ScrollView } from 'react-native'

//  components
import HomeHeader from '../../components/HomeHeader'
import UpcomingEvents from '../../components/UpcomingEvents'
import FeaturedEvents from '../../components/FeaturedEvents'

const Home = (props) => {
  return (
    <ScrollView>
      <HomeHeader {...props} />
      <UpcomingEvents />
      <FeaturedEvents />
    </ScrollView>
  )
}

export default Home
