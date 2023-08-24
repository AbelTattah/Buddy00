import React from "react";
import { View,Text,ScrollView,StyleSheet,StatusBar } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";



export default function Updates(props,{navigation})  {

 return (
  <>
 {props.show?(
    <>
      <View><Text>This is the updates page.</Text></View>
      <View><Text>This is page will be a mini social media app for students</Text></View>
     
    </>
):(


<View style={styles.container1}>
<View 
  style={styles.lobbyMiniUpdatesTop}><Text 
   style={{
    fontSize:18
   }}>What's new (99+)</Text><FontAwesomeIcon icon={faBell} color="black" size={32}/></View>
<ScrollView contentContainerStyle={styles.scrollView1}>
  <Text style={styles.text1}>
   MATH123: The results for MATH123 first semester 2023 have been released
  </Text>
  <Text style={styles.text1}>
   DCIT102: Mr Abdullai Aziz Has been banned from setting exam questions
  </Text>
  <Text style={styles.text1}>
   FOOD111: Free food is being shared at JQB for students with GPA above 3.0
  </Text>
</ScrollView>
</View>


)}
  </>
   

 );
 
}


