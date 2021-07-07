import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//  icons
import IconEye from '../../components/Icons/IconEye'
import IconComments from '../../components/Icons/IconComments'
import IconLikes from '../../components/Icons/IconLikes'

//  example data
const FAKE_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    content: 'Far far away, behind the word mountains, Pityful a rethoric question ran over her cheek, then',
    views: 54,
    likes: 12,
    commets: 4
  },
  {
    id: 'bc13ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    views: 54,
    likes: 12,
    commets: 4
  },
  {
    id: 'f5sd4fbc13ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then',
    views: 54,
    likes: 12,
    commets: 4
  },
  {
    id: 'f5sd4fbc13ac68afc-c605-48d3-sdf84a4f8-fbd91aa97f63',
    title: 'Second Item',
    content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then',
    views: 54,
    likes: 12,
    commets: 4
  }
]

const Item = ({ item, navigate }) => {
  const colors = [
    '#E1B21C', '#82CC7C', '#33A0F3', '#F1485F', '#F26A24',
    '#512E5F', '#1B4F72', '#186A3B'
  ]
  const colorNumber = Math.floor(Math.random() * colors.length)
  const goEvent = () => {
    navigate('Event', { id: item.id })
  }

  return (
    <View style={styles.eventContainer}>
      <TouchableOpacity onPress={goEvent} style={[styles.imageContainer, { backgroundColor: colors[colorNumber] }]}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <TouchableOpacity onPress={goEvent}>
          <Text style={styles.name}>{item.name || ''}</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <View style={[styles.iconContainer, { marginRight: wp('5.5%') }]}>
            <IconEye style={styles.icon} />
            <Text style={styles.count}>{item.viewers_count || ''}</Text>
          </View>

          <View style={[styles.iconContainer, { marginRight: wp('5.5%') }]}>
            <IconComments style={styles.icon} />
            <Text style={styles.count}>{item.comments_count || ''}</Text>
          </View>

          <View style={styles.iconContainer}>
            <IconLikes style={styles.icon} />
            <Text style={styles.count}>{item.likes_count || ''}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const Separator = () => <View style={styles.separator} />

const MyUpcomingEvents = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })

  const renderItem = ({ item }) => <Item item={item} navigate={props.navigation} />

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.header_tiitle}>Mis próximos eventos</Text>
      </View>
      <FlatList
        data={FAKE_DATA}
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
    paddingHorizontal: wp('4.8%') // 20.11
  },

  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#00000014',
    marginVertical: 20
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  card_image: {
    width: wp('18.9%'), //  79.2
    borderRadius: 6,
    paddingLeft: 11,
    backgroundColor: '#00000020'
  },

  image: {
    width: wp('16.3%'), //  68.30
    height: hp('15.8%'), // 108.34
    borderRadius: 6,
    backgroundColor: '#00000080'
  },

  card_body: {
    height: hp('15.8%'), // 108.34
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: 10
  },

  card_title: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_500Medium'
  },

  card_content: {
    fontSize: 10,
    fontFamily: 'Poppins_400Regular',
    flexWrap: 'wrap'
  },

  card_icons: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },

  icon_total: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginLeft: 3
  }
})
export default MyUpcomingEvents
