
import { Button, SafeAreaView, Text, View, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from "react-native";
import * as React from 'react';
import styles from "../Styling/styles";
import { useState, useEffect } from "react";
import Weather from "../Components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Updates from "../Updates/updates";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Updatesmin from "../Updates/Updatesmin";
import PersonalTimetable from "../Timetables/personalTimetable";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { setCourse, setName, setSid } from "../redux/actions";



function Lobby1({ navigation }) {

    var [dataLoaded,setDataLoaded] =  useState(false);
    var [suds,setSuds] = useState({});
    const dispatch = useDispatch();

    const { namee, email } = useSelector(state => state.userReducer);
    let [fontsLoaded] = useFonts({
        "FredokaBold": require("../fonts/FredokaBold.ttf"),
    });

    let emaill = email;

    const path = 'users/user/buddy/'+emaill;
  
  //The function below fetches time from google
  async function fetchTime() {  

   //TODO: Use the response to create logic for dynamic greeting
   
    var URL_REGISTER = 'https://www.google.com';
    try {
      const response = await axios.get(`${URL_REGISTER}`);
      setTimee(response.headers.get('Date'));
      if (response.status !== 200) {
        console.log('Status Code: ' + response.status);
        return;
      }
    }

    catch (error) {
      console.log(error.message);
    }

  }


    const fetchAndDispatch = ( ) => {
        async function ReadData() {
            console.log(path)
            const docRef = doc(db, path);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              setSuds(docSnap.data);
            } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
            }  
          }
        ReadData();
    };



    if (!fontsLoaded && dataLoaded) {
        return <ActivityIndicator />;
    }


    return (

        <Provider store={store}>
            <View style={styles.Homepage}>
                <View style={styles.dashboardTopSection}>
                    <Text style={styles.lobbyGreeting}>
                        Greeting
                    </Text>
                </View>
                <Text style={styles.dashboardName}>{namee}</Text>
                <Pressable style={{
                                   justifyContent: 'center',
                                   alignItems: 'center'
                                  }} onLongPress={() => {navigation.navigate('Updates', {"nava": 99});
                }}>
                    <View style={styles.LobbyUpdates}>
                        <TouchableOpacity style={styles.LobbyMinButton} onPress={() => { navigation.navigate('Updates') }}><Text>Updates</Text></TouchableOpacity>
                        <Updatesmin />
                    </View>
                </Pressable>
                <View style={styles.lobbyQuick}>
                    <Text style={{
                        fontFamily: 'FredokaBold',
                        marginRight: 240,
                    }}>Quick links</Text>
                    <TouchableOpacity style={styles.lobbyQuickButton}>
                        <Text style={styles.LobbyQuickButtonText}>Academic calender</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lobbyQuickButton} onPress={() => navigation.navigate('PerT')}>
                        <Text style={styles.LobbyQuickButtonText}>Personal Timetable</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Provider>


    );
};

const stack = createNativeStackNavigator();

export default function Lobby({ navigation }) {
    // const {namee} = useSelector(state=>state.userReducer);
    return (

        <NavigationContainer independent={true}>
            <stack.Navigator>
                <stack.Screen
                    name="Lobby1"
                    component={Lobby1}
                    options={{ headerShown: false }} />
                <stack.Screen
                    name="Updates"
                    component={Updates}
                    options={{}} show={true} />
                <stack.Screen
                    name="PerT"
                    component={PersonalTimetable}
                    options={{}} />

            </stack.Navigator>
        </NavigationContainer>


    )
}


/*

New courses have to be selected each semester for the timetable

Pro features:
    Customization
    Advanced features

*/
