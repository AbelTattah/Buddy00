
import { Button, SafeAreaView,Text, View, ScrollView,TouchableOpacity,Pressable, ActivityIndicator } from "react-native";
import * as React from 'react';
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
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


 function Lobby1 ({navigation}) {
let [fontsLoaded] = useFonts({
    "FredokaBold":require("../fonts/FredokaBold.ttf"),
});

if (!fontsLoaded){
    return <ActivityIndicator />;
}



//const {namee} = useSelector(state=>state.userReducer);

    return (
        
        <>
        <View style={styles.Homepage}>

    <View style={styles.dashboardTopSection}>

        <Text style={styles.lobbyGreeting}>
        Good Morning
        </Text>
    
    </View>

        <Text style={styles.dashboardName}>Kobina</Text>

   

   
    <Pressable style={{
        justifyContent:'center',
        alignItems:'center'
    }} onLongPress={() =>{ navigation.navigate('Updates',{
        "nava":99
    });}}>
    <View style={styles.LobbyUpdates}>
    <TouchableOpacity style={styles.LobbyMinButton} onPress={() =>{ navigation.navigate('Updates')}}><Text>Updates</Text></TouchableOpacity>
    <Updatesmin />
     
    </View>
    </Pressable>
    <View style = {styles.lobbyQuick}>
       <Text style={{
        fontFamily:'FredokaBold',
        marginRight:240,
       }}>Quick links</Text>
       <TouchableOpacity style={styles.lobbyQuickButton}>
        <Text style={styles.LobbyQuickButtonText}>Academic calender</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.lobbyQuickButton} onPress={()=>navigation.navigate('PerT')}>
        <Text style={styles.LobbyQuickButtonText}>Personal Timetable</Text>
       </TouchableOpacity>
  </View>
  </View>
 
  </>


    );
};

const stack = createNativeStackNavigator();

export default function Lobby({navigation}){
   // const {namee} = useSelector(state=>state.userReducer);
    return(
        
        <NavigationContainer independent={true}>
        <stack.Navigator>
            <stack.Screen
            name = "Lobby1"
            component={Lobby1}
            options={{headerShown:false}} />
             <stack.Screen
            name = "Updates"
            component={Updates}
            options={{}} show={true}/>
            <stack.Screen
            name = "PerT"
            component={PersonalTimetable}
            options={{}} />
            
        </stack.Navigator>
        </NavigationContainer>
     
       
    )
}

