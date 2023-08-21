import React from "react";
import { useState,useEffect } from "react";
import { Text,View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";




export default function Weather() {
    
    const [dataa,setDataa] = useState([]);
    const [ldd ,setLdd] = useState(true);

    useEffect(() => {
        async function fetchAata() {
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=5.649911600266465&lon=-0.18837633457180827&appid=e8d4a5437d3ad657c96ff1a7d5ba3ff0")
            .then((response)=>response.json())
            .then((json) => setDataa(json))
            .then(()=>console.log(
                "Hello world"
            ))
            .then(()=>console.log(dataa))
            .catch((error)=>console.log())
            .finally(()=>setLdd(false));
        };
        fetchAata();
      }, []);


    return ( 
        <View>
         { ldd? (<>
                <Text> Weather update loading ... </Text>
         </>):
         (<View style={{
            flexDirection:'row'
         }}>{/*
            <Text style={{
                 fontSize:20,
                 fontWeight:800,
            }}> {dataa.weather[0].main} </Text>*/}
          {(dataa.weather[0].main=='Rain')?
          (<FontAwesomeIcon icon={faCloudRain} color="gray" size={40}/>)
          :
          (dataa.weather[0].main=='Clouds')?(<FontAwesomeIcon icon={faCloud} color="gray" size={40}/>)
          :(dataa.weather[0].main=='Sunny')?(<FontAwesomeIcon icon={faSun} color="gray" size={40}/>):(<Text>Nuin</Text>)}
            <Text> {Math.round((5/9)*(dataa.main.temp-32)).toFixed(1)} C</Text>
       

         </View>)

         }
        </View>
    ) ;
}