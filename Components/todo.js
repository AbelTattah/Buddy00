import React from "react";
import { Text, View, TextInput, Checkbox} from "react-native";
import styles from "../Styling/styles";


const Task = (onPress, props) => {
    return(
        <View style = {styles.taskItem}>
            <View style = {styles.taskLeft}>
                <View style  = {styles.taskCheck}></View>
                <View style = {styles.taskText}>
                    <TextInput style = {styles.TaskInputField}/>
                </View>
            </View>
            
        </View>
    );
};

export default Task;
