import {View,Text,Button, KeyboardAvoidingView,TextInput} from 'react-native';
import styles from '../Styling/styles';
import { useState,useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { setName,setSin,setSid,setCourse } from '../redux/actions';

export default function Login({navigation}) {

 var [siddd,setSiddd] = useState(0);
 var [nameid,setNameid] = useState('');
 var [pass,setPass]= useState('');
 var [suds,setSuds] =useState({});
 var [regg,setRegg] =useState('Hm');
 var c = 0;
 const {namee,course,sidd} = useSelector(state =>state.userReducer);
 const dispatch =useDispatch()
 

 useEffect(()=>{
    async function fetchData()  {
        fetch('https://buddy00.onrender.com/buddy')  
        .then((response)=>response.json())
        .then((json) => setSuds(json))
        .then(()=>console.log('Data fetched'))
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



async function Login() {

    
    for (var a =0; a < suds.length ; a++ ) {

        if ( suds[a]["SID"]==siddd ) {

            setRegg('inp');   
            dispatch (setSid(suds[a]["SID"]));
            if (suds[a]["Spass"]==pass) {
                 
                  dispatch (setName(suds[a]["SName"]));
                  dispatch (setCourse(suds[a]));
                 
                  dispatch (setSin(true));
                  console.log(namee);  
                   
                    setTimeout(()=>navigation.navigate('App1'),4000);
                    setTimeout(()=>setRegg('succ'),5000)
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

















    return (
    <Provider store={store}>
     <View style={styles.loginMain}>
        <KeyboardAvoidingView style={styles.loginIn} behavior='padding'>
        <TextInput style={styles.loginTextIn}  placeholder='Enter SID' autoCapitalize='none' onChangeText={(text)=>setSiddd(text)} />
        <TextInput style={styles.loginTextIn} placeholder='password' autoCapitalize='none' onChangeText={(text)=>setPass(text)} />
        </KeyboardAvoidingView>
        <Button title='Login' onPress={()=>Login()}></Button>
        <View style={styles.regButtonView}>
        <Text>New to Buddy?</Text>
        <Button  title='Register' onPress={()=>navigation.navigate('Register')}></Button>
        </View>
        <>{(regg=='inp')?(<>
<Text>Logging in ... <ActivityIndicator color='white'/></Text>
        </>):(regg =='prob')?(<>
<Text>Wrong password or SID!</Text>
        </>):(regg=='succ')?(<>
<Text>Sign In Succesful</Text>
        </>):(regg=='no')?(<>
            <Text>You do not have an accout. Go to the registration page</Text>
        </>):(<>
            <Text>Buddy v.1.0</Text>
        </>)}</>
     </View>
     </Provider>
    );
}