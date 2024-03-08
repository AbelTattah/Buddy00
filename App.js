import * as React from "react"; // Importing components from react
import Lobby from "./Screens/lobby"; // Importing the lobby component
import { NavigationContainer } from "@react-navigation/native"; // Importing the NavigationContainer from @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View, Text, Image } from "react-native"; // Importing components from react-native
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Importing the createBottomTabNavigator from @react-navigation/bottom-tabs

// Importing the styles from the styles file
import Settings from "./Screens/settings";
import Timetables from "./Screens/timetables";
// Rest of the import statements
import Login from "./Screens/login";
// Importing the store from the redux store
import Register from "./Screens/register";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { userContext } from "./store/user";
import UserContextProvider from "./store/user";

// Create a stack navigator
const Stack = createNativeStackNavigator();

// The constant below allows the usage of the tab navigator
const Tab = createBottomTabNavigator();

function LobbyTitle() {
  return (
    <View>
      <Text
        style={{
          marginLeft: 30,
          fontWeight: "bold",
          fontSize: 23,
          fontFamily: "FredokaBold",
        }}
      >
        Buddy
      </Text>
    </View>
  );
}

function App1({ navigation }) {
  const { isLoggedIn } = useContext(userContext);
  return (
    <>
      {isLoggedIn ? (
        <NavigationContainer independent>
          <Tab.Navigator initialRouteName="Lobby">
            <Tab.Screen
              name="Lobby"
              component={Lobby}
              gestureEnabled
              options={{
                headerTitle: (
                  <Text
                    style={{
                      fontWeight: "700",
                      fontFamily: "FredokaBold",
                    }}
                  >
                    Buddy
                  </Text>
                ),
                headerTintColor: "#00f9",
                tabBarIcon: (color, size) => (
                  <Image
                    source={require("./assets/home-button.png")}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                ),
                tabBarLabelStyle: { fontSize: 14, fontFamily: "FredokaBold" },
                tabBarStyle: {
                  height: 80,
                  paddingBottom: 10,
                  backgroundColor: "white",
                  borderTopWidth: 1,
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  height: 110,
                  borderBottomWidth: 0,
                  backgroundColor: "#00f9",
                },
              }}
            />

            <Tab.Screen
              component={Timetables}
              name="Timetables"
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: "FredokaBold",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    Timetables
                  </Text>
                ),
                tabBarIcon: (color, size) => (
                  <Image
                    source={require("./assets/schedule.png")}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                ),
                tabBarLabelStyle: { fontSize: 14, fontFamily: "FredokaBold" },
                tabBarStyle: {
                  height: 80,
                  paddingBottom: 10,
                  backgroundColor: "white",
                  borderTopWidth: 2,
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  height: 110,
                  borderBottomWidth: 0,
                  backgroundColor: "#00f9",
                },
              }}
            />

            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      fontFamily: "FredokaBold",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    Settings
                  </Text>
                ),
                tabBarIcon: () => (
                  <Image
                    source={require("./assets/cogwheel.png")}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                ),
                tabBarLabelStyle: { fontSize: 14, fontFamily: "FredokaBold" },
                tabBarStyle: {
                  height: 80,
                  paddingBottom: 10,
                  backgroundColor: "white",
                  borderTopWidth: 2,
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  height: 110,
                  borderBottomWidth: 0,
                  backgroundColor: "#00f9",
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>You are not Logged in!</Text>
          <Button
            title="Login Screen"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      )}
    </>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Sign Up" }}
          />
          <Stack.Screen
            name="App1"
            component={App1}
            options={{
              headerShown: false,
              headerTintColor: "#00f9",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

/*
         TODO :
         1. Bottom Navigation     :Done
         2. Add swiping features that will enable user to navigate to other options.
         3. Make the maps component find the location of the user instantly.
*/
