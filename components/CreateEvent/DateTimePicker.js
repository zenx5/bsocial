import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import EventsContext from '../../context/Events/EventsContext'
import dayjs from 'dayjs'
// eslint-disable-next-line camelcase
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
//    -->   data parser
//  var fecha = new Date()
//  var options = {day: "2-digit", month: "long", year: "numeric"}
//  fecha.toLocaleDateString('es-ES', options)  -> "01 de julio de 2021"
//  var dateParsed = fecha.replace(/de /g, '')  -> "01 julio 2021"

//    -->   icons
import IconDate from '../Icons/IconDate'
import IconTime from '../Icons/IconTime'

const DateTimePicker = () => {
  //    -->   fonts
  const [fontsLoaded] = useFonts({ Poppins_400Regular })

  //    -->   context
  const { setStartDate, setStartTime, startDate, startTime } = useContext(EventsContext)

  //  date && time
  const [showDateTime, setShowDateTime] = useState({ date: false, time: false })

  const showDatePicker = () => setShowDateTime({ ...showDateTime, date: true })

  const onCancelDate = () => setShowDateTime({ ...showDateTime, date: false })

  const onConfirmDate = (date) => {
    setStartDate(dayjs(date).format('YYYY/MM/DD'))
    onCancelDate()
  }

  const showTimePicker = () => setShowDateTime({ ...showDateTime, time: true })

  const onCancelTime = () => setShowDateTime({ ...showDateTime, time: false })

  const onConfirmTime = (time) => {
    setStartTime(dayjs(time).format('HH:mm'))
    onCancelTime()
  }

  //    -->   on waiting for the fonts
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.dateTimeContainer}>
      {/* Date */}
      <TouchableOpacity onPress={showDatePicker} style={[styles.dateTime_inactive, startDate && styles.dateTime_active]}>
        <IconDate />
        <Text style={styles.date}>{startDate || 'Fecha'}</Text>
        <DateTimePickerModal
          isVisible={showDateTime.date}
          mode='date'
          display='default'
          onConfirm={onConfirmDate}
          onCancel={onCancelDate}
        />

      </TouchableOpacity>

      {/* Time */}
      <TouchableOpacity onPress={showTimePicker} style={[styles.dateTime_inactive, startTime && styles.dateTime_active]}>
        <IconTime />
        <Text style={styles.time}>{startTime || 'Hora'}</Text>
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
    width: wp('85.5%'), //  320.5
    height: hp('8.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%')
  },

  dateTime_inactive: {
    width: '49%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%') // 17~
  },

  dateTime_active: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000080'
  },

  date: {
    width: '100%',
    fontSize: hp('2.35%'), //  16
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    paddingHorizontal: wp('6%')
  },

  time: {
    width: '100%',
    fontSize: hp('2.35%'), //  16
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    textAlign: 'left',
    paddingLeft: wp('8%')
  }
})
