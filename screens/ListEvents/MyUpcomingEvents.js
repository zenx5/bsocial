import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconEye from '../../components/Icons/IconEye'
import IconComments from '../../components/Icons/IconComments'
import IconLikes from '../../components/Icons/IconLikes'

const Item = ({ title, content, views, commets, likes }) => (
  <View>
    <View style={styles.card}>
      <View style={styles.card_image}>
        <Image style={styles.image} />
      </View>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>{title}</Text>
        <Text numberOfLines={3} ellipsizeMode='tail' style={styles.card_content}>{content}</Text>
        <View style={styles.card_icons}>
          <View style={styles.icon}>
            <IconEye />
            <Text style={styles.icon_total}>{views}</Text>
          </View>

          <View style={styles.icon}>
            <IconComments />
            <Text style={styles.icon_total}>{commets}</Text>
          </View>

          <View style={styles.icon}>
            <IconLikes />
            <Text style={styles.icon_total}>{likes}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
)

const Separator = () => <View style={styles.separator} />

const MyUpcomingEvents = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })
  //  example data
  const DATA = [
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
    }
  ]

  const renderItem = ({ item }) => <Item title={item.title} content={item.content} views={item.views} commets={item.commets} likes={item.likes} />

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_tiitle}>Mis próximos eventos</Text>
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 6,
    paddingBottom: 30,
    paddingHorizontal: 20,
    marginTop: 11

  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17
  },

  header_tiitle: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold'
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
    width: 79,
    height: 108,
    borderRadius: 6,
    paddingLeft: 11,
    backgroundColor: '#00000020'
  },

  image: {
    width: 68,
    height: 108,
    borderRadius: 6,
    backgroundColor: '#00000080'
  },

  card_body: {
    height: 108,
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
    width: 320,
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
