import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const DATA_TEST = [
  { id: '1', title: 'Discotecas' },
  { id: '2', title: 'Swingers' },
  { id: '3', title: 'Fiesta privada en casa' },
  { id: '4', title: 'Evento empresarial' },
  { id: '5', title: 'Despedida de soltero' }

]

const Item = ({ item }) => {
  return (
    <TouchableOpacity>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}

const CategoryPicker = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showCategoryList = () => {
    setIsVisible(true)
  }

  //  list
  const renderItem = ({ item }) => <Item item={item} />

  return (
    <TouchableOpacity onPress={showCategoryList} style={styles.container}>
      {
        isVisible
          ? (
            <View style={styles.list}>
              <FlatList
                data={DATA_TEST}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            )
          : (
            <View style={styles.selectCategory}>
              <Image style={styles.selectCategory_image} />
              <Text style={styles.selectCategory_text}>Selecciona una categoria</Text>
            </View>
            )
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    zIndex: 10
  },

  list: {
    backgroundColor: '#00000050',
    // backgroundColor: '#ffffffe0',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderWidth: 0.5,
    borderColor: '#00000030',
    width: wp('100%'),
    height: hp('45%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('-19.5%'), //  57
    zIndex: 10
  },

  selectCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%') // 13.7~
  },

  selectCategory_image: {
    backgroundColor: '#00000014',
    borderRadius: 30,
    width: wp('5.5%'), // 22~
    height: wp('5.5%'), // 22.4~
    marginRight: wp('3%') //  12.1~
  },

  selectCategory_text: {
    color: '#000',
    fontSize: hp('2.4%'), //  16.3~
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left'
  }
})

export default CategoryPicker
