import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Constants from 'expo-constants'

//    -->   icons
import IconBack from '../Icons/IconBack'
import IconClose from '../Icons/IconClose'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View>
            <IconBack style={styles.iconBack} />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Invitar Contactos</Text>
      </View>
      <View>
        <IconClose style={styles.iconClose} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    paddingTop: hp('4%'), //  27.4
    paddingBottom: hp('5%'),
    paddingHorizontal: wp('6.6%') //  27~
  },

  iconBack: {
    width: wp('3%'),
    height: hp('4%') // 32
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: hp('2.7%'), // 18.2~
    marginLeft: wp('5%')
  },

  iconClose: {
    width: wp('5%'),
    height: hp('6%') // 32
  }

})

export default Header
