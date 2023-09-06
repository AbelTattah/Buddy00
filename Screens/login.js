import {View,Text,Button, KeyboardAvoidingView,TextInput} from 'react-native';
import styles from '../Styling/styles';
import { useState } from 'react';




export default function Login({navigation}) {

 var [sid,setSid] = useState(0);
 var [nameid,setNameid] = useState('');
 var [pass,setPass]= useState('');
 var [course,setCourse]= useState([]);
 var [suds,SetSuds] =useState({})


function Login(){

    async function fetchData()  {
        fetch('https://buddy00.onrender.com/buddy') 
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .then(()=>console.log(suds))
        .catch((error)=>console.log("error"))          
        .finally(()=>setLddd('yes'));
    };

   


}

















    return (
     <View style={styles.loginMain}>
        <KeyboardAvoidingView style={styles.loginIn} behavior='padding'>
        <TextInput style={styles.loginTextIn}  placeholder='Enter SID' autoCapitalize='none' onChangeText={(text)=>setSid(text)} />
        <TextInput style={styles.loginTextIn} placeholder='password' autoCapitalize='none' onChangeText={(text)=>setPass(text)} />
        </KeyboardAvoidingView>

        <Button title='Login' onPress={()=>navigation.navigate('App1')}></Button>
        <View style={styles.regButtonView}>
        <Text>New to Buddy?</Text>
        <Button  title='Register' onPress={()=>navigation.navigate('Register')}></Button>
        </View>
     </View>
    );
}