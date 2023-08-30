import React from "react";
import { Text, View, TextInput} from "react-native";
import styles from "../Styling/styles";


const Task = (props) => {
    return(
        <View>
            <View style = {styles.taskItem}>
                <View style  = {styles.taskTime}>
                    <Text style = {styles.timetxt}>{props.text}</Text>
                </View>
                <View style = {styles.taskItemField}>
                    <TextInput style = {styles.TaskInputField}/>
                </View>
            </View>
            
        </View>
    );
};

export default Task;
