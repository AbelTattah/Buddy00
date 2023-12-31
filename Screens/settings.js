
import React from 'react';
import { View,Text,Button } from 'react-native';
import { setSin } from '../redux/actions';
import { useDispatch } from 'react-redux';
import styles from '../Styling/styles';
import { TouchableOpacity } from 'react-native';


 export default function Settings({navigation}) {
 
const dispatch = useDispatch();

function Logout(){
  dispatch(setSin(false));
}

  return (
    <View style={styles.me}>
   <Text>Settings</Text>

   <TouchableOpacity style={styles.meTopButtons} onPress={()=>Logout()} title='logout'>
    <Text style={styles.meTopButtonText}>Logout</Text>
   </TouchableOpacity>
    </View>
  );
}

