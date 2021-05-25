import React from 'react'
import Provaiders from './navigation'

// //  views
// import Home from './screens/Home'
// import Contacts from './screens/Contacts'
// import ListEvents from './screens/ListEvents'
// import Settings from './screens/Settings'
// import CreateEventStep1 from './screens/CreateEventStep1'
// import CreateEventStep2 from './screens/CreateEventStep2'
// import CreateEventStep3 from './screens/CreateEventStep3'

// //  icons
// import IconsSwitching from './components/Icons/IconsSwitching'

// const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => (
//         {
//           tabBarIcon: ({ focused }) => {
//             let iconName
//             if (route.name === 'Home') {
//               iconName = focused ? 'HomeOn' : 'HomeOff'
//             } else if (route.name === 'Contacts') {
//               iconName = focused ? 'ContactOn' : 'ContactOff'
//             } else if (route.name === 'List') {
//               iconName = focused ? 'ListOn' : 'ListOff'
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'SettingOn' : 'SettingOff'
//             }

//             return <IconsSwitching name={iconName} />
//           }
//         }
//       )}
//     >
//       <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: () => null }} />
//       <Tab.Screen name='Contacts' component={Contacts} options={{ tabBarLabel: () => null }} />
//       <Tab.Screen name='List' component={ListEvents} options={{ tabBarLabel: () => null }} />
//       <Tab.Screen name='Settings' component={Settings} options={{ tabBarLabel: () => null }} />
//     </Tab.Navigator>
//   )
// }

// const Step1 = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Create Event Step 1' component={CreateEventStep1} />
//     </Stack.Navigator>
//   )
// }

// const Step2 = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Create Event Step 2' component={CreateEventStep2} />
//     </Stack.Navigator>
//   )
// }

export default function App () {
  return <Provaiders />
}
