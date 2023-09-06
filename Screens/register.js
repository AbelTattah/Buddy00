import {View,Text,Button, KeyboardAvoidingView,TextInput, ActivityIndicator,ScrollView} from 'react-native';
import styles from '../Styling/styles';
import { useState,useEffect } from 'react';
import CheckBox from 'react-native-check-box';




export default function Register({navigation}) {

 var [sid,setSid] = useState(0);
 var [nameid,setNameid] = useState('');
 var [pass,setPass]= useState('');
 var course = [];
 var [suds,setSuds]= useState({});
 var [sud1,setSud1] =useState({})
 var [regg,setRegg] =useState('rnd');
 var [check1,setCheck]=useState('MATH123');
 var [check2,setCheck]=useState('MATH122');
 var [check3,setCheck]=useState('DCIT101');
 var [check4,setCheck]=useState('DCIT102');
 var [check5,setCheck]=useState(false);
 var [check6,setCheck]=useState(false);


 var c = 0 ;
 useEffect(()=>{
    async function fetchData()  {
        fetch('https://buddy00.onrender.com/buddy')  
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .catch((error)=>console.log("error"))          
    };
    fetchData()

},[]  )
function fetchData()  {

    fetch('https://buddy00.onrender.com/buddy') 
    .then((response)=>response.json())
    .then((json) => setSuds(json))
    .catch((error)=>console.log("error"));         
   
}
 
//async function Fix(){ setInterval(()=>{fetchData()},10000)};

//Fix();
var count = 1;
function fix()
{
    if (count < 5){
        count++
       fetchData(); 
        window.setTimeout(fix, 2000);
    }
}
fix();

 async function Reg() {
  

fetchData();


    for (var a =0; a < suds.length ; a++ ) {

        if ( suds[a]["SID"]==sid ) {                
            setSud1(suds[a]);
            console.log(sud1["SID"]);
            c = 1;
            console.log(c);
            break;
        }
        else {
            console.log("loop did run but ID was not found")
            console.log(c);
            c*=0;
            continue;
        }
    } 



console.log(c);

    if (c==0) {
        setRegg('inp');
    fetch(`https://buddy00.onrender.com/buddy`,{
      method:"POST",
      headers:{
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        SID:sid,
        SName:nameid,
        Spass:pass,
        Courses:["Wele","Banku"]
  
      })
    })
    .then(res => {console.log(res.status);
        console.log(res.headers);})
    .then(
      (result)=>{
        console.log('User Has been registered');
        setRegg('succ');
        fix();
      },
      (error)=> {
        console.log(error);
      }
    )
  }
else {
    console.log("User is already registered");
    c*=0;
    setRegg('prob');
    console.log(c);
}


}



    return (
     <View style={styles.loginMain}>
        <Text>Register</Text>
        <KeyboardAvoidingView style={styles.loginIn} behavior='padding'>
        <TextInput style={styles.loginTextIn}  placeholder=' SID' autoCapitalize='none' onChangeText={(text)=>setSid(text)} />
        <TextInput style={styles.loginTextIn} placeholder=' name' autoCapitalize='none' onChangeText={(text)=>setNameid(text)} />
        <TextInput style={styles.loginTextIn} placeholder='password' autoCapitalize='none' onChangeText={(text)=>setPass(text)} />
        <TextInput style={styles.loginTextIn} placeholder='courses' autoCapitalize='none' onChangeText={(text)=>setPassword(text)} />
        </KeyboardAvoidingView>
         
        <Button title='Register' onPress={()=>Reg()}></Button>
        <>{(regg=='inp')?(<>
<Text>Signing you up... <ActivityIndicator color='white'/></Text>
        </>):(regg =='prob')?(<>
<Text>You already Have an account</Text>
        </>):(regg=='succ')?(<>
<Text>Sign Up Succesful ,Go to login Page!</Text>
        </>):(<>
            <Text>Buddy v.1.0</Text>
        </>)}</>
     </View>
    );
}




//Figure out how to take user Subjects