import React from "react";
import { View,Text,ScrollView } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";


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
  <ScrollView>{re?(
        <>
          <ScrollView><Text>This is the recents page.</Text></ScrollView>
         
        </>
    ):(
       <View>
     <View style={styles.lobbyQuotes}>
         <Text style={{color:'black'}}>Hiii</Text>
      </View></View>
    )}</ScrollView>
   

 );
 
}


