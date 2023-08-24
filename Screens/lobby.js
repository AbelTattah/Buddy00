
import { Button, Text, View, ScrollView,TouchableOpacity } from "react-native";
import * as React from 'react';
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import Weather from "../Components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Updates from "../Updates/updates";
 




export default function Lobby ({navigation}) {

    return (
<View style={styles.Homepage}>

    <View style={styles.dashboardTopSection}>
        <Text style={styles.lobbyGreeting}>
           Good morning,
        </Text>
    </View>

        <Text style={styles.dashboardName}>Kobina</Text>

    <View style={styles.dashboardAvatar}>
        <FontAwesomeIcon icon={faUser} size={90} color="white"/>
    </View>

    <View style={styles.lobbyWeather}>
     <Weather />
    </View>
       
    <View style={styles.lobbyMiniUpdates}>
      <Updates show={false} /> 
    </View>

  </View>

    );
};

