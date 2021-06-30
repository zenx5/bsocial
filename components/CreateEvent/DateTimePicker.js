import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'  //  eslint-disable-line
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import EventsContext from '../../context/Events/EventsContext'

//    -->   icons
import IconDate from '../Icons/IconDate'
import IconTime from '../Icons/IconTime'

const DateTimePicker = () => {
  //  fonts
  useFonts({ Poppins_300Light, Poppins_400Regular, Poppins_700Bold })

  //    -->   context
  const { setDate, setTime, date, time } = useContext(EventsContext)

  //  date && time
  const [showDateTime, setShowDateTime] = useState({ date: false, time: false })

  const showDatePicker = () => setShowDateTime({ ...showDateTime, date: true })

  const onCancelDate = () => setShowDateTime({ ...showDateTime, date: false })

  const onConfirmDate = (date) => {
    setDate(date.toLocaleDateString())
    onCancelDate()
  }

  const showTimePicker = () => setShowDateTime({ ...showDateTime, time: true })

  const onCancelTime = () => setShowDateTime({ ...showDateTime, time: false })

  const onConfirmTime = (time) => {
    setTime(time.toLocaleTimeString().slice(0, 5))
    onCancelTime()
  }

  return (
    <View style={styles.dateTimeContainer}>
      {/* Date */}
      <TouchableOpacity onPress={showDatePicker} style={[styles.dateTime_inactive, date && styles.dateTime_active]}>
        <IconDate />
        <Text style={styles.inputText}>{date || 'Fecha'}</Text>
        <DateTimePickerModal
          isVisible={showDateTime.date}
          mode='date'
          display='default'
          onConfirm={onConfirmDate}
          onCancel={onCancelDate}
        />

      </TouchableOpacity>

      {/* Time */}
      <TouchableOpacity onPress={showTimePicker} style={[styles.dateTime_inactive, time && styles.dateTime_active]}>
        <IconTime />
        <Text style={styles.inputText}>{time || 'Hora'}</Text>
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

  dateTime_inactive: {
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%'), // 17~
    paddingRight: wp('13%')
  },

  dateTime_active: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000080'
  }
})
