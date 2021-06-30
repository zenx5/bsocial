import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Modal } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import EventsContext from '../../context/Events/EventsContext'
import AuthContext from '../../context/Auth/AuthContext'

//    -->   components
const Item = ({ item, onSelect }) => {
  console.log(item)
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onSelect}>
        <Text>{item.display_name}</Text>
      </TouchableOpacity>
    </View>

  )
}

const CategoryPicker = () => {
  //    -->   contexts
  const { userToken } = useContext(AuthContext)
  const { getAllCategories, categoriesEvents, setCategory } = useContext(EventsContext)

  useEffect(() => {
    getAllCategories(userToken)
  }, [])

  console.log(categoriesEvents)

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const showCategoryList = () => {
    setModalVisible(true)
  }

  //  list
  const renderItem = ({ item }) => {
    const onSelect = () => {
      setCategory(item.title)
      setSelectedCategory(item.title)
      setModalVisible(false)
    }
    return (
      <Item item={item} onSelect={onSelect} />
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Modal
          animationType='slide'
          transparent
          visible={modalVisible}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <FlatList
                data={categoriesEvents}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
        </Modal>

      </View>
      <TouchableOpacity style={styles.selectCategory} onPress={showCategoryList}>
        <Image style={styles.selectCategory_image} />

        <Text style={styles.selectCategory_text}>{selectedCategory || 'Selecciona una categoria'}</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: wp('6.6%') //  27~
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

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp('45%')
  },

  modalView: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    height: hp('45%'),
    paddingTop: hp('5%') // 34.28
  },

  item: {
    alignItems: 'center',
    marginBottom: hp('1.7%')
  }
})

export default CategoryPicker
