
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


 function Lobby1 ({navigation}) {
let [fontsLoaded] = useFonts({
    "FredokaBold":require("../fonts/FredokaBold.ttf"),
});

if (!fontsLoaded){
    return <ActivityIndicator />;
}



//const {namee} = useSelector(state=>state.userReducer);

    return (
        
        <SafeAreaView>
        <View style={styles.Homepage}>

    <View style={styles.dashboardTopSection}>

        <Text style={styles.lobbyGreeting}>
    
        </Text>
    
    </View>

        <Text style={styles.dashboardName}>Kobina</Text>

    <View style={styles.dashboardAvatar}>
        <FontAwesomeIcon icon={faUser} size={90} color="white"/>
    </View>

    <View style={styles.lobbyWeather}>
     <Weather />
    </View>
    <Pressable style={{
        justifyContent:'center',
        alignItems:'center'
    }} onLongPress={() =>{ navigation.navigate('Updates',{
        "nava":99
    });}}>
    <View style={styles.LobbyUpdates}>
    <Updatesmin />
     
    </View>
    </Pressable>

  </View>
  </SafeAreaView>


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
            
        </stack.Navigator>
        </NavigationContainer>
     
       
    )
}

