import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import * as React from 'react'
import styles from '../Styling/styles'
import { useState, useEffect } from 'react'
import Updates from '../Updates/updates'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Updatesmin from '../Updates/Updatesmin'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from '../redux/store'

import CourseTimetables from '../Timetables/coursetimetables'
import PQNav from '../PastQuestions/pastQuestions'

function Lobby1 ({ navigation }) {

  return (
    <Provider store={store}>
      <View style={styles.Homepage}>
        <View style={styles.dashboardTopSection}>
          <Text style={styles.lobbyGreeting}>Greeting</Text>
        </View>
        <Text style={styles.dashboardName}>{namee}</Text>
        <Pressable
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onLongPress={() => {
            navigation.navigate('Updates', { nava: 99 })
          }}
        >
          <View style={styles.LobbyUpdates}>
            <TouchableOpacity
              style={styles.LobbyMinButton}
              onPress={() => {
                navigation.navigate('Updates')
              }}
            >
              <Text>Updates</Text>
            </TouchableOpacity>
            <Updatesmin />
          </View>
        </Pressable>
        <View style={styles.lobbyQuick}>
          <TouchableOpacity style={styles.lobbyQuickButton}>
            <Text
              style={styles.LobbyQuickButtonText}
              onPress={() => {
                navigation.navigate('ttables')
              }}
            >
              Timetables
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lobbyQuickButton0}
            onPress={() => navigation.navigate('PQ')}
          >
            <Text style={styles.LobbyQuickButtonText}>PastQuestions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  )
}

const stack = createNativeStackNavigator()

export default function Lobby ({ navigation }) {
  // const {namee} = useSelector(state=>state.userReducer);
  return (
    <NavigationContainer independent>
      <stack.Navigator>
        <stack.Screen
          name='Lobby1'
          component={Lobby1}
          options={{ headerShown: false }}
        />
        <stack.Screen name='Updates' component={Updates} options={{}} show />
        <stack.Screen
          name='ttables'
          component={CourseTimetables}
          options={{
            title: 'Timetables'
          }}
        />
        <stack.Screen name='PQ' component={PQNav} options={{}} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

/*

New courses have to be selected each semester for the timetable

*/
