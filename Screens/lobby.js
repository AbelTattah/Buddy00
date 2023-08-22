
import { Button, Text, View, ScrollView,TouchableOpacity } from "react-native";
import * as React from 'react';
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import Weather from "../Components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Updates from "./updates";





function Lobby ({navigation}) {
 /*  const [data,SetData] = useState([]);
   const [loading,SetLoading] =useState(true);
   const [rel,setRel] = useState(1);
   const [ren,setRen] = useState(0);
 

   useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then((response)=>response.json())
    .then((json)=>SetData(json))
    .then(()=>console.log(ren))
    .catch((error)=>console.log("Error"))
    .finally(()=>SetLoading(false));
   },[])
  
   useEffect(() => {
    async function fetchData() {
      fetch("https://type.fit/api/quotes")
    .then((response)=>response.json())
    .then((json)=>SetData(json))
    .then(()=>console.log(ren))
    .catch((error)=>console.log("Error"))
    .finally(()=>SetLoading(false));
    };
    fetchData();
  }, []);
*/

    return (
<View style={styles.Homepage}>

                    <View style={styles.updates}>

 <Text style={{
  fontWeight:600,
  marginTop:70,
  marginLeft:66,
  fontSize:20,
  color:'white'
 }}>Good morning,</Text>
                   </View>
  <Text style={{
    position:'absolute',
    top:120,
    left:128,
    fontSize:20,
    fontWeight:800,
    
  }}>Kobina</Text>

  <View style={{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:32,
    right:39,
    borderRadius:99,
    borderTopColor:'white',
    height:133,
    width:133,
    backgroundColor:'#888'
  }}><FontAwesomeIcon icon={faUser} size={90} color="white"/></View>
  <View style={{
    position:'absolute',
    top:200,
    left:60
  }}>
     <Weather /></View>
       
  {/*   
    <View style={styles.Options}>
      
        <TouchableOpacity style={styles.button1} onPress={()=> {navigation.navigate('Maps');setRen(ren+1);{ren%5==0 ? (setRel(rel+1)):(setRel(rel))}
          }} ><Text style={{color:'white',  fontWeight:'700',textAlign:'center'}}>Navigator</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('Timetables')} ><Text style={{color:'white',  fontWeight:'700',textAlign:'center'}}>Timetables</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('Maps')} ><Text style={{color:'white',  fontWeight:'700',textAlign:'center'}}>Go to Maps</Text></TouchableOpacity>
    </View> 
     */}  


     
   


    

 
    {/* <View style={styles.quo}>
          {loading ?(
            <Text style={{
                         color:'white',
                         textAlign:'center'
                         }}>
                       Loading quote...
            </Text>):
                        (
   <View>
             <Text style={{textAlign:'center',color:'white'}}>
                       {data[rel].text}
             </Text>
             <Text style={{
              textAlign:'right',
              marginRight:'8%',
              marginTop:'7%',
              color:'white'}}>
              ~{data[rel].author}
              </Text>
   </View>
                       )}
      </View>
      */}
      <View style={{
        marginTop:30,
        height:150,
        width:340,
        flex:0.4,
        marginBottom:-110
      }}>
      {Updates(false,{navigation})}
      </View>
</View>

    );
};

export default Lobby;