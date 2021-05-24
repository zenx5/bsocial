import React from 'react'
import { ScrollView, View } from 'react-native'

//  components
import ListEventsHeader from './ListEvenstHeader'
import Search from './Search'
import Categories from './Categories'
import DiscoverEvents from './DiscoverEvents'
import MyUpcomingEvents from './MyUpcomingEvents'

const ListEvents = (props) => {
  return (
    <>
      <View>
        <ListEventsHeader {...props} />
      </View>

      <ScrollView>
        <Search />
        <Categories />
        <DiscoverEvents />
        <MyUpcomingEvents />
      </ScrollView>
    </>
  )
}

export default ListEvents
