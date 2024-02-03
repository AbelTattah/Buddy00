import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { useSelector } from 'react-redux'
import * as Location from 'expo-location'

import styles from '../Styling/styles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Direction from './direction'

import MapViewDirections from 'react-native-maps-directions'
import { width } from '@fortawesome/free-solid-svg-icons/faRepeat'

const Stack = createNativeStackNavigator()

function Nav1 ({ navigation }) {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      const { loc } = await Location.enableNetworkProviderAsync()

      const location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  const origin = { latitude: 5.65199, longitude: -0.18773 }
  const destination = { latitude: 5.64635, longitude: -0.18876 }

  return (
    <>
      <View />

      <View style={stylese.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            longitude: -0.18739,
            latitude: 5.65011,
            longitudeDelta: 0.01,
            latitudeDelta: 0.0
          }}
          showsCompass
          style={stylese.map}
          showsUserLocation
          zoomEnabled
          rotateEnabled
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            strokeWidth={3}
            strokeColor='hotpink'
            apikey='AIzaSyCKNI4L9etwS9wFMsSLa5qczJcmyyPnCbw'
          />
          <Marker
            coordinate={{
              latitude: 5.65178,
              longitude: -0.18707
            }}
          />
        </MapView>

        <View>
          <Button title='Directions' onPress={() => setIsOpen(true)} />
        </View>
        <Modal
          visible={isOpen}
          animationType='slide'
          onRequestClose={() => {
            setIsOpen(false)
          }}
          transparent
        >
          <View style={styles.directionModal}>
            <Button
              title='Get Direction'
              onPress={() => {
                setIsOpen(false)
              }}
            />
          </View>
        </Modal>
      </View>
    </>
  )
}

export default function Nav ({ navigation }) {
  return (
    <>
      <NavigationContainer independent>
        <Stack.Navigator>
          <Stack.Screen
            name='Nav1'
            component={Nav1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='direction'
            component={Direction}
            options={{
              headerShown: false,
              mode: 'modal',
              headerMode: 'none',
              cardStyle: {
                backgroundColor: 'transparent',
                opacity: 0.99
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const stylese = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height: 540,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

// M
