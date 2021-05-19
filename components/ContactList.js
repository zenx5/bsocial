import React, { useState } from 'react'
import { View, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

//  icons
import IconCheck from './Icons/IconCheck'

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

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.image}>
      <Image />
    </View>
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
)

const Separator = () => {
  return <View style={styles.separator} />
}

//  main
export default function ContactList (props) {
  const [selectedId, setSelectedId] = useState(null)
  const goStep3 = () => props.navigation.navigate('Create Event Step 3')

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff'

    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />
  }

  return (
    <>
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ItemSeparatorComponent={Separator}
      />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={!selectedId} onPress={goStep3} style={[styles.buttonDisable, selectedId && styles.buttonBase]}>
          <Text style={[styles.buttonTextDisable, selectedId && styles.buttonTextBase]}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 20
  },

  item: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
  },

  image: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#00000020'
  },

  name: {
    fontSize: 12,
    marginLeft: 20
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: '#00000014'
  },

  buttonContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15
  },

  buttonDisable: {
    backgroundColor: '#fff',
    width: 291,
    height: 57,
    borderWidth: 0,
    borderRadius: 29
  },

  buttonBase: {
    backgroundColor: '#E1B21C'
  },

  buttonTextDisable: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    textTransform: 'uppercase',
    paddingVertical: 16
  },

  buttonTextBase: {
    color: '#fff'
  }
})
