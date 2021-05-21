import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins' //  eslint-disable-line
import AppLoading from 'expo-app-loading'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3765gfad53abb28ba',
    title: 'First Item',
    backgroundColor: '#E1B21C20',
    color: '#E1B21C'
  },
  {
    id: '3ac68a234fc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    backgroundColor: '#BE52F320',
    color: '#BE52F3'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145a571e29d72',
    title: 'Third Item',
    backgroundColor: '#EF8D5A20',
    color: '#EF8D5A'
  },
  {
    id: '58694adsfsd0f-3da1-471f-bd96-14557154e29d72',
    title: 'cuarto Item',
    backgroundColor: '#82CC7C20',
    color: '#82CC7C'
  },
  {
    id: 'bd7acbeafdgd-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    backgroundColor: '#E1B21C20',
    color: '#E1B21C'
  }
]

//  list item
const Item = ({ title, backgroundColor, color }) => {
  return (
    <View style={[styles.item, { backgroundColor: backgroundColor }]}>
      <Text style={[styles.item_text, { color: color }]}>{title}</Text>
    </View>
  )
}

const Categories = () => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  const renderItem = ({ item }) => <Item title={item.title} backgroundColor={item.backgroundColor} color={item.color} />

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
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
    paddingHorizontal: 10,
    marginTop: 10
  },

  item: {
    height: 30,
    display: 'row',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: 15
  },

  item_text: {
    fontSize: 11,
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal: 10
  }
})

export default Categories
