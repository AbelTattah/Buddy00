import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styles from "../Styling/styles"; // Importing the styles from the styles file
import { useState, useEffect } from "react"; // Importing the useState and useEffect component from react
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Importing the getAuth and createUserWithEmailAndPassword from firebase/auth
import { setDoc, doc } from "firebase/firestore"; // Importing the setDoc and doc from firebase/firestore
import { db } from "../firebase"; // Importing the db from the firebase
import { useFonts } from "expo-font"; // Importing the useFonts from expo-font
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; // Importing the KeyboardAwareScrollView from react-native-keyboard-aware-scroll-view

// Register component
export default function Register({ navigation }) {
  const [sid, setSid] = useState(0); // Student ID state
  const [nameid, setNameid] = useState(""); // Name state
  const [pass, setPass] = useState(""); // Password state
  const [pass1, setPass1] = useState(""); // Confirm password state
  const [email, setEmail] = useState(""); // Email state
  const [regg, setRegg] = useState("rnd"); // Registration state
  const [sign, setSign] = useState(false); // Sign up state
  
  // function to create user collection in firestore
  async function createUserCollection() {
    try {
      // Add a new document in collection "users"
      const docRef = await setDoc(doc(db, "users", `user/buddy/${email}`), {
        SNAME: nameid,
        STUID: sid,
      });
      console.log(docRef.response);
      console.log("Document written with ID: ", email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  // function to create user document in mongodb
  async function createMongoDBdoc() {
    fetch("https://buddy00.onrender.com/updateR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Update: [],
        SID: sid,
      }),
    }).then((error) => {
      console.log(error);
    });
  }

  // function to sign up user
  async function signUp() {
    const auth = getAuth();
    if (pass1 == pass && email !== "" && nameid != "") {
      // Sign up user
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          createUserCollection();
          createMongoDBdoc();
        })
        .then(() => {
          // Set registration state
          setRegg("inp");
          // Set registration state
          setTimeout(() => {
            setRegg("succ");
          }, 3000);
          // Navigate to login page
          setTimeout(() => {
            navigation.navigate("Login");
          }, 4500);
        })
        .catch((error) => {
          // Handle errors
          const errorMessage = error.message;
          console.log(errorMessage);
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            setSign(false);
          } else if (
            errorMessage === "Firebase: Error (auth/email-already-in-use)."
          ) {
            setSign(true);
          }
          // ..
        });

      if (sign === true) {
        setRegg("prob");
      } else if (sign === false) {
        setRegg("prob1");
      } else {
        setRegg("prob1");
      }
    } else {
      setRegg("prob2");
    }
  }
  
  // Load fonts
  const [fontsLoaded] = useFonts({
    FredokaBold: require("../fonts/FredokaBold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.ReggMain}>
      <Text style={styles.ReggLogoText}>Sign Up for Buddy</Text>
      <KeyboardAvoidingView style={styles.ReggIn} behavior="padding">
        {/* Sign up inputs */}
        <TextInput
          style={styles.ReggTextIn}
          placeholder="    SID"
          autoCapitalize="none"
          onChangeText={(text) => setSid(text)}
        />
        <TextInput
          style={styles.ReggTextIn}
          placeholder="    name"
          autoCapitalize="none"
          onChangeText={(text) => setNameid(text)}
        />
        <TextInput
          style={styles.ReggTextIn}
          inputMode="email"
          placeholder="    email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry
          style={styles.ReggTextIn}
          placeholder="    password"
          autoCapitalize="none"
          onChangeText={(text) => setPass(text)}
        />
        <TextInput
          secureTextEntry
          style={styles.ReggTextIn}
          placeholder="    confirm password"
          autoCapitalize="none"
          onChangeText={(text) => setPass1(text)}
        />
      </KeyboardAvoidingView>
      <KeyboardAwareScrollView
        style={styles.regCheckmain}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.ReggButtonView}>
          <TouchableOpacity style={styles.loginButton} onPress={() => signUp()}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <>
          {regg === "inp" ? (
            <>
              <Text>
                Signing you up... <ActivityIndicator color="#2407f2" />
              </Text>
            </>
          ) : regg === "prob" ? (
            <>
              <Text>You have an account</Text>
            </>
          ) : regg === "prob1" ? (
            <>
              <Text>A Network error occured</Text>
            </>
          ) : regg === "prob2" ? (
            <Text>The form is not complete</Text>
          ) : regg === "succ" ? (
            <>
              <Text>Sign Up Succesful ,Go to login Page!</Text>
            </>
          ) : (
            <>
              <Text>Buddy v.1.0</Text>
            </>
          )}
        </>
      </KeyboardAwareScrollView>
    </View>
  );
}
