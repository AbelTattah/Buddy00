import * as React from "react"; // Importing components from react
import Lobby from "./Screens/lobby"; // Importing the lobby component
import { NavigationContainer } from "@react-navigation/native"; // Importing the NavigationContainer from @react-navigation/native
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importing the createNativeStackNavigator from @react-navigation/native-stack
import { Button, View, Text, Image } from "react-native"; // Importing components from react-native
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Importing the createBottomTabNavigator from @react-navigation/bottom-tabs

// Importing the styles from the styles file
import Settings from "./Screens/settings";
import Timetables from "./Screens/timetables";
// Rest of the import statements
import Login from "./Screens/login";
import { Provider, useSelector } from "react-redux";
// Importing the store from the redux store
import { store } from "./redux/store";
import Register from "./Screens/register";
import { StatusBar } from "expo-status-bar";

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
  const { sin } = useSelector((state) => state.userReducer);

  return (
    <>
      {sin ? (
        <NavigationContainer independent>
          <Tab.Navigator initialRouteName="Lobby">
            <Tab.Screen
              name="Lobby"
              component={Lobby}
              gestureEnabled
              options={{
                headerTitle: () => <LobbyTitle />,
                tabBarIcon: (color, size) => (
                  <Image
                    source={require("./assets/documenticon.jpeg")}
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
                headerTintColor: "#000",
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Tab.Screen
              component={Timetables}
              name="Timetables"
              options={{
                headerTitle: () => (
                  <Text style={{ fontFamily: "FredokaBold", fontSize: 20 }}>
                    Timetables
                  </Text>
                ),
                tabBarIcon: (color, size) => (
                  <Image
                    source={require("./assets/timetableicon.jpeg")}
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
                headerTintColor: "#000",
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
                },
              }}
            />

            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                headerTitle: () => (
                  <Text style={{ fontFamily: "FredokaBold", fontSize: 20 }}>
                    Settings
                  </Text>
                ),
                tabBarIcon: () => (
                  <Image
                    source={require("./assets/settingsgearicon.png")}
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
                headerTintColor: "#000",
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
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
  return (<>
    <StatusBar style="dark" />
    <Provider store={store}>
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
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
}

/*
         TODO :
         1. Bottom Navigation     :Done
         2. Add swiping features that will enable user to navigate to other options.
         3. Make the maps component find the location of the user instantly.
*/
