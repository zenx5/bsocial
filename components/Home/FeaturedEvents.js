import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins' //  eslint-disable-line
import AppLoading from 'expo-app-loading'
import EventsContext from '../../context/Events/EventsContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//    -->   icons
import IconEye from '../Icons/IconEye'
import IconComments from '../Icons/IconComments'
import IconLikes from '../Icons/IconLikes'

//    -->   components
const Item = ({ item, navigate }) => {
  const colors = [
    '#E1B21C', '#82CC7C', '#33A0F3', '#F1485F', '#F26A24',
    '#512E5F', '#1B4F72', '#186A3B'
  ]
  const colorNumber = Math.floor(Math.random() * colors.length)
  const goEvent = () => {
    navigate('Event', { id: item.id })
  }

  return (
    <View style={styles.eventContainer}>
      <TouchableOpacity onPress={goEvent} style={[styles.imageContainer, { backgroundColor: colors[colorNumber] }]}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <TouchableOpacity onPress={goEvent}>
          <Text style={styles.name}>{item.name || ''}</Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <View style={[styles.iconContainer, { marginRight: wp('5.5%') }]}>
            <IconEye style={styles.icon} />
            <Text style={styles.count}>{item.viewers_count || ''}</Text>
          </View>

          <View style={[styles.iconContainer, { marginRight: wp('5.5%') }]}>
            <IconComments style={styles.icon} />
            <Text style={styles.count}>{item.comments_count || ''}</Text>
          </View>

          <View style={styles.iconContainer}>
            <IconLikes style={styles.icon} />
            <Text style={styles.count}>{item.likes_count || ''}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const Separator = () => <View style={styles.separator} />

//  -->   Main    <--
const FeatureEvents = (props) => {
  //  -->   fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })

  //  -->   context
  const { featured } = useContext(EventsContext)

  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionName}>Eventos destacados</Text>

      {
        featured.length
          ? (
            <FlatList
              data={featured}
              renderItem={({ item }) => <Item item={item} navigate={props.navigation.navigate} />}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={Separator}
            />
            )
          : <Text>No tiene eventos Destacados</Text>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: hp('2.2%'), // 18
    paddingHorizontal: wp('5.5%') //  20.5
  },

  sectionName: {
    fontSize: hp('2%'), //  16
    fontFamily: 'Poppins_700Bold',
    width: '100%'
  },

  separator: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#00000014'
  },

  eventContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.6%') // 13
  },

  imageContainer: {
    width: wp('24%'), // 90
    height: hp('6.7%'), //  54.5
    borderRadius: 6,
    paddingVertical: hp('0.3%'), // 2
    paddingRight: wp('0.5%'), // 2
    paddingLeft: wp('3%'), // 11.5
    backgroundColor: '#00000020'
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#ffffff80'
  },

  dataContainer: {
    marginLeft: wp('5.5%'), //  20.5
    flexDirection: 'column'
  },

  name: {
    fontSize: hp('1.7%'), // 14
    color: '#000',
    fontFamily: 'Poppins_500Medium',
    marginBottom: 7 // 7
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
    // marginRight: wp('5.5%') //  20.5
  },

  icon: {
    width: wp('4.8%'), //  18
    marginRight: wp('1.3%') // 5
  },

  count: {
    fontSize: hp('1.4%'), // 12
    fontFamily: 'Poppins_400Regular',
    color: '#00000080'
  }

})

export default FeatureEvents
