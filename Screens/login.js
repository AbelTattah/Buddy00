import { View, Text, Button, KeyboardAvoidingView, TextInput } from 'react-native';
import styles from '../Styling/styles';
import { useEffect, useState} from 'react';
import { Provider} from 'react-redux';
import { store } from '../redux/store';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { setName, setSin, setSid, setCourse,setEmail } from '../redux/actions';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";

export default function Login({ navigation }) {

  var [emaill, setEmaill] = useState('');
  var [pass, setPass] = useState('');
  var [suds, setSuds] = useState({});
  var [regg, setRegg] = useState('Hm');
  var [acc,setAcc] =useState('');
  const auth = getAuth();
  const dispatch = useDispatch();
  

  useEffect(()=>{
 DataRead();
  },[emaill]);

  useEffect(()=>{
    setTimeout(()=>{DataRead()},500);
  },[acc]);


  async function signIn() {
      signInWithEmailAndPassword(auth, emaill, pass)
      .then(() => {
        DataRead();
        setRegg('inp');
        setTimeout(() => setRegg('succ'), 2000);
        dispatch(setSin(true));
      })
      .then(()=>{
        setTimeout(() => { setPass(''); navigation.navigate('App1') }, 3000);
        setTimeout(() => this.textInput.clear(), 4000); 
        dispatch(setCourse(suds["COR"]));
        dispatch(setName(suds["SNAME"]));
        dispatch(setSid(suds["STUID"]));
        setTimeout(() => setRegg('hehe'), 4000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegg('prob');
      });
  }


  async function DataRead() {

    const docRef = doc(db, `users/user/buddy/${emaill}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setSuds(docSnap.data());
      console.log(suds);
      setAcc('loop');
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }
 

  let [fontsLoaded] = useFonts({
    "FredokaBold": require("../fonts/FredokaBold.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }


  return (
    <Provider store={store}>
      <View style={styles.loginMain}>
        <View style={styles.loginLogo}>
          <Text style={styles.loginLogoText}>Buddy</Text>
        </View>
        <KeyboardAvoidingView style={styles.loginIn} behavior='padding'>
          <TextInput style={styles.loginTextIn} inputMode='email' placeholder='   email' autoCapitalize='none' onChangeText={(text) => setEmaill(text)} />
          <TextInput secureTextEntry={true} ref={input => { this.textInput = input }} style={styles.loginTextIn} placeholder='   password' autoCapitalize='none' onChangeText={(text) => setPass(text)} />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.loginButton} onPress={() => signIn()}><Text style={styles.loginButtonText}>Log in</Text></TouchableOpacity>
        <Text style={styles.loginTextt1}>Forgot password?</Text>
        <Text style={styles.loginTextt2}>Privacy</Text>
        <View style={styles.regButtonView}>
          <Text>New to Buddy?</Text>
          <TouchableOpacity style={styles.loginReg} onPress={() => navigation.navigate('Register')}><Text style={styles.loginRegText}>  Sign Up</Text></TouchableOpacity>
        </View>
        <>{(regg == 'inp') ? (<>
          <Text>Logging in ... <ActivityIndicator color='#2407f2' /></Text>
        </>) : (regg == 'prob') ? (<>
          <Text>Wrong email or password!</Text>
        </>) : (regg == 'succ') ? (<>
          <Text>Log In Succesful</Text>
        </>) : (regg == 'no') ? (<>
          <Text>You do not have an accout. Go to the registration page</Text>
        </>) : (<>
          <Text>Buddy v.1.0</Text>
        </>)}</>
      </View>
    </Provider>
  );
}




//Test 