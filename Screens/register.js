import {View,Text,Button, KeyboardAvoidingView,TextInput, ActivityIndicator,ScrollView} from 'react-native';
import styles from '../Styling/styles';
import { useState,useEffect } from 'react';
import CheckBox from 'react-native-check-box';
import { beginAsyncEvent } from 'react-native/Libraries/Performance/Systrace';



var course=[];

export default function Register({navigation}) {

 var [sid,setSid] = useState(0);
 var [nameid,setNameid] = useState('');
 var [pass,setPass]= useState('');
 
 var [suds,setSuds]= useState({});
 var [sud1,setSud1] =useState({})
 var [regg,setRegg] =useState('rnd');
 var [check1,setCheck]=useState('MATH123');
 var [check2,setCheck]=useState('MATH122');
 var [check3,setCheck]=useState('DCIT101');
 var [check4,setCheck]=useState('DCIT102');
 var [check5,setCheck]=useState(false);
 var [check6,setCheck]=useState(false);
 var [isC1,setIsC1] = useState(false);
 var [isC2,setIsC2] = useState(false);
 var [isC3,setIsC3] = useState(false);
 var [isC4,setIsC4] = useState(false);
 var [isC5,setIsC5] = useState(false);

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
    if (count < 3){
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
        Courses:course
  
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








function Check(sub){
  switch (sub) {
    case 'MATH123':
  if (isC1) {
    setIsC1(false);
    course.splice(course.indexOf('MATH123'),1);
  }
  else {
    setIsC1(true);
    course.push(sub);
    console.log(course);
  }
  break;
  case 'MATH126':
    if (isC2) {
      setIsC2(false);
      course.splice(course.indexOf('MATH126'),1);
    }
    else {
      setIsC2(true);
      course.push(sub);
      console.log(course);
    }
    break;
    case 'DCIT101':
      if (isC3) {
        setIsC3(false);
        course.splice(course.indexOf('DCIT101'),1);
      }
      else {
        setIsC3(true);
        course.push(sub);
        console.log(course);
      }
      break;
      case 'UGRC150':
        if (isC4) {
          setIsC4(false);
          course.splice(course.indexOf('UGRC150'),1);
        }
        else {
          setIsC4(true);
          course.push(sub);
          console.log(course);
        }
       break;
       default :
       console.log("This will not happen");


}
}

    return (
     <View style={styles.loginMain}>
        <Text>Register</Text>
        <KeyboardAvoidingView style={styles.loginIn} behavior='padding'>
        <TextInput style={styles.loginTextIn}  placeholder=' SID' autoCapitalize='none' onChangeText={(text)=>setSid(text)} />
        <TextInput style={styles.loginTextIn} placeholder=' name' autoCapitalize='none' onChangeText={(text)=>setNameid(text)} />
        <TextInput style={styles.loginTextIn} placeholder='password' autoCapitalize='none' onChangeText={(text)=>setPass(text)} />
        </KeyboardAvoidingView>
        <View style={styles.regCheckmain}>
        <Text>Select Courses:</Text>
           <View style={styles.regCheck}>
 <Text>MATH123 </Text><CheckBox
  
    onClick={()=>{
      Check('MATH123');
    }}
    isChecked={isC1}
/>
           </View>
           <View style={styles.regCheck}>
 <Text>MATH126 </Text><CheckBox
  
    onClick={()=>{
      Check('MATH126');
    }}
    isChecked={isC2}
/>
           </View>
           <View style={styles.regCheck}>
 <Text>DCIT101</Text><CheckBox
  
    onClick={()=>{
      Check('DCIT101');
    }}
    isChecked={isC3}
/>
           </View>
           <View style={styles.regCheck}>
 <Text>UGRC150  </Text><CheckBox
  
    onClick={()=>{
      Check('UGRC150');
    }}
    isChecked={isC4}
/>
           </View>
        </View>
         
        <Button title='Register' onPress={()=>Reg()}></Button>
        <Button title='Consolelogcourse' onPress={()=>console.log(course)}></Button>
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