import { Text, View, TouchableOpacity, Pressable } from "react-native"; // Importing components from react-native
import * as React from "react"; // Importing react
import styles from "../Styling/styles"; // Importing the styles from the styles file
import Updates from "../Updates/updates"; // Importing the updates component
import { NavigationContainer } from "@react-navigation/native"; // Importing the NavigationContainer from @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importing the createNativeStackNavigator from @react-navigation/stack
import CourseTimetables from "../Timetables/coursetimetables"; // Importing the course timetables component
import PQNav from "../PastQuestions/pastQuestions"; // Importing the past questions component
import { useContext } from "react";
import { userContext } from "../store/user";

// First Page after login
function Lobby1({ navigation }) {
  function Greeting() {
    const currentTime = new Date().getHours();
    let greetingText;

    if (currentTime >= 5 && currentTime < 12) {
      greetingText = "Good morning!";
    } else if (currentTime >= 12 && currentTime < 18) {
      greetingText = "Good afternoon";
    } else {
      greetingText = "Good evening";
    }

    return (
      <Text style={{ fontSize: 28, textAlign: "center", marginVertical: 20 }}>
        {greetingText}
      </Text>
    );
  }

  const { name } = useContext(userContext);

  // Render the page
  return (
    <View style={styles.Homepage}>
      <Text style={styles.dashboardName}>
        {" "}
        <Greeting />, {name}
      </Text>
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
          <View style={styles.LobbyUpdateInner}>
            {/* Button to render the main updates component */}
            {/* Render Updates component partially */}
            <Updates />
          </View>
        </View>
      </Pressable>
      <View style={styles.lobbyQuick}>
        {/* Buttons for quick navigation */}
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
  );
}

// Stack Navigator for the lobby
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
            headerShown: false,
            title: "Timetables",
          }}
        />
        <stack.Screen
          name="PQ"
          options={{ headerShown: false }}
          component={PQNav}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

/*

New courses have to be selected each semester for the timetable

*/
