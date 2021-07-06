import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'

//  icons
import IconClose from '../Icons/IconClose'

const UpcomingEventsSettings = ({ showSettings, setShowSettings }) => {
  const onPress = () => setShowSettings(false)

  return (
    <Modal
      transparent
    >
      <View style={styles.modal}>
        {showSettings ? <StatusBar backgroundColor='#00000045' /> : null}

        <View style={styles.modalBody}>

          <Text>Settings</Text>
          {/* close button */}
          <TouchableOpacity style={styles.iconClose_Container} onPress={onPress}>
            <IconClose style={styles.iconClose} />
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  )
}

export default UpcomingEventsSettings

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalBody: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10
  },

  iconClose_Container: {
    position: 'absolute',
    top: 10,
    right: 10
  },

  iconClose: {
    width: wp('4%'), // 20.57
    height: hp('2.5%') // 20.57
  }
})
