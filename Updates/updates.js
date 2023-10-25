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






/*

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

export default App;
 */










export default function Updates({route,navigation})  {

  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);
  const [ld ,setLd] = useState(false);
  const [postt,setPostt] = useState('');
  var parr;
  var parr1;
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
  const {sidd}=useSelector(state=>state.userReducer);

  
  async function GetID1() {
    
    for (var n =0 ; n<data.length ; n++) {
    if (sidd==data[n]["SID"]) {
    
    console.log("Id has been found 1");
    setId1(data[n]["_id"]);
    setNn(n);
    break;
    
    }
    else {
      console.log("Loop ran but update ID was not found");
      continue;
    }
    }
    for (var k =0 ; k<data1.length ; k++) {
      if (sidd==data1[k]["SID"]) {
      
      console.log("Id has been found 2");
      setId2(data1[k]["_id"]);
      setNn1(k);
      break;
      
      }
      else {
        console.log("Loop2 ran but update  ID was not found");
        continue;
      }
      }
    }



    function filterbyid(array,sid) {

       
        return array.filter(obj=>obj.SID==sid);

    }
    
   
  async function fetchDataa1() {
    try {
      const response = await axios.get('https://buddy00.onrender.com/updateR');
      console.log(200);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
      };


    
      async function fetchDataa2() {
      try {
        const response = await axios.get('https://buddy00.onrender.com/updateS');
        console.log(200);
        setData1(response.data);
       
      } catch (error) {
        console.error(error);
      }
       
    }

    useEffect(()=>{
      fetchDataa1();
      fetchDataa2();
      setTimeout(()=>{setLdi(2)});
    },[]);
   



 useEffect(()=>{
  fetchTime();
  setTimeout(()=>{console.log(sarr)},3000);
  setTimeout(()=>{setRarr(filterbyid(data,sidd))},2000);
  setTimeout(()=>{setSarr(filterbyid(data1,sidd))},2000);
  setTimeout(()=>{setLddd(false)},4000);
 },[data,data1])

     
  
  //  let [fontsLoaded] = useFonts({
   //   "FredokaBold":require("../fonts/FredokaBold.ttf"),
    //  "FredokaLight":require("../fonts/static/Fredoka-Light.ttf")
  //});

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
              // Examine thee text in the response
}

 

 //Get user's unique id from DB


 async function sendUpdate() {
 

  fetchTime();
  setTimeout(()=>{
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
  );},4000);


  senderUpdate();
  UpdateAll();
  
};



function GetUpdates() {
fetchDataa1();
fetchDataa2();
setRarr(filterbyid(data,sidd));
setSarr(filterbyid(data1,sidd));

}

function Gett(){
  const gettt = setInterval(()=>{GetID1()},2000);
  setTimeout(()=>clearInterval(gettt),6);
}


const [selectedId, setSelectedId] = useState('');

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);




async function UpdateAll() {
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
}



 



 return (
  <Provider store={store}>
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
      {(nava)?(
      <View style={{
         justifyContent:'center',
         alignItems:'center',
         gap:10,
          height:110,
          width:350,
          backgroundColor:'#9999',
          flexDirection:'row'
        }}>

  <>
        <TextInput placeholder="                    Enter Update" style={{
          borderWidth:1,
          width:220,
          height:90,
          backgroundColor:'white',
          borderWidth:1,
          borderColor:'blue'
        }} multiline={true}
        onChangeText={(text)=>setPostt(text)}
        >

        </TextInput>
        <View style={{
       flexDirection:'column',
       gap:2
        }}>
        <Button title="Post" onPress={()=>sendUpdate()}></Button>
      
         <Button title="Delete Post" onPress={()=>Deletedataa()
        }></Button>
       <Button title="Get" onPress={()=>{
     console.log(sidd);
       }}></Button>
       </View></>
      </View>):(<></>)}      
      <Text> New(99+)           Read(5)</Text>
      
      
      <SafeAreaView style={style.flat}>
      
    {(lddd)?(<View style={{
      flex:1,
      justifyContent:'center',

    }}><ActivityIndicator color='blue' size='large' /></View>):(
      <View       style={{
        flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:0.7,
      width:350}}> 
<Text style={{
  marginRight:260
}}>Latest</Text>
<FlatList
data={rarr[0]["Update"].reverse()}
renderItem={({item})=>(

<View style={{
    backgroundColor:'#9999',
    margin:10,
    padding:20,
    borderRadius:10
  }}>
  <Text style={{
    
  
  }}>{item}</Text>
</View>
)}
keyExtractor={(item)=>item}

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
