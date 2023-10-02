import {View,Text,Button, KeyboardAvoidingView,TextInput} from 'react-native';
import styles from '../Styling/styles';
import { useState,useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { setName,setSin,setSid,setCourse } from '../redux/actions';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';

import { doc, getDoc } from "firebase/firestore";
export default function Login({navigation}) {


 var [email,setEmail] = useState('');
 var [siddd,setSiddd] = useState(0);
 var [nameid,setNameid] = useState('');
 var [pass,setPass]= useState('');
 var [suds,setSuds] =useState({});
 var [regg,setRegg] =useState('Hm');
 var c = 0;

 const {namee,course,sidd} = useSelector(state =>state.userReducer);
 const dispatch =useDispatch()
 
/* 
 useEffect(()=>{
   async function fetchData()  {
        fetch('https://buddy00.onrender.com/buddy')  
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .then(()=>console.log('Data fetched'))
        .catch((error)=>console.log("error"))          
    };
    fetchData(); 

    async function fetchDataa1() {
        try {
          const response = await axios.get('https://buddy00.onrender.com/buddy');
          setSuds(response.data);
          console.log("Data fetched");
        } catch (error) {
          console.error(error);
        }
          };
    fetchDataa1();
},[]  )

async function fetchData() {
    try {
      const response = await axios.get('https://buddy00.onrender.com/buddy');
      setSuds(response.data);
      console.log("Data fetched");
    } catch (error) {
      console.error(error);
    }
      };





async function Login() {
    fetchData();
    
    for (var a =0; a < suds.length ; a++ ) {

        if ( suds[a]["SID"]==siddd ) {

            setRegg('inp');   
            dispatch (setSid(suds[a]["SID"]));
            if (suds[a]["Spass"]==pass) {
                 
                  dispatch (setName(suds[a]["SName"]));
                  dispatch (setCourse(suds[a]));
                 
                  dispatch (setSin(true));
                  console.log(namee);  
                   
                    
                    setTimeout(()=>setRegg('succ'),4000);7008
                    setTimeout(()=>navigation.navigate('App1'),5000);
                    setTimeout(()=>setRegg('hehe'),6000);
                    
                   
            }
            else {
                console.log('noo')
             setRegg('prob');
            }
           
            break;
        }
        else {
            console.log('noo')
            c+=1;
            continue;
        }
    } 
   console.log('This is bull shitt')
   console.log(c);
   console.log(suds.length)
if (c==suds.length){
    setRegg('no')
}

}



*/


let [fontsLoaded] = useFonts({
    "FredokaBold":require("../fonts/FredokaBold.ttf"),
});

async function signIn() {

const auth = getAuth();

signInWithEmailAndPassword(auth, email, pass)
  .then(() => {
 setRegg('inp');
 DataRead();
 dispatch (setName(suds["SNAME"]));
 dispatch (setCourse(suds["COR"]));

 dispatch (setSin(true));
 console.log(namee);  
 
   
   
   setTimeout(()=>setRegg('succ'),4000);7008
   this.textInput.clear();
   setTimeout(()=>{   
   setPass('');navigation.navigate('App1')},5000);
   setTimeout(()=>setRegg('hehe'),6000);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setRegg('prob');
  });

}


async function DataRead() {
  const docRef = doc(db, "users",email);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    setSuds (docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  
}





    return (
    <Provider store={store}>
     <View style={styles.loginMain}>
      <View style={styles.loginLogo}>
        <Text style={styles.loginLogoText}>Buddy</Text>
      </View>
        <KeyboardAvoidingView style={styles.loginIn} behavior='padding'>
        <TextInput style={styles.loginTextIn} inputMode='email'  placeholder='   email' autoCapitalize='none' onChangeText={(text)=>setEmail(text)} />
        <TextInput ref={input => { this.textInput = input }} style={styles.loginTextIn} placeholder='   password' autoCapitalize='none' onChangeText={(text)=>setPass(text)} />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.loginButton}  onPress={()=>signIn()}><Text style={styles.loginButtonText}>Log in</Text></TouchableOpacity>
        <Text style={styles.loginTextt1}>Forgot password?</Text>
        <Text style={styles.loginTextt2}>Privacy</Text>
        <View style={styles.regButtonView}>
        <Text>New to Buddy?</Text>
        <TouchableOpacity style={styles.loginReg} onPress={()=>navigation.navigate('Register')}><Text style={styles.loginRegText}>  Sign Up</Text></TouchableOpacity>
        </View>
        <>{(regg=='inp')?(<>
<Text>Logging in ... <ActivityIndicator color='#2407f2'/></Text>
        </>):(regg =='prob')?(<>
<Text>Wrong password or SID!</Text>
        </>):(regg=='succ')?(<>
<Text>Log In Succesful</Text>
        </>):(regg=='no')?(<>
            <Text>You do not have an accout. Go to the registration page</Text>
        </>):(<>
            <Text>Buddy v.1.0</Text>
        </>)}</>
     </View>
     </Provider>
    );
}