import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconArrowNext from '../Icons/IconArrowNext'
import IconEye from '../Icons/IconEye'
import IconLikes from '../Icons/IconLikes'
import IconComments from '../Icons/IconComments'

//  components
const Item = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.card_image}>
        <Image />
      </View>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>{item.title}</Text>
        <View style={styles.card_icons}>
          <View style={styles.icon}>
            <IconEye />
            <Text style={styles.counter}>{item.views}</Text>
          </View>

          <View style={styles.icon}>
            <IconComments />
            <Text style={styles.counter}>{item.commets}</Text>
          </View>

          <View style={styles.icon}>
            <IconLikes />
            <Text style={styles.counter}>{item.likes}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const FAKE_DATA = [
  {
    id: 'bd7ac34bea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wild Party 2020',
    views: 20,
    commets: 13,
    likes: 12
  },
  {
    id: '3ac68afc-c605-42435648d3-a4f8-fbd91aa97f63',
    title: 'Despedida de José',
    views: 20,
    commets: 13,
    likes: 12
  },
  {
    id: '58694a0f-3da1-471f-bd96-1454534571e29d72',
    title: 'Cumpleaños de alguien',
    views: 20,
    commets: 13,
    likes: 12
  }
]

const DiscoverEvents = () => {
  // fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })

  //  render items for the list
  const renderItem = ({ item }) => <Item item={item} />

  //  waiting for fonts
  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={styles.container}>
      {/* title */}
      <View style={styles.header}>
        <Text style={styles.header_title}>Descubre eventos para ti</Text>
        <IconArrowNext style={styles.iconNext} />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FAKE_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
      />
    </View>
  )
}

export default DiscoverEvents

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: hp('1.7%'), // 11.65
    paddingBottom: hp('2.4'), // 16.45
    marginBottom: hp('1.7%') // 11.65
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4.8%'), // 20.11
    marginBottom: hp('2.7%') // 18.51
  },

  header_title: {
    fontSize: hp('2.4%'), // 16.45
    fontFamily: 'Poppins_700Bold',
    marginRight: 'auto'
  },

  iconNext: {
    width: wp('5.6%'), //  23.46
    height: hp('2.9%') // 19.88
  },

  flatList: {
    paddingLeft: wp('2.4%') //  10.05
  },

  card: {
    width: wp('37.5%'), //  157.14
    height: hp('20.2%'), // 138.51
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: '#DFDFDF',
    position: 'relative',
    marginRight: wp('2%') // 8.38
  },

  card_image: {
    height: hp('11.3%'), // 77.48
    backgroundColor: '#00000030',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },

  card_body: {
    paddingTop: hp('1.2%'), //  8.22
    paddingBottom: hp('2.2%') //  15.08
  },

  card_title: {
    fontSize: hp('1.7%'), //  11.65
    fontFamily: 'Poppins_500Medium',
    paddingLeft: wp('2.7%'), // 11.31
    marginBottom: hp('1.2%') //  8.22
  },

  card_icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('2.7%') // 11.31
  },

  icon: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  counter: {
    fontSize: hp('1.8%'), // 12.34
    fontFamily: 'Poppins_400Regular',
    marginLeft: wp('1%')
  }
})
