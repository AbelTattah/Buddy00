import React from "react";
import { View,Text,ScrollView,StyleSheet,StatusBar } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { ActivityIndicator } from "react-native";





export default function Updates(props,{navigation})  {

  const [data,setData] = useState(['Haha']);
  const [ld ,setLd] = useState(true);
  const [math,setMath] = useState('');

  useEffect(() => {
      async function fetchDataa() {
          fetch("https://abelkonka.onrender.com/studentupdates")
          .then((response)=>response.json())
          .then((json) => setData(json))
          .then(()=>console.log(
              data[1].Update
          ))
          .catch((error)=>console.log())
          .finally(()=>setLd(false));
      };
      fetchDataa();
    }, []);








 return (
  <>
 {props.show?(
    <>
      
      <View style={{
        backgroundColor:'black',
        flex:5,
        height:400,
        width:300,
      }}>{ld?(<>
<Text>Loading updates</Text>
<ActivityIndicator size='large' color='blue'/>
      </>):(<View style={{
        backgroundColor:'black',
        flex:1,
        height:400,
        width:300,
      }}>
<View Style={{
  flex:2,
  height:400,
  width:300,
}}>
     <Text>{data[1].Update[0]}</Text>
     <Text>{data[1].Update[1]}</Text>
</View>
      </View>)}</View>
     
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


