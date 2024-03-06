import React from 'react' // Importing components from react
import { View, Text, TouchableOpacity } from 'react-native' // Importing components from react-native
import { setSin } from '../redux/actions' // Importing the setSin action from the redux actions
import { useDispatch } from 'react-redux' // Importing the useDispatch component from react-redux
import styles from '../Styling/styles' // Importing the styles from the styles file

// Settings page
export default function Settings ({ navigation }) {
  // Redux dispatch
  const dispatch = useDispatch()
  

  // Logout function
  function Logout () {
    dispatch(setSin(false))
  }
  

  // Render the page
  return (
    <View style={styles.me}>
      <TouchableOpacity
        style={styles.meTopButtons}
        onPress={() => Logout()}
        title='logout'
      >
        <Text style={styles.meTopButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
