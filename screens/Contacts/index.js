import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Animated } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import AppLoading from 'expo-app-loading'

//  components
import Search from '../../components/Search'

//  icons
import IconSearch from '../../components/Icons/IconSearch'
import IconClose from '../../components/Icons/IconClose'
import IconContact from '../../components/Icons/IconContact'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    name: 'Nombre aprellido'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    name: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    name: 'Third Item'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb328ba',
    name: 'Nombre aprellido'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd491aa97f63',
    name: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd936-145571e29d72',
    name: 'Third Item'
  },
  {
    id: 'bd7acbea-c1b1-4621c2-aed5-3ad53abb28ba',
    name: 'Nombre aprellido'
  },
  {
    id: '3ac68afc-c605-48d3-a43f8-fbd91aa97f63',
    name: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-123bd96-145571e29d72',
    name: 'Third Item'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3a31d53abb28ba',
    name: 'Nombre aprellido'
  }
]

const Header = ({ isSearch, openSearch, closeSearch, fadeAnimationSearch, fadeAnimationTitle }) => {
  return (
    <View>
      <Animated.View style={[styles.header, { opacity: fadeAnimationTitle }, isSearch && styles.disable]}>
        <Text style={styles.header_title}>Contactos</Text>

        <TouchableOpacity onPress={openSearch} style={styles.header_icon}>
          <IconSearch />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.search, { opacity: fadeAnimationSearch }, !isSearch && styles.disable]}>
        <View>
          <Search />
        </View>
        <TouchableOpacity onPress={closeSearch} style={styles.search_icon}>
          <IconClose />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const Item = ({ item }) => (
  <TouchableOpacity style={[styles.item]}>
    <View style={styles.item_image}>
      <Image />
    </View>
    <Text style={styles.item_text}>{item.name}</Text>
  </TouchableOpacity>
)

const NewContact = () => {
  return (
    <TouchableOpacity style={styles.item}>
      <IconContact />
      <Text style={styles.item_text}>Agregar contacto</Text>
    </TouchableOpacity>
  )
}

//  main
const Contacts = () => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold })

  // header swiching
  const [isSearch, setIsSearch] = useState(false)

  //  animation
  const fadeAnimationSearch = useRef(new Animated.Value(0)).current
  const fadeAnimationTitle = useRef(new Animated.Value(1)).current

  //  function fade
  const fadeInSearch = () => {
    Animated.timing(fadeAnimationSearch, {
      toValue: 1,
      duration: 1000
    }).start()
  }

  const fadeOutSearch = () => {
    Animated.timing(fadeAnimationSearch, {
      toValue: 0,
      duration: 1000
    }).start()
  }

  const fadeInTitle = () => {
    Animated.timing(fadeAnimationTitle, {
      toValue: 1,
      duration: 1000
    }).start()
  }

  const fadeOutTitle = () => {
    Animated.timing(fadeAnimationTitle, {
      toValue: 0,
      duration: 1000
    }).start()
  }

  //  execution hader change
  const openSearch = () => {
    setIsSearch(true)
    fadeInSearch()
    fadeOutTitle()
  }
  const closeSearch = () => {
    setIsSearch(false)
    fadeOutSearch()
    fadeInTitle()
  }

  //  list item
  const renderItem = ({ item }) => {
    return <Item item={item} />
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <View style={styles.headerContainer}>
        {/* header */}
        <Header
          isSearch={isSearch}
          openSearch={openSearch}
          closeSearch={closeSearch}
          fadeAnimationTitle={fadeAnimationTitle}
          fadeAnimationSearch={fadeAnimationSearch}
        />

        <Text style={styles.header_text}>Lista de contactos agregados</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
        ListHeaderComponent={NewContact}
      />
    </>
  )
}

const styles = StyleSheet.create({

  headerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 27
  },

  header_title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#000'
  },

  header_icon: {
    marginRight: 10
  },

  header_text: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular'
  },

  flatList: {
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },

  item_image: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#00000020'
  },

  item_text: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginLeft: 22
  },
  search: {
    position: 'relative',
    marginTop: -11,
    marginBottom: 20
  },

  search_icon: {
    position: 'absolute',
    top: 15,
    right: 19
  },

  disable: {
    display: 'none'
  }
})

export default Contacts
