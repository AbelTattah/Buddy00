import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../Styling/styles";
import { useState, useEffect } from "react";
import CheckBox from "react-native-check-box";
import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

import { db, database } from "../firebase";

import { useFonts } from "expo-font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const course = [];

export default function Register({ navigation }) {
  const [sid, setSid] = useState(0);
  const [nameid, setNameid] = useState("");
  const [pass, setPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [email, setEmail] = useState("");
  const [suds, setSuds] = useState({});
  const [sud1, setSud1] = useState({});
  const [regg, setRegg] = useState("rnd");
  var [check1, setCheck] = useState("MATH123");
  var [check2, setCheck] = useState("MATH122");
  var [check3, setCheck] = useState("DCIT101");
  var [check4, setCheck] = useState("DCIT102");
  var [check5, setCheck] = useState(false);
  var [check6, setCheck] = useState(false);
  const [isC1, setIsC1] = useState(false);
  const [isC2, setIsC2] = useState(false);
  const [isC3, setIsC3] = useState(false);
  const [isC4, setIsC4] = useState(false);
  const [isC5, setIsC5] = useState(false);
  const [sign, setSign] = useState(false);
  const c = 0;

  function Check(sub) {
    switch (sub) {
      case "MATH123":
        if (isC1) {
          setIsC1(false);
          course.splice(course.indexOf("MATH123"), 1);
        } else {
          setIsC1(true);
          course.push(sub);
          console.log(course);
        }
        break;
      case "MATH126":
        if (isC2) {
          setIsC2(false);
          course.splice(course.indexOf("MATH126"), 1);
        } else {
          setIsC2(true);
          course.push(sub);
          console.log(course);
        }
        break;
      case "DCIT101":
        if (isC3) {
          setIsC3(false);
          course.splice(course.indexOf("DCIT101"), 1);
        } else {
          setIsC3(true);
          course.push(sub);
          console.log(course);
        }
        break;
      case "UGRC150":
        if (isC4) {
          setIsC4(false);
          course.splice(course.indexOf("UGRC150"), 1);
        } else {
          setIsC4(true);
          course.push(sub);
          console.log(course);
        }
        break;
      default:
        console.log("This will not happen");
    }
  }

  async function createUserCollection() {
    try {
      const docRef = await setDoc(doc(db, "users", `user/buddy/${email}`), {
        COR: course,
        SNAME: nameid,
        STUID: sid,
      });
      console.log("Document written with ID: ", email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
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
  async function signUp() {
    const auth = getAuth();
    if (pass1 == pass && email != "" && nameid != "" && course != []) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          createUserCollection();
          createMongoDBdoc();
        })
        .then(() => {
          setRegg("inp");
          setTimeout(() => {
            setRegg("succ");
          }, 3000);
          setTimeout(() => {
            navigation.navigate("Login");
          }, 4500);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          if (
            errorMessage == "Firebase: Error (auth/network-request-failed)."
          ) {
            setSign(false);
          } else if (
            errorMessage == "Firebase: Error (auth/email-already-in-use)."
          ) {
            setSign(true);
          }
          // ..
        });

      if (sign == true) {
        setRegg("prob");
      } else if (sign == false) {
        setRegg("prob1");
      } else {
        setRegg("prob1");
      }
    } else {
      setRegg("prob2");
    }
  }

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
        <Text>Select Courses:</Text>
        <View style={styles.regCheck}>
          <Text>MATH123 </Text>
          <CheckBox
            onClick={() => {
              Check("MATH123");
            }}
            isChecked={isC1}
          />
        </View>
        <View style={styles.regCheck}>
          <Text>MATH126 </Text>
          <CheckBox
            onClick={() => {
              Check("MATH126");
            }}
            isChecked={isC2}
          />
        </View>
        <View style={styles.regCheck1}>
          <Text>DCIT101</Text>
          <CheckBox
            onClick={() => {
              Check("DCIT101");
            }}
            isChecked={isC3}
          />
        </View>
        <View style={styles.regCheck2}>
          <Text>UGRC150 </Text>
          <CheckBox
            onClick={() => {
              Check("UGRC150");
            }}
            isChecked={isC4}
          />
        </View>

        <View style={styles.ReggButtonView}>
          <TouchableOpacity style={styles.loginButton} onPress={() => signUp()}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <>
          {regg == "inp" ? (
            <>
              <Text>
                Signing you up... <ActivityIndicator color="#2407f2" />
              </Text>
            </>
          ) : regg == "prob" ? (
            <>
              <Text>You have an account</Text>
            </>
          ) : regg == "prob1" ? (
            <>
              <Text>A Network error occured</Text>
            </>
          ) : regg == "prob2" ? (
            <Text>The form is not complete</Text>
          ) : regg == "succ" ? (
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
