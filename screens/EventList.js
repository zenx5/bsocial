import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, FlatList, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Constants from 'expo-constants'
import { useFonts, Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import AuthContext from '../context/Auth/AuthContext'
import EventsContext from '../context/Events/EventsContext'

//  icons and logos
import IconBack from '../components/Icons/IconBack'
import BSocial from '../components/Icons/BSocial'
import IconSearch from '../components/Icons/IconSearch'

//  componentes
import DiscoverEvents from '../components/EventList/DiscoverEvents'
import MyUpcomingEvents from '../components/EventList/MyUpcomingEvents'

const Item = ({ item }) => {
  return (
    <View style={styles.item_container}>
      <Text style={styles.item_text}>{item.display_name}</Text>
    </View>
  )
}

const EventList = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_300Light, Poppins_400Regular })

  //  context
  const { userToken } = useContext(AuthContext)
  const { getAllCategories, allEventsCategories } = useContext(EventsContext)

  useEffect(() => {
    getAllCategories(userToken)
  }, [])

  //  render items
  const renderItem = ({ item }) => <Item item={item} />

  //  waiting for fonts
  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IconBack style={styles.iconBack} />
        </TouchableOpacity>
        <BSocial style={styles.bsocial} />
      </View>

      {/* search bar */}
      <View style={styles.search}>
        <TextInput
          placeholder='Buscar eventos'
          placeholderTextColor='#00000060'
          style={styles.searchInput}
        />
        <View style={styles.iconSearch}>
          <IconSearch />
        </View>
      </View>

      {/*  categories */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={allEventsCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={styles.flatList}
        />
      </View>

      {/* discover events for you */}
      <DiscoverEvents />

      {/* my upcoming events */}
      <MyUpcomingEvents />
    </View>
  )
}

export default EventList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },

  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: hp('4.4%'), //  30.17
    paddingHorizontal: wp('7.7'), // 32.26
    paddingBottom: hp('1.9%'), // 13.02
    marginBottom: hp('1.7%') // 11.65
  },

  iconBack: {
    width: wp('3%'),
    height: hp('4%') // 32
  },

  bsocial: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: wp('2.4%'), // 10.05
    marginBottom: hp('1.7%') // 11.65
  },

  searchInput: {
    width: '100%',
    fontSize: hp('2.4'), // 16.45
    height: hp('7%'), //  48
    paddingLeft: wp('12.5%'), //  52.38
    backgroundColor: '#0000000D',
    borderRadius: 10,
    fontFamily: 'Poppins_300Light'
  },

  iconSearch: {
    position: 'absolute',
    top: 14,
    left: wp('5%')
  },

  flatList: {
    paddingLeft: wp('2.4%'), // 10.05
    marginBottom: hp('1.9%') // 13.02
  },

  item_container: {
    marginRight: wp('0.8%') // 3.35
  },

  item_text: {
    fontSize: hp('1.7%'), // 11.65
    fontFamily: 'Poppins_400Regular',
    backgroundColor: '#00000050',
    paddingVertical: hp('0.8%'), // 5.48
    paddingHorizontal: wp('4%'), // 16.76
    borderRadius: 16
  }
})
