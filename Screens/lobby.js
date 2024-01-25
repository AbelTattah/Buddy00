import {
  Button,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import * as React from "react";
import styles from "../Styling/styles";
import { useState, useEffect } from "react";
import Weather from "../Components/weather";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Updates from "../Updates/updates";
import { useFonts } from "expo-font";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Updatesmin from "../Updates/Updatesmin";
import PersonalTimetable from "../Timetables/personalTimetable";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

import { setCourse, setName, setSid } from "../redux/actions";
import CourseTimetables from "../Timetables/coursetimetables";
import PQNav from "../PastQuestions/pastQuestions";

function Lobby1({ navigation }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [suds, setSuds] = useState({});
  const dispatch = useDispatch();

  const { namee, email } = useSelector((state) => state.userReducer);
  const [fontsLoaded] = useFonts({
    FredokaBold: require("../fonts/FredokaBold.ttf"),
  });
  const emaill = email;
  const path = "users/user/buddy/" + emaill;

  // The function below fetches time from google
  async function fetchTime() {
    // TODO: Use the response to create logic for dynamic greeting

    const URL_REGISTER = "https://www.google.com";
    try {
      const response = await axios.get(`${URL_REGISTER}`);
      setTimee(response.headers.get("Date"));
      if (response.status !== 200) {
        console.log("Status Code: " + response.status);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchAndDispatch = () => {
    async function ReadData() {
      console.log(path);
      const docRef = doc(db, path);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setSuds(docSnap.data);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    ReadData();
  };

  if (!fontsLoaded && dataLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <View style={styles.Homepage}>
        <View style={styles.dashboardTopSection}>
          <Text style={styles.lobbyGreeting}>Greeting</Text>
        </View>
        <Text style={styles.dashboardName}>{namee}</Text>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
          onLongPress={() => {
            navigation.navigate("Updates", { nava: 99 });
          }}
        >
          <View style={styles.LobbyUpdates}>
            <TouchableOpacity
              style={styles.LobbyMinButton}
              onPress={() => {
                navigation.navigate("Updates");
              }}
            >
              <Text>Updates</Text>
            </TouchableOpacity>
            <Updatesmin />
          </View>
        </Pressable>
        <View style={styles.lobbyQuick}>
          <TouchableOpacity style={styles.lobbyQuickButton}>
            <Text
              style={styles.LobbyQuickButtonText}
              onPress={() => {
                navigation.navigate("ttables");
              }}
            >
              Timetables
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lobbyQuickButton0}
            onPress={() => navigation.navigate("PQ")}
          >
            <Text style={styles.LobbyQuickButtonText}>PastQuestions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
}

const stack = createNativeStackNavigator();

export default function Lobby({ navigation }) {
  // const {namee} = useSelector(state=>state.userReducer);
  return (
    <NavigationContainer independent>
      <stack.Navigator>
        <stack.Screen
          name="Lobby1"
          component={Lobby1}
          options={{ headerShown: false }}
        />
        <stack.Screen name="Updates" component={Updates} options={{}} show />
        <stack.Screen
          name="ttables"
          component={CourseTimetables}
          options={{
            title: "Timetables",
          }}
        />
        <stack.Screen name="PQ" component={PQNav} options={{}} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

/*

New courses have to be selected each semester for the timetable

*/
