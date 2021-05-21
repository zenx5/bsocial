import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins' //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  icons
import IconEye from '../../components/Icons/IconEye'
import IconComments from '../../components/Icons/IconComments'
import IconLikes from '../../components/Icons/IconLikes'

const DATA = [
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

//  list item
const Item = ({ title, views, commets, likes }) => {
  return (
    <View style={styles.card}>
      <View style={styles.card_image}>
        <Image />
      </View>
      <View style={styles.card_body}>
        <Text style={styles.card_title}>{title}</Text>
        <View style={styles.card_icons}>
          <View style={styles.icon}>
            <IconEye />
            <Text>{views}</Text>
          </View>

          <View style={styles.icon}>
            <IconComments />
            <Text>{commets}</Text>
          </View>

          <View style={styles.icon}>
            <IconLikes />
            <Text>{likes}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

//  main
const DiscoverEvents = () => {
  const [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_700Bold })

  const renderItem = ({ item }) => <Item title={item.title} views={item.views} commets={item.commets} likes={item.likes} />

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Descubre eventos para ti</Text>
      </View>

      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 11,
    paddingBottom: 16,
    paddingHorizontal: 10,
    marginTop: 13
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 18
  },

  title: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold'
  },

  card: {
    width: 167,
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: '#DFDFDF',
    position: 'relative',
    marginRight: 8
  },

  card_image: {
    height: 77,
    backgroundColor: '#00000030',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },

  card_body: {
    paddingTop: 8,
    paddingBottom: 15
  },

  card_title: {
    fontSize: 11,
    fontFamily: 'Poppins_500Medium',
    paddingLeft: 11,
    marginBottom: 10
  },

  card_icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 11
  },

  icon: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default DiscoverEvents
