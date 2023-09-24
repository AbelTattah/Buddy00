import React from "react";
import { View,Text,ScrollView,StyleSheet,StatusBar,Pressable,SafeAreaView,FlatList } from "react-native";
import styles from "../Styling/styles";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import moment from 'moment'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { UseSelector, useSelector } from "react-redux";






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


export default function Updates({route,navigation})  {

  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);
  const [ld ,setLd] = useState(true);
  const [postt,setPostt] = useState('');
  var parr;
  var parr1;
  var nn;
  var nn1;
  const [posttarr,setPosttarr] =useState([]);
  const [posttarr1,setPosttarr1] =useState([]);
  const navigate = useNavigation; 
  const [nav,setNav] = useState(true);
  const [timee,setTimee] =useState('');
  const [id1,setId1] = useState("");
  const [id2,setId2] = useState("");
  const [idn,setIdn] = useState("Hello world");
  const {nava} =route.params;
  const [lddd,setLddd] = useState(true);


  const {sidd}=useSelector(state=>state.userReducer);

  

  
  async function fetchDataa1() {
       fetch("https://buddy00.onrender.com/updateR")
          .then((response)=>response.json())
          .then((json) => setData(json))
          .then(()=>console.log(
         data[0]["Update"][1]
          ))
          .catch((error)=>console.log("Error 1"))
       
      };
    
 async  function fetchDataa2() {
        fetch("https://buddy00.onrender.com/updateS")
          .then((response)=>response.json())
          .then((json) => setData1(json))
          .then(()=>console.log(
              data1[0]["Update"][0]
          ))
          .then(()=>setLddd(false))
          .catch((error)=>{console.log("Error");setLddd(false)})
          .finally(()=>setLd(false));
      };
    
     
    useEffect(()=>{

    fetchDataa1();
      
    setTimeout(()=>{fetchDataa2()},3000);
   
    },[]);


    var h = 4;

    function recufix() {
      for (var u=2 ; u!=0 ; u=u-1) {
        fetchDataa1();
        fetchDataa2();
      }   
    }
    
    recufix();
  
    




   
   

    
   
  //  let [fontsLoaded] = useFonts({
   //   "FredokaBold":require("../fonts/FredokaBold.ttf"),
    //  "FredokaLight":require("../fonts/static/Fredoka-Light.ttf")
  //});

 // if (!fontsLoaded) {
  //  return(<ActivityIndicator />)
 // }

//Put update in array
async function fetchTime() {
  var URL_REGISTER = 'https://www.google.com';
  fetch(URL_REGISTER, {method: 'POST'})
      .then(
          function(response) {
              console.log(response.headers.get('Content-Type'));
              console.log(response.headers.get('Date'));
              setTimee(response.headers.get('Date'));
              console.log(response.status);
              console.log(response.statusText);
              console.log(response.type);
              console.log(response.url);
              if (response.status !== 200) {
                  console.log('Status Code: ' + response.status);
                  return;
              }

              // Examine the text in the response
              response.json().then(function(data) {
                  console.log(data);
              });
          }
      )
      .catch(function(err) {
          console.log('Fetch Error', err);
      });
}

 function PostUpdate() {
 fetchTime();
 console.log(timee);
 console.log(timee);
  parr = data[nn]["Update"];
  parr1 =data1[nn1]["Update"];
  parr.push(postt+`   ${timee}`);
  parr1.push(postt+`   ${timee}`);
  setPosttarr(parr);
  setPosttarr1(parr1);
 }

 //Get user's unique id from DB
 function GetID() {
  for (var n =0 ; n<data.length ; n++) {
  if (sidd==data[n]["SID"]) {
  
  console.log("Id has been found 1");
  setId1(data[n]["_id"]);
  nn=n;
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
    nn1=k;
    break;
    
    }
    else {
      console.log("Loop2 ran but update ID was not found");
      continue;
    }
    }
  }

 function Updatedataa() {
  fetchDataa1();
  fetchDataa2();
  GetID();
  PostUpdate();
console.log(posttarr1);
console.log(posttarr);

 

  fetch(`https://buddy00.onrender.com/updateS/${id2}`,{
    method:"PUT",
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      Update:posttarr1
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

  fetch(`https://buddy00.onrender.com/updateR/${id1}`,{
    method:"PUT",
    headers:{
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      Update:posttarr
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


const [selectedId, setSelectedId] = useState('');

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[style.item, {backgroundColor}]}>
    <Text style={[style.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const renderItem = ({item}) => {
  const backgroundColor = item.id === selectedId ? '#00f8' : '#00f3';
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
        <Button title="Post" onPress={()=>Updatedataa()}></Button>
      
         <Button title="Delete Post" onPress={()=>Deletedataa()
        }></Button>
          <Button title="Refresh" onPress={()=>{fetchDataa1();fetchDataa2();}}></Button>
        </View></>
      </View>):(<></>)}      
      <Text> New(99+)           Read(5)</Text>
      
      
      <SafeAreaView style={style.flat}>
    {(lddd)?(<View style={{
      flex:1,
      justifyContent:'center'
    }}><ActivityIndicator color='blue' size='large' /></View>):(<> 
   <FlatList
        data={data[0]["Update"]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      /></>)} 
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
  height:400,
  width:300,
  padding:20
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
