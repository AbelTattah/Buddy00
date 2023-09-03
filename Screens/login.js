import {View,Text,Button, KeyboardAvoidingView} from 'react-native';
import styles from '../Styling/styles';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";



export default function Login({navigation}){

   var [email,setEmail] = useState('');
   var [password,setPassword] =useState('');
   var [isLoggedIn,setIsLoggegIn]=useState(false);


const  SignUp=()=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
        const user =userCredentials.user;
        console.log(user.email);
    })
    .catch((error)=>alert(error.message));
   }

   const  SignIn=()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
        const user =userCredentials.user;
        console.log(user.email);
        navigation.navigate('App1')
    })
    .catch((error)=>alert(error.message));
   }

    return (
     <View style={styles.Login}>
        <Text>Login</Text>
        <KeyboardAvoidingView behavior='padding'>
        <TextInput value={email} placeholder='emai' autoCapitalize='none' onChangeText={(text)=>setEmail(text)} />
        <TextInput value={password} placeholder='password' autoCapitalize='none' onChangeText={(text)=>setPassword(text)} />
        </KeyboardAvoidingView>

        <Button title='Login' onPress={()=>SignIn()}></Button>
        <Button title='Register' onPress={()=>SignUp()}></Button>
        
     </View>
    );
}