import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native"; // Importing components from react-native
import React, { useState } from "react"; // Importing the useState hook from react
import axios from "axios"; // Importing axios

import styles from "../Styling/styles"; // Importing the styles from the styles file
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importing the createNativeStackNavigator from @react-navigation/stack
import { NavigationContainer } from "@react-navigation/native"; // Importing the NavigationContainer from @react-navigation/native
import PqRender from "./pqRender"; // Importing the pqRender component
import { userContext } from "../store/user";
import { useContext } from "react";

/*

This is the page that displays the past questions for the user to select from

1. The user enters the course code of the past question he/she wants to view
2. The input of the user is matched to particular array containing the api enpoints
of the course code he or she entered.
3. This array containing the endpoints is obtained from the api when the past question is searched for
4. The each endpoint is matched to a state which is used to render the pdf

The list of past questions relating to that particular course will be displayed in a list when the
steps above are completed.

*/

const Stack = createNativeStackNavigator();

// Load fonts
const PastQuestions = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [endpoints, setEndpoints] = useState([]);

  const context = useContext(userContext);

  // Get endpoints for past Question pdfs from api
  async function getEndpoints(couseCode) {
    try {
      console.log(code);
      const response = await axios.get(
        `https://buddy-backend-ti17.onrender.com/pasco/get/${code}`
      );
      setEndpoints(response.data.endPoints);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  // Search for past questions

  const searchHandler = () => {
    setLoading(true);
    getEndpoints();
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  // Navigate to pdf view
  const navigationHandler = () => {
    setTimeout(() => {
      navigation.navigate("PQ");
    }, 1000);
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        backgroundColor: "#fff",
      }}
    >
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 20,
          height: 60,
          width: 300,
          marginBottom: 20,
          padding: 10,
        }}
        placeholder="Enter course Code eg. MATH123"
        onChangeText={(text) => setCode(text)}
      />
      <View>
        <View>
          <>
          <TouchableOpacity
            style={{
              width: 70,
              height: 30,
              marginLeft:240,
              display: "flex",
              justifyContent: "center",

              backgroundColor: "#7979FF8e",
              zIndex: 1,
            }}
            onPress={() => {
              searchHandler();
            }}
          >
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
            {loading ? (
              <View
                style={{
                  height: 300,
                  width: 300,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  padding: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator />
              </View>
            ) : (
              <>
                <ScrollView
                  style={{
                    height: 300,
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    padding: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  {endpoints.map((endpoint, i) => (
                    <TouchableOpacity
                      key={i}
                      style={{
                        width: 300,
                        height: 86,
                        backgroundColor: "#7979FF8e",
                        borderColor: "black",
                        borderRadius: 20,
                        justifyContent: "center",
                        margin: 10,
                        marginRight: 10,
                      }}
                      onPress={() => {
                        context.setPdf(endpoint);
                        navigationHandler();
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {endpoint}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </>
            )}
          </>
        </View>
      </View>
    </View>
  );
};

const PQNav = ({ navigation }) => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen name="Past Questions" component={PastQuestions} />
        <Stack.Screen
          name="PQ"
          options={{
            title: "Past Question",
          }}
          component={PqRender}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PQNav;
