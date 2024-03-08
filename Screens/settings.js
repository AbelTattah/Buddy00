import React from "react"; // Importing components from react
import { View, Text, TouchableOpacity } from "react-native"; // Importing components from react-native
import styles from "../Styling/styles"; // Importing the styles from the styles file
import { userContext } from "../store/user";
import { useContext } from "react";

// Settings page
export default function Settings({ navigation }) {
  const context = useContext(userContext);

  // Logout function
  function Logout() {
    context.setAuthState(false);
  }

  // Render the page
  return (
    <View style={styles.me}>
      <TouchableOpacity
        style={styles.meTopButtons}
        onPress={() => Logout()}
        title="logout"
      >
        <Text style={styles.meTopButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
