import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import EventsContext from '../../context/Events/EventsContext'

//  icons
import IconEye from '../../components/Icons/IconEye'
import IconComments from '../../components/Icons/IconComments'
import IconLikes from '../../components/Icons/IconLikes'
import AuthContext from '../../context/Auth/AuthContext'

const Item = ({ item, goEvent }) => {
  return (
    <View style={styles.card}>
      {/* image */}
      <TouchableOpacity style={styles.card_imageContainer}>
        <Image style={styles.card_image} source={{ uri: item.image }} />
      </TouchableOpacity>

      <View style={styles.card_body}>
        {/* title */}
        <TouchableOpacity style={styles.card_title}>
          <Text style={styles.name}>{item.name || ''}</Text>
        </TouchableOpacity>

        {/* description */}
        <Text style={styles.card_description}>{item.description}</Text>

        {/* icons */}
        <View style={styles.card_iconsContainer}>
          <IconEye />
          <Text style={styles.icons_count}>{item.viewers_count}</Text>

          <IconComments />
          <Text style={styles.icons_count}>{item.comments_count}</Text>

          <IconLikes />
          <Text style={styles.icons_count}>{item.likes_count}</Text>
        </View>
      </View>
    </View>
  )
}

//  separator item
const Separator = () => <View style={styles.separator} />

const MyUpcomingEvents = (props) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })

  //  context
  const { userToken } = useContext(AuthContext)
  const { getEventsHome, upcoming } = useContext(EventsContext)

  //  on end scroll
  const onEndList = () => getEventsHome(userToken)

  const renderItem = ({ item }) => {
    // const goEvent = () => props.navigation.navigate('Event', { id: item.id })
    return (
      <Item item={item} />
    )
  }
  // const memoizedValue = useMemo(() => renderItem, [upcoming])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.header_tiitle}>Mis próximos eventos</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={onEndList}
        initialNumToRender={5}
        data={upcoming}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={Separator}
        style={styles.flatList}
      />

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: hp('0.9%'), //  6.17
    paddingBottom: hp('4%'), // 27.42
    paddingHorizontal: wp('4.8%') // 20.11
  },

  header: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp('0.9%'), //  6.17
    paddingHorizontal: wp('4.8%'), // 20.11
    paddingBottom: hp('2.5%') // 17.14
  },

  header_tiitle: {
    fontSize: hp('2.4%'), //  16.45
    fontFamily: 'Poppins_700Bold'
  },

  flatList: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('4.8%'), // 20.11
    paddingBottom: 10
  },

  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#00000014',
    marginVertical: 20
  },

  card: {
    flexDirection: 'row'
  },

  card_imageContainer: {
    width: wp('18.9%'), //  79.2
    borderRadius: 6,
    paddingLeft: 11,
    backgroundColor: '#00000020'
  },

  card_image: {
    width: wp('16.3%'), //  68.30
    height: hp('15.8%'), // 108.34
    borderRadius: 6,
    backgroundColor: '#00000080'
  },

  card_body: {
    height: hp('15.8%'), // 108.34
    marginLeft: hp('1.5%') // 10.28
  },

  card_title: {
    fontSize: hp('2.1%'), //  14.4
    color: '#000',
    fontFamily: 'Poppins_500Medium',
    marginBottom: hp('1.5%') // 10.28
  },

  card_description: {
    fontSize: hp('1.5%'), // 10.28
    fontFamily: 'Poppins_400Regular',
    marginBottom: 'auto'
  },

  card_iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2.4%') //  10.05
  },

  icons_count: {
    fontSize: hp('1.8%'), //  12.34
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginLeft: wp('1.2%'), // 5.02
    marginRight: wp('2%') // 8.38
  }
})
export default MyUpcomingEvents
