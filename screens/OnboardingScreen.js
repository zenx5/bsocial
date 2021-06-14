import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFonts, Poppins_200ExtraLight, Poppins_500Medium } from '@expo-google-fonts/poppins'  // eslint-disable-line
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

//  icons
import IconNext from '../components/Icons/IconNext'

const slides = [
  {
    key: 'one',
    title: 'Fiestas Privadas en casa',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    background: require('../assets/onboarding-1.png')
  },
  {
    key: 'two',
    title: 'Eventos Empresariales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    background: require('../assets/onboarding-2.png')
  },
  {
    key: 'three',
    title: 'DESPEDIDAS DE SOLTEROS',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    background: require('../assets/onboarding-3.png')
  }
]

const Slide = ({ item }) => {
  const logo = require('../assets/logobsocial.png')
  return (
    <ImageBackground style={styles.background} source={item.background}>
      <StatusBar hidden />
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const DoneButtom = () => {
  return (
    <View style={styles.doneButtom}>
      <IconNext stroke='#fff' />
    </View>
  )
}

const OnboardingScreen = ({ navigation }) => {
  //  fonts
  const [fontsLoaded] = useFonts({ Poppins_200ExtraLight, Poppins_500Medium })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => <Slide item={item} />}
        style={styles.slides}
        dotStyle={{ backgroundColor: '#FFFFFF66' }}
        activeDotStyle={{ backgroundColor: '#D6BB5A' }}
        showNextButton={false}
        renderDoneButton={DoneButtom}
        onDone={() => navigation.navigate('Login')}
      />
  )
}

const styles = StyleSheet.create({
  slides: {
    flex: 1,
  },

  background: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'                                                         
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  logo: {
    resizeMode: 'center',
    width: '35%',
    height: hp('27%') // 199~~
  },

  textContainer: {
    alignItems: 'center'
  },

  title: {
    width: wp('75%'),
    fontSize: hp('3.8%'), //  28
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    marginBottom: hp('3.4%'), //  25~~
    flexWrap: 'wrap',
    fontFamily: 'Poppins_500Medium'
  },

  text: {
    width: wp('70%'),
    fontSize: hp('1.9%'), //  14~~
    textAlign: 'center',
    color: '#F8E8B0',
    flexWrap: 'wrap',
    fontFamily: 'Poppins_200ExtraLight'

  },

  doneButtom: {
    width: 20,
    height: 20,
    marginRight: 10
  }
})

export default OnboardingScreen
