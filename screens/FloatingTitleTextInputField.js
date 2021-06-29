import React, { useRef, useState } from 'react'
import { View, Animated, StyleSheet, TextInput } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const FloatingTitleTextInputField = ({
  attrName,
  title,
  value,
  updateData,
  keyboardType = 'default',
  titleActiveSize = 11.5,
  titleInactiveSize = 15,
  titleActiveFont = '',
  titleInactiveFont = '',
  titleActiveColor = '#000',
  titleInactiveColor = 'dimgrey',
  style = {},
  otherTextInputProps = {}
}) => {
  const [isFieldActive, setIsFieldActive] = useState(false)

  const position = useRef(new Animated.Value(value ? 1 : 0)).current

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true)

      Animated
        .timing(position, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true
        })
        .start()
    }
  }

  const handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false)

      Animated
        .timing(position, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true
        })
        .start()
    }
  }

  const onChangeText = (updatedValue) => {
    updateData(attrName, updatedValue)
  }

  const returnAnimatedTitleStyles = () => {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 4]
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInactiveSize,
      fontFamily: isFieldActive ? titleActiveFont : titleInactiveFont,
      color: isFieldActive ? titleActiveColor : titleInactiveColor
    }
  }

  return (
    <View style={Styles.container}>
      <Animated.Text style={[Styles.titleStyles, returnAnimatedTitleStyles()]}>
        {title}
      </Animated.Text>
      <TextInput
        value={value}
        style={[Styles.textInput, style, isFieldActive && Styles.textInputActive]}
        underlineColorAndroid='transparent'
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...otherTextInputProps}
      />
    </View>
  )
}

export default FloatingTitleTextInputField

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },

  titleStyles: {
    position: 'absolute',
    left: '11%' // 17~
  },

  textInput: {
    width: wp('85.5%'), //  320.5
    backgroundColor: '#00000014',
    borderRadius: 10,
    paddingLeft: wp('4.18%') // 17~
  },

  textInputActive: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#00000080'
  }
})
