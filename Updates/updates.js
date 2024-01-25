import React, { memo, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../Styling/styles";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faL } from "@fortawesome/free-solid-svg-icons";

import { useFonts } from "expo-font";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import { store } from "../redux/store";
import { Provider, useSelector } from "react-redux";

import axios from "axios";

/*
Student Update

This is the plan:
Students and sudo users are all users.

There are two update documents for each sudo user (lecturer,course rep)
and one update document for each student in the database.

One update document for the sudo user is the sender document that records all the sent messages.
The second update document is the document that stores sent messages for the sudo user

The student has a reciever document

So in there are two database collections in all, reciever and sender collections.

The reciever documents of both the students and sudo users are all stored in a recievers collection
The sender documents of the sudo users are stored in the sender collection.

The both the sender and reciever databases have schemas that are in this form:

{
  Update:{
    type:Array(Array of strings)
  }
  timestamp
}

All the documents are created when the user is signing up

Updates are sent by

1. Get the sender's document from the sender collection
2. Get the update array
3. Append the new update string to the end of the array,
4. Update the sender document with result of the mutation in the previous step with a put request
5. Repeat the steps above for each student's reciever document

The above steps will make sure all users recieve the updates sent and the sent update will be recorded in the sender's
sender document.

Deletion of an update
Both the sudo user and the student must be able to delete messages.
The sudo user must be able to delete his sent messages.
The sudo user must be able to delete his recieved messages.
The student must be able to delete his recieved messages.

Rendering the user's recieved messages.
1. Check whether the user is a sudo user
2. If the user is a sudo user,display the view that allow sending of updates
3. Get the user's reciever document from the database
4. Use a flatlist to render all the messages in reverse order
5. Make sure the list items are selectable

Step 5 will aid in message deletion

*/

const senderIDD = "";

export default function Updates({ route, navigation }) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [ld, setLd] = useState(false);
  const postt = useRef("");
  const [timee, setTimee] = useState("");
  const [nava, setNava] = useState(true);
  const [lddd, setLddd] = useState(true);
  const [rarr, setRarr] = useState({
    Update: ["Hello world"],
  });
  const [sarr, setSarr] = useState([]);
  let sudo = [];
  const [isSudo, setIsSudo] = useState(false);
  let parr;
  let parr1;
  const { sidd } = useSelector((state) => state.userReducer);
  const Iddd = "";
  let iddd = "";
  let senderIDD = "";

  // rarr[0]["Update"].reverse()
  const Flat = function List({ items }) {
    return (
      <FlatList
        data={items.reverse()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handlePress();
              }} // Pass the index to handlePress function
              onLongPress={() => handleLongPress(index)} // Pass the index to handleLongPress function
              style={{
                backgroundColor: selectedIndex === index ? "#9999FF" : "#9999",
                margin: 10,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  // The function below extracts the user's data from db object
  function filterbyid(array, sid) {
    return array.filter((obj) => obj.SID == sid);
  }

  // The function below fetches data from the update reciever's db and extracts the user's data from db object
  async function GetUserRecievedUpdates() {
    try {
      const response = await axios.get(
        "https://buddy-backend-ti17.onrender.com/update/updateR"
      );
      console.log("Reciever data has been fetched");
      setData(response.data);
      setRarr(filterbyid(data, sidd));
    } catch (error) {
      console.error(error);
    }
  }

  // The function below fetches data from the update sender's db
  async function GetUserSentUpdates() {
    try {
      const response = await axios.get(
        "https://buddy-backend-ti17.onrender.com/update/updateS"
      );
      console.log("Sender data has been fetched");
      setData1(response.data);
      setSarr(filterbyid(data1, sidd));
    } catch (error) {
      console.error(error);
    }
  }

  // Check whether user is a sudo user
  async function Checksudo() {
    try {
      const response = await axios.get(
        "https://buddy-backend-ti17.onrender.com/sudo/sudo"
      );
      sudo = response.data[0];
      for (let x = 0; x < sudo.User.length; x++) {
        if (sudo.User[x] == sidd) {
          setIsSudo(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchTime() {
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

  useEffect(() => {
    Checksudo();
    fetchTime();

    if (sudo) {
      GetUserRecievedUpdates();
      GetUserSentUpdates();
    } else {
      GetUserRecievedUpdates();
    }
  }, []);

  useEffect(() => {
    if (sudo) {
      GetUserRecievedUpdates();
      GetUserSentUpdates();
    } else {
      GetUserRecievedUpdates();
    }
  }, [timee]);

  useEffect(() => {
    if (sudo) {
      GetUserRecievedUpdates();
      GetUserSentUpdates();
    } else {
      GetUserRecievedUpdates();
    }
    setTimeout(() => {
      setLddd(false);
    }, 6000);
  }, [isSudo]);

  // The function below is used to send updates
  // One copy of the update is stored in the sender's database whiles all recipients recieve the update in their database

  async function sendUpdate() {
    GetUserRecievedUpdates();
    console.log(data.length);
    for (let v = 0; v < data.length; v++) {
      iddd = data[v]._id;
      fetchTime();
      console.log(data[v]._id);
      parr = data[v].Update;
      parr.push(postt.current + `   ${timee}`);
      axios
        .put(`https://buddy-backend-ti17.onrender.com/update/updateR/${iddd}`, {
          Update: parr,
        })
        .then((res) => {
          console.log(res.status);
        })
        .then((error) => {
          console.log(error);
        });
    }
    senderDbUpdate();
  }

  async function senderDbUpdate() {
    senderIDD = sarr._id;
    console.log(sarr);
    fetchTime();
    parr1 = sarr.Update;
    console.log(senderIDD);
    parr1.push(postt.current + `   ${timee}`);
    axios
      .put(
        `https://buddy-backend-ti17.onrender.com/update/updateS/${senderIDD}`,
        {
          Update: parr1,
        }
      )
      .then((res) => {
        console.log(res.status);
      })
      .then((error) => {
        console.log(error);
      });
  }

  const [selected, setSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // Store the array index in a variable

  const handleLongPress = (selectedIndex) => {
    setSelected(!selected);
    setSelectedIndex(selectedIndex); // Update the selectedIndex variable
  };

  const handlePress = (selectedIndex) => {
    setSelected(!selected);
    // Update the selectedIndex variable
    setSelectedIndex(null);
  };

  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          {isSudo == false ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {ld ? (
                <>
                  <Text>Loading updates</Text>
                  <ActivityIndicator size="large" color="blue" />
                </>
              ) : (
                <>
                  <Text> New(99+) Read(5)</Text>
                  <SafeAreaView style={style.flat}>
                    {lddd ? (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                        }}
                      >
                        <ActivityIndicator color="blue" size="large" />
                      </View>
                    ) : (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 0.7,
                          width: 350,
                        }}
                      >
                        <Text
                          style={{
                            marginRight: 260,
                          }}
                        >
                          Latest
                        </Text>

                        <FlatList
                          data={rarr[0].Update.reverse()}
                          renderItem={({ item, index }) => {
                            return (
                              <TouchableOpacity
                                onPress={() => {}} // Pass the index to handlePress function
                                onLongPress={() => handleLongPress(index)} // Pass the index to handleLongPress function
                                style={{
                                  backgroundColor: selected
                                    ? "#9999FF"
                                    : "#9999",
                                  margin: 10,
                                  padding: 20,
                                  borderRadius: 10,
                                }}
                              >
                                <Text>{item}</Text>
                              </TouchableOpacity>
                            );
                          }}
                        />
                      </View>
                    )}
                  </SafeAreaView>
                </>
              )}
            </View>
          ) : (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {ld ? (
                <>
                  <Text>Loading updates</Text>
                  <ActivityIndicator size="large" color="blue" />
                </>
              ) : (
                <>
                  <Text />

                  <SafeAreaView style={style.flat}>
                    {lddd ? (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                        }}
                      >
                        <ActivityIndicator color="blue" size="large" />
                      </View>
                    ) : (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 0.7,
                          width: 350,
                        }}
                      >
                        <Text
                          style={{
                            marginRight: 260,
                          }}
                        >
                          Latest
                        </Text>

                        <Flat items={rarr[0].Update} />
                      </View>
                    )}
                  </SafeAreaView>

                  {nava ? (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                        height: 110,
                        width: 350,
                        flexDirection: "row",
                      }}
                    >
                      <>
                        <TextInput
                          placeholder="                    Enter Update"
                          style={{
                            borderWidth: 1,
                            width: 220,
                            height: 90,

                            borderWidth: 1,
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                          }}
                          multiline
                          onChangeText={(text) => (postt.current = text)}
                        />
                        <View
                          style={{
                            flexDirection: "column",
                            gap: 2,
                          }}
                        >
                          <TouchableOpacity
                            title="Post"
                            onPress={() => {
                              sendUpdate();
                              senderDbUpdate();
                            }}
                          >
                            <Image
                              source={require("../assets/paperairplane.png")}
                              style={{ height: 80, width: 80 }}
                            />
                          </TouchableOpacity>
                        </View>
                      </>
                    </View>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </View>
          )}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  flat: {
    height: 450,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    height: 400,
    width: 400,
    marginBottom: 50,
  },
  text: {
    fontSize: 42,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

/*
Users should be able to
1.View updates *
2.Deletes updates from their account

Update senders should be able to
1.Delete sent updates globally

*/
