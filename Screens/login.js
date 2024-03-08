import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from "react-native"; // Importing components from react-native
import styles from "../Styling/styles"; // Importing the styles from the styles file
import { useEffect, useState } from "react"; // Importing the useEffect and useState component from react
import { useFonts } from "expo-font"; // Importing the useFonts from expo-font
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Importing the getAuth and signInWithEmailAndPassword from firebase/auth
import { db } from "../firebase"; // Importing the db from the firebase
import { doc, getDoc } from "firebase/firestore"; // Importing the doc and getDoc from firebase/firestore
import Image from "../assets/schoolimagecopy.jpg";
import { userContext } from "../store/user";
import { useContext } from "react";
//import AsyncStorage from '@react-native-async-storage/async-storage';

// Login component
export default function Login({ navigation }) {
  const [emaill, setEmaill] = useState(""); // Email state
  const [pass, setPass] = useState(""); // Password state
  const [suds, setSuds] = useState({}); // User data state
  const [regg, setRegg] = useState("Hm"); // Registration state
  const [acc, setAcc] = useState(""); // Account state
  const auth = getAuth(); // Firebase auth
  const context = useContext(userContext);

  useEffect(() => {
    // Get user data from firestore
    DataRead();
  }, [emaill]);

  useEffect(() => {
    setTimeout(() => {
      DataRead();
    }, 500);
  }, [acc]);

  // Sign in function
  async function signIn() {
    signInWithEmailAndPassword(auth, emaill, pass)
      .then(() => {
        // Read user data from firestore
        DataRead();
        // Set registration state
        setRegg("inp");
        // Set user data in redux store
        setTimeout(() => setRegg("succ"), 2000);
        context.setAuthState(true);
      })
      .then(() => {
        setTimeout(() => {
          // Clear password state
          setPass("");
          // Navigate to the main app
          navigation.navigate("App1");
        }, 3000);
        // Clear text inputs
        setTimeout(() => this.textInput.clear(), 4000);
        context.setName(suds.SNAME);
        context.setSid(suds.STUID);
        setTimeout(() => setRegg(""), 4000);
      })
      .catch((error) => {
        console.log(error.message);
        setRegg("prob");
      });
  }

  // function to read user data from firestore
  async function DataRead() {
    // Get user data from firestore
    const docRef = doc(db, `users/user/buddy/${emaill}`);
    const docSnap = await getDoc(docRef);
    // Check if user data exists and set user data state
    if (docSnap.exists()) {
      setSuds(docSnap.data());
      console.log(suds);
      setAcc("loop");
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  // Load fonts
  const [fontsLoaded] = useFonts({
    FredokaBold: require("../fonts/FredokaBold.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  // Render the page
  return (
    <View style={styles.loginMain}>
      <View style={styles.loginLogo}>
        <ImageBackground
          style={{
            width: 600,
            height: 450,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -150,
          }}
          source={Image}
        >
          <Text
            style={{
              backgroundColor: "white",
              padding: 30,
              borderRadius: 10,
              fontSize: 100,
              elevation: 5,
              fontFamily: "FredokaBold",
              color: "blue",
              marginRight: 25,
            }}
          >
            Buddy
          </Text>
        </ImageBackground>
      </View>
      <KeyboardAvoidingView style={styles.loginIn} behavior="padding">
        {/* Login inputs */}
        <TextInput
          style={styles.loginTextIn}
          inputMode="email"
          placeholder="   email"
          autoCapitalize="none"
          onChangeText={(text) => setEmaill(text)}
        />
        <TextInput
          secureTextEntry
          ref={(input) => {
            this.textInput = input;
          }}
          style={styles.loginTextIn}
          placeholder="   password"
          autoCapitalize="none"
          onChangeText={(text) => setPass(text)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.loginButton} onPress={() => signIn()}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.loginTextt1}>Forgot password?</Text>
      <Text style={styles.loginTextt2}>Privacy</Text>
      <View style={styles.regButtonView}>
        <Text>New to Buddy?</Text>
        <TouchableOpacity
          style={styles.loginReg}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.loginRegText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <>
        {regg === "inp" ? (
          <>
            <Text>
              Logging in ... <ActivityIndicator color="#2407f2" />
            </Text>
          </>
        ) : regg === "prob" ? (
          <>
            <Text>Wrong email or password!</Text>
          </>
        ) : regg === "succ" ? (
          <>
            <Text>Log In Succesful</Text>
          </>
        ) : regg === "no" ? (
          <>
            <Text>You do not have an accout. Go to the registration page</Text>
          </>
        ) : (
          <>
            <Text>Buddy v.1.0</Text>
          </>
        )}
      </>
    </View>
  );
}
