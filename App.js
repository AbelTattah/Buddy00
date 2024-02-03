import * as React from 'react'
import Lobby from './Screens/lobby'
import { NavigationContainer, TabRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, TouchableOpacity, View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Settings from './Screens/settings'
import Timetables from './Screens/timetables'
// Rest of the import statements
import { useFonts } from 'expo-font'
import Login from './Screens/login'
import {
  Provider,
  useSelector
} from 'react-redux'
import { store } from './redux/store'
import Register from './Screens/register'

const Stack = createNativeStackNavigator()

// The constant below allows the usage of the tab navigator
const Tab = createBottomTabNavigator()

// I am planning to nest the stack navigation below into the tab navigation in the App() function

function LobbyTitle () {
  return (
    <View>
      <Text
        style={{
          marginLeft: 30,
          fontWeight: 700,
          fontSize: 17
        }}
      >
        Lobby
      </Text>
    </View>
  )
}

function MeTitle () {
  return (
    <View>
      <Text
        style={{
          marginTop: 29,
          FontFamily: 'FredokaBold',
          marginLeft: 26,
          fontWeight: 700,
          fontSize: 23,
          color: 'white'
        }}
      >
        Timetables
      </Text>
    </View>
  )
}
function App1 ({ navigation }) {
  const [fontsLoaded] = useFonts({
    FredokaBold: require('./fonts/FredokaBold.ttf')
  })

  const { sin } = useSelector((state) => state.userReducer)

  return (
    <>
      {sin
        ? (
          <NavigationContainer independent>
            <Tab.Navigator initialRouteName='Lobby'>
              <Tab.Screen
                name='Lobby'
                component={Lobby}
                gestureEnabled
                options={{
                  headerTitle: () => <LobbyTitle />,
                  tabBarIcon: (color, size) => (
                    <Image
                      source={require('./assets/documenticon.jpeg')}
                      style={{
                        width: 25,
                        height: 25
                      }}
                    />
                  ),
                  tabBarLabelStyle: { fontSize: 14, fontFamily: 'FredokaBold' },
                  tabBarStyle: {
                    height: 80,
                    paddingBottom: 10,
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderColor: '#00f8'
                  },
                  headerShadowVisible: false,
                  headerTintColor: '#000',
                  headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    backgroundColor: '#7979FF8e'
                  }
                }}
              />

              <Tab.Screen
                component={Timetables}
                name='Timetables'
                options={{
                  headerTitle: () => (
                    <Text style={{ fontFamily: 'FredokaBold', fontSize: 20 }}>
                      Timetables
                    </Text>
                  ),
                  tabBarIcon: (color, size) => (
                    <Image
                      source={require('./assets/timetableicon.jpeg')}
                      style={{
                        width: 25,
                        height: 25
                      }}
                    />
                  ),
                  tabBarLabelStyle: { fontSize: 14, fontFamily: 'FredokaBold' },
                  tabBarStyle: {
                    height: 80,
                    paddingBottom: 10,
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderColor: '#00f8'
                  },
                  headerShadowVisible: false,
                  headerTintColor: '#000',
                  headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    backgroundColor: '#7979FF8e'
                  }
                }}
              />

              <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                  headerTitle: () => (
                    <Text style={{ fontFamily: 'FredokaBold', fontSize: 20 }}>
                      Settings
                    </Text>
                  ),
                  tabBarIcon: () => (
                    <Image
                      source={require('./assets/settingsgearicon.png')}
                      style={{
                        width: 25,
                        height: 25
                      }}
                    />
                  ),
                  tabBarLabelStyle: { fontSize: 14, fontFamily: 'FredokaBold' },
                  tabBarStyle: {
                    height: 80,
                    paddingBottom: 10,
                    backgroundColor: 'white',
                    borderTopWidth: 1,
                    borderColor: '#00f8'
                  },
                  headerShadowVisible: false,
                  headerTintColor: '#000',
                  headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                    backgroundColor: '#7979FF8e'
                  }
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
          )
        : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>You are not Logged in!</Text>
            <Button
              title='Login Screen'
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          )}
    </>
  )
}

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen
            name='App1'
            component={App1}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

/*
         TODO :
         1. Bottom Navigation     :Done
         2. Add swiping features that will enable user to navigate to other options.
         3. Make the maps component find the location of the user instantly.
*/
