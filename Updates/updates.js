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
import { TouchableOpacity } from "react-native";



export default function Updates({route,navigation})  {

  const [data,setData] = useState(['Haha']);
  const [ld ,setLd] = useState(true);
  const [postt,setPostt] = useState('');
  const navigate = useNavigation; 
  const [nav,setNav] = useState(true);
  const [id,setId] = useState("64f3c9671647d069a5f07cc1");
  const [idn,setIdn] = useState("Hello world");
  const {nava} =route.params;
  useEffect(() => {
      async function fetchDataa() {
          fetch("https://buddy00.onrender.com/updattes")
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

  //  let [fontsLoaded] = useFonts({
   //   "FredokaBold":require("../fonts/FredokaBold.ttf"),
    //  "FredokaLight":require("../fonts/static/Fredoka-Light.ttf")
  //});

 // if (!fontsLoaded) {
  //  return(<ActivityIndicator />)
 // }

 function Updatedataa() {
  fetch(`https://buddy00.onrender.com/updattes/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({Postt:idn})
  })
  .then(res => {console.log(res.status);
      console.log(res.headers);})
  .then(
    (result)=>{
      console.log(result);
    },
    (error)=> {
      console.log(error);
    }
  )
  
};

//Get Update ID



function Replicate() {




}


function SendUpdate() {





}











function Postdataa() {
  fetch(`https://buddy00.onrender.com/updatte`,{
    method:"POST",
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      Postt:postt,
      Comment:["Hie"],
      SID:11335775,
      SName:"Stella Enam Tattah"

    })
  })
  .then(res => {console.log(res.status);
      console.log(res.headers);})
  .then(
    (result)=>{
      console.log(result);
    },
    (error)=> {
      console.log(error);
    }
  )
  
};


 return (
<SafeAreaView>
   <View style={{
    justifyContent:'center',
    alignItems:'center'
   }}>
      {ld?(<>
<Text>Loading updates</Text>
<ActivityIndicator size='large' color='blue'/>
      </>):(
      <>      
      <Text> New(99+)           Read(5)</Text>
      
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
      {(nava)?(
      <View style={{
         justifyContent:'center',
         alignItems:'center',
         gap:10,
          height:110,
          width:400,
          backgroundColor:'#8888'
        }}>

  <>
        <TextInput style={{
          borderWidth:1,
          width:300,
          height:60
        }} multiline={true}
        onChangeText={(text)=>setPostt(text)}
        >

        </TextInput>
        <View style={{
       flexDirection:'row',
       gap:20
        }}>
        <Button title="Post" onPress={()=>Postdataa()}></Button>
        <Button title="Update Post" onPress={()=>Updatedataa()
        }></Button>
         <Button title="Delete Post" onPress={()=>Deletedataa()
        }></Button>
        </View></>
      </View>):(<></>)}
</>

  )}
  </View>
  </SafeAreaView>)
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    height:400,
    width:400,
 marginBottom:50
  },
  text: {
    fontSize: 42,
  }});
