import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//  icon
import IconBack from '../../components/Icons/IconBack'

const ListEventsHeader = (props) => {
  const goBack = () => props.navigation.goBack()

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <IconBack />
      </TouchableOpacity>
      <Text style={styles.header_title}>B S O C I A L</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11
  },

  header_title: {
    width: '100%',
    textAlign: 'center'
  }
})

export default ListEventsHeader
