import { View,Text,TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback} from "react-native";
import styles from "../Styling/styles";
import Updates from "../Updates/updates";
import Task from '../Components/todo';
import { useState } from "react";
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";




export default function TODO({navigation}) {

   /* const [isOpen, setIsOpen] = useState(false);
    const hide = setIsOpen(false);
    const show = setIsOpen(true);*/

    return (  
            <View style = {styles.todoItemsContainer}>
                <View styles = {styles.taskContainer}>
                    <ScrollView>
                        <Task text={'12 am'}/>
                        <Task text={'1 am'}/>
                        
                    </ScrollView>
                </View>    
                <TouchableWithoutFeedback style = {styles.adddTask}>
                    <Text>+</Text>
                </TouchableWithoutFeedback>
                <Modal 
                    visible={false}
                    animationType="slide"
                    onRequestClose={() => {setIsOpen(false)}}>
                    <View style = {styles.modalView}>

                    </View>
                </Modal>
        </View>
            
    );
}