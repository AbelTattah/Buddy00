import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
  SafeAreaView,
  FlatList,
  Image
  , ActivityIndicator, TouchableOpacity
} from 'react-native'
import styles from '../Styling/styles'

import { store } from '../redux/store'
import { Provider, useSelector } from 'react-redux'

import axios from 'axios'

export default function Updatesmin ({ route, navigation }) {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [ld, setLd] = useState(false)
  const [postt, setPostt] = useState('')
  const [timee, setTimee] = useState('')
  const [nava, setNava] = useState(true)
  const [lddd, setLddd] = useState(true)
  const [rarr, setRarr] = useState({
    Update: ['Hello world']
  })
  const [sarr, setSarr] = useState([])
  const sudo = []
  const [isSudo, setIsSudo] = useState(false)
  let parr
  let parr1
  const { sidd } = useSelector((state) => state.userReducer)
  const Iddd = ''
  const iddd = ''
  const senderIDD = ''

  // The function below extracts the user's data from db object
  function filterbyid (array, sid) {
    return array.filter((obj) => obj.SID == sid)
  }

  // The function below fetches data from the update reciever's db and extracts the user's data from db object
  async function GetUserRecievedUpdates () {
    try {
      const response = await axios.get(
        'https://buddy-backend-ti17.onrender.com/update/updateR'
      )
      console.log('Reciever data has been fetched')
      setData(response.data)
      setRarr(filterbyid(data, sidd))
    } catch (error) {
      console.error(error)
    }
  }

  // The function below fetches data from the update sender's db
  async function GetUserSentUpdates () {
    try {
      const response = await axios.get(
        'https://buddy-backend-ti17.onrender.com/update/updateS'
      )
      console.log('Sender data has been fetched')
      setData1(response.data)
      setSarr(filterbyid(data1, sidd))
    } catch (error) {
      console.error(error)
    }
  }

  // Check whether user is a sudo user

  // The function below fetches time from google
  async function fetchTime () {
    const URL_REGISTER = 'https://www.google.com'
    try {
      const response = await axios.get(`${URL_REGISTER}`)
      setTimee(response.headers.get('Date'))
      if (response.status !== 200) {
        console.log('Status Code: ' + response.status)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // The function below is used to send updates
  // One copy of the update is stored in the sender's database whiles all recipients recieve the update in their database

  const [selected, setSelected] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null) // Store the array index in a variable

  const handleLongPress = (selectedIndex) => {
    setSelected(!selected)
    setSelectedIndex(selectedIndex) // Update the selectedIndex variable
  }

  const handlePress = (selectedIndex) => {
    setSelected(!selected)
    // Update the selectedIndex variable
    setSelectedIndex(null)
  }

  return (
    <Provider store={store}>
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 100
          }}
        >
          {ld
            ? (
              <>
                <Text>An error occured</Text>
              </>
              )
            : (
              <>
                <Text> New(99+) Read(5)</Text>
                <SafeAreaView style={style.flat}>
                  {lddd
                    ? (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center'
                        }}
                      >
                        <Text>An error occured</Text>

                      </View>
                      )
                    : (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 350,
                          height: 150,
                          paddingTop: 170
                        }}
                      >
                        <Text
                          style={{
                            marginRight: 260
                          }}
                        >
                          Latest
                        </Text>

                        <FlatList
                          style={{
                            height: 150
                          }}
                          data={rarr[0].Update.reverse()}
                          renderItem={({ item, index }) => {
                            return (
                              <TouchableOpacity
                                style={{
                                  backgroundColor: selected ? '#9999FF' : '#9999',
                                  margin: 10,
                                  width: 270,

                                  padding: 14,
                                  borderRadius: 10
                                }}
                              >
                                <Text>{item}</Text>
                              </TouchableOpacity>
                            )
                          }}
                        />
                      </View>
                      )}
                </SafeAreaView>
              </>
              )}
        </View>
      </SafeAreaView>
    </Provider>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  flat: {
    height: 450,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    height: 200,
    width: 200,
    marginBottom: 50
  },
  text: {
    fontSize: 42
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})
