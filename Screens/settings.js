
import React from 'react';
import { View,Text,Button } from 'react-native';
import { setSin } from '../redux/actions';
import { useDispatch } from 'react-redux';


 export default function Settings({navigation}) {
 
const dispatch = useDispatch();

function Logout(){
  dispatch(setSin(false));
}

  return (
    <View>
   <Text>Settings</Text>
   <Button onPress={()=>Logout()} title='logout'></Button>
    </View>
  );
}

