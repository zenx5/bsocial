import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//    -->   icons
import IconDate from '../Icons/IconDate'
import IconTime from '../Icons/IconTime'

const DateTimePicker = () => {
  //  fonts
  useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //  create event data
  const [eventData, setEventData] = useState({
    date: null,
    time: null,
    eventName: '',
    description: '',
    image: null
  })

  //  date && time
  const [showDateTime, setShowDateTime] = useState({ date: false, time: false })

  const showDatePicker = () => setShowDateTime({ ...showDateTime, date: true })

  const onCancelDate = () => setShowDateTime({ ...showDateTime, date: false })

  const onConfirmDate = (date) => {
    setEventData({ ...eventData, date: date.toLocaleDateString() })
    onCancelDate()
  }

  const showTimePicker = () => setShowDateTime({ ...showDateTime, time: true })

  const onCancelTime = () => setShowDateTime({ ...showDateTime, time: false })

  const onConfirmTime = (time) => {
    setEventData({ ...eventData, time: time.toLocaleTimeString().slice(0, 5) })
    onCancelTime()
  }

  console.log(eventData.date)
  console.log(eventData.time)

  return (
    <View style={styles.dateTimeContainer}>
      {/* Date */}
      <TouchableOpacity onPress={showDatePicker} style={styles.dateTime}>
        <IconDate />
        <Text style={styles.inputText}>{eventData.date ? eventData.date : 'Fecha'}</Text>
        <DateTimePickerModal
          isVisible={showDateTime.date}
          mode='date'
          display='default'
          onConfirm={onConfirmDate}
          onCancel={onCancelDate}
        />

      </TouchableOpacity>

      {/* Time */}
      <TouchableOpacity onPress={showTimePicker} style={styles.dateTime}>
        <IconTime />
        <Text style={styles.inputText}>{eventData.time ? eventData.time : 'Hora'}</Text>
        <DateTimePickerModal
          isVisible={showDateTime.time}
          mode='time'
          display='default'
          onConfirm={onConfirmTime}
          onCancel={onCancelTime}
        />
      </TouchableOpacity>
    </View>
  )
}

export default DateTimePicker

const styles = StyleSheet.create({
  dateTimeContainer: {
    width: '100%',
    height: hp('7%'), //  48
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('6.6%'), //  27~
    marginBottom: hp('2.5%') // 17.1

  },

  dateTime: {
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%'), // 17~
    paddingRight: wp('13%')
  }
})
