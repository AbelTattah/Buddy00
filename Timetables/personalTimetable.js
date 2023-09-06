import { View,Text,TextInput,KeyboardAvoidingView,TouchableOpacity, Button } from "react-native";
import { useState,useEffect } from "react";
import styles from "../Styling/styles";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";



export default function PersonalTimetable({navigation}){

    

    var [sid,setSid] = useState(11321000);
    var [suds,setSuds] = useState({});
    var [disp1,setDisp1] = useState('Yet to generate');
    var [disp2,setDisp2] = useState('Yet to generate');
    var [disp3,setDisp3] = useState('Yet to generate');
    var [disp4,setDisp4] = useState('Yet to generate');
    var [disp5,setDisp5] = useState('Yet to generate');
    var [disp6,setDisp6] = useState('Yet to generate');
   
//Line 42 contains all the subjects 
   
   var [subjects,setSubjects]=useState(["MATH126","MATH122","DCIT102","UGRC150"]);
   var timearr =[];


   useEffect(()=>{
    async function fetchData()  {
        fetch('https://good-earrings-cow.cyclic.cloud/timetable')  // the link in the function connects to my api
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .then(()=>console.log(suds))
        .catch((error)=>{console.log("error");setLddd('mm')})          
        .finally(()=>setLddd('yes'));
    };
    fetchData()

},[]  )


//Line 47 to 98 is the magical function that generates the values for the timetables


function Abacadabra() {
var a;
for (  var c=0 ; c < subjects.length ; c++ ) {
 a = subjects[c];
            for (var b=0; b<4; b++) {
        //I used some mathematics here. I used the Negative, positive numbers and closed intervals concepts
        //I think majoring or minoring in maths with CS will be a very good idea
            if  (
                sid-suds[4]["Subject"][a][b]["high"]<0 && sid-suds[4]["Subject"][a][b]["low"] ==0 ||
                sid-suds[4]["Subject"][a][b]["high"]==0 && sid-suds[4]["Subject"][a][b]["low"] >0 ||
                sid-suds[4]["Subject"][a][b]["high"]<0 && sid-suds[4]["Subject"][a][b]["low"] >0 
                )  
                {
                console.log("It worked");
                timearr.push(suds[4]["Subject"][a][b]);
                }
                else
                {
                  console.log("Nope");
                  continue;
                }    
             }      
    }
//Line 58 to 77 sorts and arranges the objects obtained from the Loop above into the respective Views by updating
//disp1 to 4.  
console.log(timearr);
var byDate = timearr.slice(0);
byDate.sort(function(a,b) {

    return a.did - b.did;

});
console.log(byDate);


function sett() {
    setDisp1(byDate[0].time);
    setDisp2(byDate[1].time);
    setDisp3(byDate[2].time);
    setDisp4(byDate[3].time);
    setDisp5("Yet to Generate");
    setDisp6("Yet to Generate");
    console.log("Hmmm");
}
sett();
}

    async function fetchData()  {
        fetch('https://good-earrings-cow.cyclic.cloud/timetable')  // the link in the function connects to my api
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .then(()=>console.log(suds))
        .catch((error)=>{console.log("error");setLddd('mm')})          
        .finally(()=>setLddd('yes'));
    };
    //line 89 to 96 load the font and makes sure the font is loaded before rendering the main view.
    let [fontsLoaded] = useFonts({
        "FredokaBold":require("../fonts/FredokaBold.ttf"),
    });
    
    
    if (!fontsLoaded){
        return <ActivityIndicator />;
    }

  
    return (
        <> 
          
    <View style={{
                justifyContent:'center',
                alignItems:'center'
                }}>
              
        <View style={styles.personalTimetableTopButtonView}>

                <TouchableOpacity styles={styles.personalTimetableTopButton} onPress={()=>{fetchData();Abacadabra();}}>
                    <FontAwesomeIcon icon={faArrowDown} size={40}/>
                </TouchableOpacity>

        </View>

        <View style={styles.perTMainview}>
              <Text style={styles.perT}> DAY                  COURSE         TIME           VENUE</Text>
                     <View style={styles.perTviews}>
                     <Text style={styles.perT}>{disp1}</Text>
                     </View>  
                     <View style={styles.perTviews}>
                     <Text style={styles.perT}>{disp2}</Text>
                     </View> 
                     <View style={styles.perTviews}>
                     <Text style={styles.perT}>{disp3}</Text>
                     </View> 
                     <View style={styles.perTviews}>
                     <Text style={styles.perT}>{disp4}</Text>
                     </View> 
                     <View style={styles.perTviews}>
                     <Text style={styles.perT}>{disp5}</Text>
                     </View> 
                     <View style={styles.perTviews}>
                     <Text style={styles.perT}>{disp6}</Text>
                     </View> 
               </View>
             
              </View>
           
        </>

     );
}