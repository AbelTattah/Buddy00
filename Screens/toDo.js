import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import styles from "../Styling/styles";
import Updates from "../Updates/updates";
import Task from '../Components/todo';




export default function TODO({navigation}) {
    return (       
            <View style = {styles.todoItemsContainer}>
            <ScrollView>
                <Task text={'12 am'}/>
                <Task text={'1 am'}/>
                <Task text={'2 am'}/>
                <Task text={'3 am'}/>
                <Task text={'4 am'}/>
                <Task text={'5 am'}/>
                <Task text={'6 am'}/>
                <Task text={'7 am'}/>
                <Task text={'8 am'}/>
                <Task text={'9 am'}/>
                <Task text={'10 am'}/>
                <Task text={'11 am'}/>
                <Task text={'12 pm'}/>
                <Task text={'1 pm'}/>
                <Task text={'2 pm'}/>
                <Task text={'3 pm'}/>
                <Task text={'4 pm'}/>
                <Task text={'5 pm'}/>
                <Task text={'6 pm'}/>
                <Task text={'7 pm'}/>
                <Task text={'8 pm'}/>
                <Task text={'9 pm'}/>
                <Task text={'10 pm'}/>
                <Task text={'11 pm'}/>
            </ScrollView>
            </View>
            
    );
}