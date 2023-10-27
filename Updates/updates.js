import React from "react";
import { View,Text,ScrollView,StyleSheet,StatusBar,Pressable,SafeAreaView,FlatList } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faL } from "@fortawesome/free-solid-svg-icons";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import moment from 'moment'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";



export default function Updates({route,navigation})  {

  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);
  const [ld ,setLd] = useState(false);
  const [postt,setPostt] = useState('');
  const [nn,setNn] = useState(0);
  const [nn1,setNn1] = useState(0);
  const [ldi,setLdi] =useState(0);
  const [posttar,setPosttar] =useState([]);
  const [posttarr1,setPosttarr1] =useState([]);
  const navigate = useNavigation; 
  const [nav,setNav] = useState(true);
  const [timee,setTimee] =useState('');
  const [id1,setId1] = useState("");
  const [id2,setId2] = useState("");
  const [idn,setIdn] = useState("Hello world");
  const [nava,setNava] =useState(true);
  const [lddd,setLddd] = useState(true);
  const [rarr,setRarr] = useState([]);
  const [sarr,setSarr] = useState([])
  var iddd;
  var parr;
  var parr1;
  const {sidd}=useSelector(state=>state.userReducer);

  //The function below extracts the user's unique id from db object

    function filterbyid(array,sid) {
        return array.filter(obj=>obj.SID==sid);
    }
    
   // The function below fetches data from the update reciever's db
      async function fetchDataa1() {
      try {
      const response = await axios.get('https://buddy00.onrender.com/updateR');
      console.log(200);
      setData(response.data);
      } catch (error) {
      console.error(error);
      }
      };


      // The function below fetches data from the update sender's db
      async function fetchDataa2() {
      try {
        const response = await axios.get('https://buddy00.onrender.com/updateS');
        console.log(200);
        setData1(response.data);
       
      } catch (error) {
        console.error(error);
      }
       
    }
    //The function below fetches time from google
    async function fetchTime() {

      var URL_REGISTER = 'https://www.google.com';
      try {      
                  const response = await axios.get(`${URL_REGISTER}`);
                  setTimee(response.headers.get('Date'));         
                  if (response.status !== 200) {
                      console.log('Status Code: ' + response.status);
                      return;
                  }
                }
    
            catch (error) {
    console.log(error.message);
            }
            
    }

/*


    function fireOnce() {
      var fire = true ;
      if (fire==true) {
      //Do this
      setNn(1);
        fire = false;
      }
    }
    useEffect(()=>{
    fireOnce();
    });*/

    useEffect(()=>{
      fetchDataa1();
      fetchDataa2();
      fetchTime();
    });


    useEffect(()=>{
      setTimeout(()=>{setRarr(filterbyid(data,sidd))},1000);
      setTimeout(()=>{setSarr(filterbyid(data1,sidd))},2000);
      setTimeout(()=>{console.log(sarr)},3000);
      setTimeout(()=>{console.log(rarr)},3000);
      setTimeout(()=>{setLddd(false)},4000);
    },[data,data1]);

     
  
  //  let [fontsLoaded] = useFonts({
   //   "FredokaBold":require("../fonts/FredokaBold.ttf"),
    //  "FredokaLight":require("../fonts/static/Fredoka-Light.ttf")
  //});




//The function below is used to send updates
//One copy of the update is stored in the sender's database whiles all recipients recieve the update in their database

async function sendUpdate() {
fetchDataa1();
for ( var v = 0 ; v < data.length ; v++ ) {
       
    
    fetchTime();

    parr = data[v]["Update"];

    parr.push(postt+`   ${timee}`);
    
    iddd = data[v]["_id"];
    
  
   fetch(`https://buddy00.onrender.com/updateR/${iddd}`,{
    method:"PUT",
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      Update:parr
    })
  })
  .then(res => {
     })
  .then(
    (result)=>{
    },
    (error)=> {
      console.log(error);
    }
  )
   
}

parr1.push(postt+`   ${timee}`);
console.log("Sender's ID:  "+id1);

fetch(`https://buddy00.onrender.com/updateS/${id1}`,{
  method:"PUT",
  headers:{
    "Content-Type": 'application/json'
  },
  body: JSON.stringify({
    Update:parr1
  })
})
.then(res => {console.log(res.status);})
.then(
  (error)=> {
    console.log(error);
  }
);

}



 



 return (
   <Provider store={store}>
     <SafeAreaView>
       <View style={{
         justifyContent: 'center',
         alignItems: 'center'
       }}>
         {ld ? (<>
           <Text>Loading updates</Text>
           <ActivityIndicator size='large' color='blue' />
         </>) : (
           <>
             {(nava) ? (
               <View style={{
                 justifyContent: 'center',
                 alignItems: 'center',
                 gap: 10,
                 height: 110,
                 width: 350,
                 backgroundColor: '#9999',
                 flexDirection: 'row'
               }}>

                 <>
                   <TextInput placeholder="                    Enter Update" style={{
                     borderWidth: 1,
                     width: 220,
                     height: 90,
                     backgroundColor: 'white',
                     borderWidth: 1,
                     borderColor: 'blue'
                   }} multiline={true}
                     onChangeText={(text) => setPostt(text)}
                   >

                   </TextInput>
                   <View style={{
                     flexDirection: 'column',
                     gap: 2
                   }}>
                     <Button title="Post" onPress={() => sendUpdate()}></Button>

                     <Button title="Delete Post" onPress={() => Deletedataa()
                     }></Button>
                     <Button title="Get" onPress={() => {
                       console.log(sidd);
                     }}></Button>
                   </View></>
               </View>) : (<></>)}
             <Text> New(99+)           Read(5)</Text>


             <SafeAreaView style={style.flat}>

               {(lddd) ? (<View style={{
                 flex: 1,
                 justifyContent: 'center',

               }}><ActivityIndicator color='blue' size='large' /></View>) : (
                 <View style={{
                   flex: 1,
                   justifyContent: 'center',
                   alignItems: 'center',
                   borderWidth: 0.7,
                   width: 350
                 }}>
                   <Text style={{
                     marginRight: 260
                   }}>Latest</Text>

                   <FlatList
                     data={rarr[0]["Update"]}
                     renderItem={({ item }) => (

                       <View style={{
                         backgroundColor: '#9999',
                         margin: 10,
                         padding: 20,
                         borderRadius: 10
                        }}>
                         <Text>{item}</Text>
                       </View>
                        )}
                       />
                 </View>)}
             </SafeAreaView>


           </>

         )}
       </View>
     </SafeAreaView>
   </Provider>)
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  flat:{
  height:450,
  width:300,
  justifyContent:'center',
  alignItems:'center'
  },
  scrollView: {
    height:400,
    width:400,
 marginBottom:50
  },
  text: {
    fontSize: 42,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
