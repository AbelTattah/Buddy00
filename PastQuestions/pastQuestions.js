import { View, Text, TextInput,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import TimetableComp from '../Components/timetable';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Styling/styles';
import { Provider,useDispatch} from 'react-redux';
import { store } from '../redux/store';
import { Dispatch } from 'react';
import { setCurrentCourse } from '../redux/actions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import pqRender from './pqRender';
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


const Stack = createNativeStackNavigator();

//Load fonts
const pastQuestions = () => {
  var [fontsLoaded] = useFonts({
    "FredokaBold":require("../fonts/FredokaBold.ttf"),
  });

  var [code,setCode] = useState("");
  var [loading,setLoading] = useState(false);
  var [endpoints,setEndpoints] = useState([{}]);

//Get endpoints for past Question pdfs from api
  function getEndpoints(couseCode) {
    try {
        const response =  axios.get(`https://  ${couseCode}`);
        setEndpoints(response.data);
    } catch (error) {
        console.log(error.message);
    }
  }


  // Search for past questions

  const searchHandler = () => {
    setLoading(true);
    getEndpoints();
    setTimeout(()=>{setLoading(false)},3000);
  } 
  
    //Navigate to pdf view
  const navigationHandler = () => {
    setTimeout(()=>{navigation.navigate('PQ')},1000);
  }

  return (
    <Provider store={store}>
    <View style={styles.me}>
    <View style={styles.meTopSection}>
       <View style={styles.meTopButtonView}>
         <TextInput placeholder='Enter course Code eg. MATH123' onChangeText={(text)=>setCode(code)}></TextInput>
         <TouchableOpacity style={styles.meTopButtons} onPress={()=>{}}><Text>Search</Text></TouchableOpacity>
         {(loading)?(<>
         <ActivityIndicator />
         </>):(<>
             <ScrollView>
                {
                    endpoints.map((endpoint)=>(
                        <TouchableOpacity style={styles.meMiddleButtons} onPress={()=>{Dispatch(setCurrentCourse(endpoint));navigationHandler();}}>
                        <Text>{endpoint}</Text>
                        </TouchableOpacity>
                    ))
                }
             </ScrollView>
         </>)}
       </View>
    </View>
</View>
</Provider>
  )
}


const PQNav = ({navigation}) => {
    return (
         <Provider store={store} >
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Past Questions" component={PQNav} />
                <Stack.Screen name="PQ" component={pqRender} />
            </Stack.Navigator>
        </NavigationContainer>
         </Provider>
    )
}


export default PQNav