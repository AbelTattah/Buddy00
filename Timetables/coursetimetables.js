/*

Steps for displaying timetables for a specific student
1. Obtain course codes and respective links in front end for now
2. Validate user's courses for the semester and render the timetables accordingly
3. Make a page for recording user's courses for the semester

*/

import { View, Text, TouchableOpacity } from 'react-native' // Importing components from react-native
import { createNativeStackNavigator } from '@react-navigation/native-stack' // Importing the createNativeStackNavigator from @react-navigation/stack
import styles from '../Styling/styles' // Importing the styles from the styles file
import { NavigationContainer } from '@react-navigation/native' // Importing the NavigationContainer from @react-navigation/native
import PdfComp from '../Components/pdf' // Importing the timetable component

// Create a stack navigator
const Stack = createNativeStackNavigator()

// Main page for the timetables
const Main = ({ navigation }) => {
  return (
    <View style={styles.me}>
      <View style={styles.meTopSection}>
        <View style={styles.meTopButtonView}>
          <TouchableOpacity
            style={styles.meTopButtons}
            onPress={() => navigation.navigate('Computer')}
          >
            <Text style={styles.meTopButtonText}>Computer Science</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.meTopButtons}>
            <Text
              style={styles.meTopButtonText}
              onPress={() => navigation.navigate('Mathematics')}
            >
              Mathematics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.meTopButtons}
            onPress={() => navigation.navigate('Statistics')}
          >
            <Text style={styles.meTopButtonText}>Statistics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const ComputerScience = ({ navigation }) => {
  return (
    <PdfComp url='https://buddy-backend-ti17.onrender.com/pdf/cstimetable' />
  )
}

const Mathematics = ({ navigation }) => {
  return (
    <PdfComp url='https://buddy-backend-ti17.onrender.com/pdf/mathtimetable' />
  )
}

const Statistics = ({ navigation }) => {
  return (
    <PdfComp url='https://buddy-backend-ti17.onrender.com/pdf/statisticstimetable' />
  )
}

export default function CourseTimetables () {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen name='Main'
        options={{ headerTitle: 'Course Timetables'}}
         component={Main} />
        <Stack.Screen name='Computer' component={ComputerScience} />
        <Stack.Screen name='Statistics' component={Statistics} />
        <Stack.Screen name='Mathematics' component={Mathematics} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
