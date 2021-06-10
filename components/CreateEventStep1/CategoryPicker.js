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

const Item = ({ item, onSelect }) => {
  return (
    <View>
      <TouchableOpacity style={styles.item} onPress={onSelect}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>

  )
}

const CategoryPicker = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showCategoryList = () => {
    setIsVisible(true)
  }

  const onSelect = () => {
    setIsVisible(false)
  }

  //  list
  const renderItem = ({ item }) => <Item item={item} onSelect={onSelect} />

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
    paddingHorizontal: wp('6.6%'), //  27~
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
  },

  list: {
    // backgroundColor: '#00000050',
    backgroundColor: '#ffffffe0',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    borderWidth: 0.5,
    borderColor: '#00000030',
    width: wp('100%'),
    height: hp('55%'),
    position: 'absolute',
    bottom: hp('-20%') //  57
    // marginTop: hp('3%')
  },

  item: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryPicker
