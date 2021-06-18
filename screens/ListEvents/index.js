import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//  components
// import ListEventsHeader from './ListEvenstHeader'
// import Search from './Search'
// import Categories from './Categories'
// import DiscoverEvents from './DiscoverEvents'
// import MyUpcomingEvents from './MyUpcomingEvents'

const ListEvents = (props) => {
  return (
    <View style={styles.container}>
      <Text>List Event</Text>
      {/* <View>
        <ListEventsHeader {...props} />
      </View>

      <ScrollView>
        <Search />
        <Categories />
        <DiscoverEvents />
        <MyUpcomingEvents />
      </ScrollView> */}
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

export default ListEvents
