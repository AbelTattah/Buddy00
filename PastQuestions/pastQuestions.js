import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import TimetableComp from '../Components/timetable'

import styles from '../Styling/styles'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../redux/store'
import { setCurrentCourse } from '../redux/actions'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import PqRender from './pqRender'
import { useFonts } from 'expo-font'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
/*

This is the page that displays the past questions for the user to select from

1. The user enters the course code of the past question he/she wants to view
2. The input of the user is matched to particular array containing the api enpoints
of the course code he or she entered.
3. This array containing the endpoints is obtained from the api when the past question is searched for
4. The each endpioint is matched to a state which is used to render the pdf

The list of past questions relating to that particular course will be displayed in a list when the
steps above are completed.

*/

const Stack = createNativeStackNavigator()

// Load fonts
const PastQuestions = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    FredokaBold: require('../fonts/FredokaBold.ttf')
  })

  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [endpoints, setEndpoints] = useState([])

  // Get endpoints for past Question pdfs from api
  async function getEndpoints (couseCode) {
    try {
      console.log(code)
      const response = await axios.get(
        `https://buddy-backend-ti17.onrender.com/pasco/get/${code}`
      )
      setEndpoints(response.data.endPoints)
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  // Search for past questions

  const searchHandler = () => {
    setLoading(true)
    getEndpoints()
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }

  // Navigate to pdf view
  const navigationHandler = () => {
    setTimeout(() => {
      navigation.navigate('PQ')
    }, 1000)
  }

  const Dispatch = useDispatch()

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#fff'
      }}
    >
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 20,
          height: 60,
          width: 300,
          marginBottom: 20,
          padding: 10
        }}
        placeholder='Enter course Code eg. MATH123'
        onChangeText={(text) => setCode(text)}
      />
      <View>
        <View>
          <TouchableOpacity
            style={{
              width: 70,
              height: 30,
              position: 'absolute',
              top: -65,
              display: 'flex',
              justifyContent: 'center',
              left: 220,
              backgroundColor: '#7979FF8e',
              zIndex: 1
            }}
            onPress={() => {
              searchHandler()
            }}
          >
            <Text
              style={{
                textAlign: 'center'
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
          <>
            {loading
              ? (
                <View
                  style={{
                    height: 300,
                    width: 300,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <ActivityIndicator />
                </View>
                )
              : (
                <>
                  <ScrollView
                    style={{
                      height: 300,
                      width: 300,
                      backgroundColor: '#fff',
                      borderRadius: 20,
                      padding: 10
                    }}
                  >
                    {endpoints.map((endpoint) => (
                      <TouchableOpacity
                        style={styles.meTopButtons}
                        onPress={() => {
                          Dispatch(setCurrentCourse(endpoint))
                          navigationHandler()
                        }}
                      >
                        <Text
                          style={{
                            textAlign: 'center'
                          }}
                        >
                          {endpoint}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </>
                )}
          </>
        </View>
      </View>
    </View>
  )
}

const PQNav = ({ navigation }) => {
  return (
    <Provider store={store}>
      <NavigationContainer independent>
        <Stack.Navigator>
          <Stack.Screen name='Past Questions' component={PastQuestions} />
          <Stack.Screen
            name='PQ'
            options={{
              title: 'Past Question'
            }}
            component={PqRender}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default PQNav
