import React from "react";
import { View,Text,ScrollView,StyleSheet,StatusBar,Pressable,SafeAreaView } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Button } from "react-native";



export default function Updatesmin({route,navigation})  {

  const [data,setData] = useState(['Haha']);
  const [ld ,setLd] = useState(true);
  const [postt,setPostt] = useState('');
  const navigate = useNavigation; 
  const [nav,setNav] = useState(true);
  


  //  let [fontsLoaded] = useFonts({
   //   "FredokaBold":require("../fonts/FredokaBold.ttf"),
    //  "FredokaLight":require("../fonts/static/Fredoka-Light.ttf")
  //});

 // if (!fontsLoaded) {
  //  return(<ActivityIndicator />)
 // }












  


 return (
  <Text>
    Data not fetched !
  </Text>
)
};

const style = StyleSheet.create({
  container: {
    width:'120',
    height:200,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    height:170,
 marginBottom:70
  },
  text: {
    fontSize: 42,
  }});
