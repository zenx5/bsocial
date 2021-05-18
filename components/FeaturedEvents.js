import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins' //  eslint-disable-line
import AppLoading from 'expo-app-loading'

const Item = ({ title }) => (
  <View>
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} />
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconContainer} />
      </View>
    </View>
    <View style={styles.separator} />
  </View>
)

const FeatureEvents = (props) => {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })
  //  example data
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      views: 54,
      likes: 12,
      comment: 4
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      views: 54,
      likes: 12,
      comment: 4
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      views: 54,
      likes: 12,
      comment: 4
    }
  ]

  const renderItem = ({ item }) => <Item title={item.title} />

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Eventos destacados</Text>
      </View>

      <View>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        <View style={styles.separatorBlank} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold'
  },

  separator: {
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#00000014'
  },

  separatorBlank: {
    width: 350,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: -1
  },

  item: {
    width: '100%',
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 13.5
  },

  imageContainer: {
    width: 89,
    height: 54,
    borderRadius: 6,
    paddingVertical: 2,
    paddingRight: 2,
    paddingLeft: 11,
    backgroundColor: '#00000020'
  },

  image: {
    width: 76,
    height: 49,
    borderRadius: 6,
    backgroundColor: '#00000080'
  },

  dataContainer: {
    marginLeft: 20,
    flexDirection: 'column'
  },

  title: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins_500Medium'
  },

  iconContainer: {
    flexDirection: 'row',
    marginTop: 7
  }

})

export default FeatureEvents
