import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import styles from "../Styling/styles";

const Direction = ({ navigation }) => {
  return (
    <View style={styles.directionModal}>
      <Text />
      <TextInput placeholder="Where are you?" style={styles.Input} />
      <Text />
      <TextInput placeholder="Where do you want to go?" style={styles.Input} />
    </View>
  );
};

export default Direction;
