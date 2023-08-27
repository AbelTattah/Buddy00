import { View,Text,TextInput,KeyboardAvoidingView,TouchableOpacity, Button } from "react-native";
import { useState,useEffect } from "react";
import styles from "../Styling/styles";
import { ActivityIndicator } from "react-native";

/*
const Haha = [
    {
        "_id": "64e8b822b87d837a917a3779",
        "Subject": {
            "Math126": [
                {
                    "low": 5,
                    "high": 20,
                    "time": "3:00 PM"
                },
                {
                    "low": 21,
                    "high": 36,
                    "time": "4:00 PM"
                },
                {
                    "low": 37,
                    "high": 52,
                    "time": "3:00 PM"
                }
            ]
        },
        "__v": 0
    },
    {
        "_id": "64e8b85db87d837a917a377b",
        "Subject": {
            "Math126": [
                {
                    "low": 5,
                    "high": 20,
                    "time": "7:00 PM"
                },
                {
                    "low": 21,
                    "high": 36,
                    "time": "8:00 PM"
                },
                {
                    "low": 37,
                    "high": 52,
                    "time": "10:00 PM"
                }
            ]
        },
        "__v": 0
    },
    {
        "_id": "64e8b93ab87d837a917a377e",
        "Subject": {
            "Math126": [
                {
                    "low": 5,
                    "high": 20,
                    "time": "7:00 PM"
                },
                {
                    "low": 21,
                    "high": 36,
                    "time": "8:00 PM"
                },
                {
                    "low": 37,
                    "high": 52,
                    "time": "10:00 PM"
                }
            ]
        },
        "__v": 0
    },
    {
        "_id": "64e8b943b87d837a917a3780",
        "Subject": {
            "Math122": [
                {
                    "low": 5,
                    "high": 20,
                    "time": "7:00 PM"
                },
                {
                    "low": 21,
                    "high": 36,
                    "time": "8:00 PM"
                },
                {
                    "low": 37,
                    "high": 52,
                    "time": "10:00 PM"
                }
            ]
        },
        "__v": 0
    }
  ]

  suds[a]["Subject"]["Math126"][b][1]

 */





export default function PersonalTimetable({navigation}){



    var [sid,setSid] = useState('');
    var [suds,setSuds] = useState({});
    var [disp,setDisp] = useState('Yet to generate');
    var [lddd,setLddd] = useState('yes');
    

    useEffect(() => {
        async function fetchAata()  {
            fetch('https://good-earrings-cow.cyclic.cloud/timetable')
            .then((response)=>response.json())
            .then((json) => setSuds(json))
            .then(()=>console.log(suds))
            .catch((error)=>{console.log("error");setLddd('mm')})          
            .finally(()=>setLddd('yes'));
        };
        fetchAata();
   }, []);

  async function FindTime(){
        for (var a=0; a<3 ;a++){
            for (var b=0; a<=2; b++) {
            if  (
                sid-suds[a]["Subject"]["Math126"][b].high>0 && sid-suds[a]["Subject"]["Math126"][b].low ==0 ||
                sid-suds[a]["Subject"]["Math126"][b].high==0 && sid-suds[a]["Subject"]["Math126"][b].low >0  ||
                sid-suds[a]["Subject"]["Math126"][b].high<0 && sid-suds[a]["Subject"]["Math126"][b].low >0 
                )
      
                {
                console.log("It worked");
                setDisp("Math126          "+suds[a]["Subject"]["Math126"][b].time)
               break;
                }
                else
                {
                  console.log("Nope");
                  continue;
                }    
             }    
        }
    }

    async function fetchAata()  {
        fetch('https://good-earrings-cow.cyclic.cloud/timetable')
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .then(()=>console.log(suds))
        .catch((error)=>{console.log("error");setLddd('mm')})          
        .finally(()=>setLddd('yes'));
    };
    async function Diss()
    {
console.log(suds[2]["Subject"]["Math126"][1].high)
    };


  
    return (
        <> 
            {(lddd=='no')? 
            (
                 <View><Text>Loading</Text><ActivityIndicator color='blue' size='large' /></View>
            ):(lddd='mm')?(
              <View>
              <View>
                <Text>Enter your SID :</Text>
                <TextInput onChangeText={(value)=>setSid(value)} style={styles.Input}></TextInput>
                <Button title="Find" onPress={()=>FindTime()}></Button>
                <Button title="Get" onPress={()=>fetchAata()}></Button>
                <Button title="Diss" onPress={()=>Diss()}></Button>
              </View>
              <View><Text>{disp}</Text></View>
             
              </View>
            ):(lddd=='yes')?(
              <View>
              <View>
                <Text>Enter your SID :</Text>
                <TextInput onChangeText={(value)=>setSid(value)} style={styles.Input}></TextInput>
                <Button title="Find" onPress={FindTime()}></Button>
                <Button title="Find" onPress={fetchAata()}></Button>
                <Button title="Find" onPress={Diss()}></Button>
              </View>
              <View><Text>wagyimi anaa?</Text></View>
              </View>
            ):(<View><Text>fior</Text></View>)
            
            }
        </>

     );
}