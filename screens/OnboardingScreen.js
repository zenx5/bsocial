import React from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useFonts, Poppins_200ExtraLight, Poppins_500Medium } from '@expo-google-fonts/poppins'  // eslint-disable-line
import AppLoading from 'expo-app-loading'


//  icons
import IconNext from '../components/Icons/IconNext'

const slides = [
  {
    key: 'one',
    title: 'Fiestas Privadas en casa',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    slide: require('../assets/onboarding-1.png'),
    image: require('../assets/logobsocial.png')
  },
  {
    key: 'two',
    title: 'Eventos Empresariales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    slide: require('../assets/onboarding-2.png'),
    image: require('../assets/logobsocial.png')
  },
  {
    key: 'three',
    title: 'DESPEDIDAS DE SOLTEROS',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    slide: require('../assets/onboarding-3.png'),
    image: require('../assets/logobsocial.png')
  }
]

const renderItem = ({ item }) => {
  return (
    <ImageBackground source={item.slide} style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View>
        <View style={styles.container_title}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.container_text}>
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
      renderItem={renderItem}
      dotStyle={{ backgroundColor: '#FFFFFF66' }}
      activeDotStyle={{ backgroundColor: '#D6BB5A' }}
      showNextButton={false}
      renderDoneButton={DoneButtom}
      onDone={() => navigation.navigate('Login')}
    />
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    resizeMode: 'cover'
  },

  image: {
    resizeMode: 'center',
    width: '35%',
    height: hp('27%') // 199~~
  },

  container_title: {
    width: '70%'
  },

  container_text: {
    width: '65%'
  },

  title: {
    fontSize: hp('3.8%'), //  28
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    marginBottom: hp('3.4%'), //  25~~
    flexWrap: 'wrap',
    fontFamily: 'Poppins_500Medium'    
  },

  text: {
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
