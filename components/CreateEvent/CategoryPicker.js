import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Modal } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import EventsContext from '../../context/Events/EventsContext'
import AuthContext from '../../context/Auth/AuthContext'
import { StatusBar } from 'expo-status-bar'

//    -->   components
const Item = ({ item, onSelect }) => {
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
  const { getAllCategories, allEventsCategories, setCategory } = useContext(EventsContext)

  //  get all cotegories
  useEffect(() => {
    getAllCategories(userToken)
  }, [])

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const showCategoryList = () => setModalVisible(true)

  //  render list item
  const renderItem = ({ item }) => {
    const onSelect = () => {
      setCategory([item.id])
      setSelectedCategory(item.display_name)
      setModalVisible(false)
    }
    return (
      <Item item={item} onSelect={onSelect} />
    )
  }

  return (
    <View style={styles.container}>
      {modalVisible ? <StatusBar backgroundColor='#00000050' /> : null}
      <View>
        <Modal
          animationType='slide'
          visible={modalVisible}
          transparent
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <FlatList
                data={allEventsCategories}
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
    marginRight: wp('3.2%') //  12
  },

  selectCategory_text: {
    color: '#000',
    fontSize: hp('2.4%'), //  16.3~
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left'
  },

  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000050',
    height: '100%'
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
