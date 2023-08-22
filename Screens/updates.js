import React from "react";
import { View,Text,ScrollView,StyleSheet,StatusBar } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";


export default function Updates(re,navigation)  {

   const [data,SetData] = useState([]);
   const [loading,SetLoading] =useState(true);
   const [rel,setRel] = useState(1);
   const [ren,setRen] = useState(0);

    useEffect(() => {
        async function fetchData() {
          fetch("https://type.fit/api/quotes")
        .then((response)=>response.json())
        .then((json)=>SetData(json))
        .catch((error)=>console.log("Error"))
        .finally(()=>SetLoading(false));
        };
        fetchData();
      }, []);

 return (
  <>{re?(
        <>
          <View><Text>This is the recents page.</Text></View>
         
        </>
    ):(

    
    <View style={style.container}>
    <View 
      style={{
        flexDirection:'row',
        height:20,
        justifyContent:'space-evenly',
        width: 320,
        marginBottom:20
      }}><Text 
       style={{
        fontSize:18
       }}>What's new (99+)</Text><FontAwesomeIcon icon={faBell} color="black" size={32}/></View>
    <ScrollView contentContainerStyle={style.scrollView}>
      <Text style={style.text}>
       MATH123: The results for MATH123 first semester 2023 have been released
      </Text>
      <Text style={style.text}>
       DCIT102: Mr Abdullai Aziz Has been banned from setting exam questions
      </Text>
      <Text style={style.text}>
       FOOD111: Free food is being shared at JQB for students with GPA above 3.0
      </Text>
    </ScrollView>
    </View>
 
  
    )}</>
   

 );
 
}

const style = StyleSheet.create({
  container: {
    flex: 4,
    paddingTop: StatusBar.currentHeight,
    borderWidth:1,
    marginTop:20,
    borderRadius:40,
    height:300,
    paddingBottom:30
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
    
  },
  text: {
    padding:10,
    fontSize: 17,
    margin:10,
    backgroundColor:'#8889',
    borderRadius:30
  },
});

