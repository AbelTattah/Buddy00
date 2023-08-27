import { View,Text,TouchableOpacity } from "react-native";
import styles from "../Styling/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PersonalTimetable from "../Timetables/personalTimetable";

const stack = createNativeStackNavigator();

 function MePage({navigation}) {
    return (
        <View style={styles.me}>
            <View style={styles.meTopSection}>
            <Text style={styles.meTopText}>Personal</Text>
               <View style={styles.meTopButtonView}>
                 <TouchableOpacity style={styles.meTopButtons} onPress={()=>navigation.navigate('PerT')}>
                    <Text style={styles.meTopButtonText}>Personalized Timetables</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText}>Reminders</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText}>Notes</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText}>Other Timetables</Text>
                 </TouchableOpacity>
               </View>
            </View>
            <View style={styles.meMiddeSection}>
            <Text style={styles.meMiddeTopText}>Exams</Text>
            <View style={styles.meMiddleButtonView}>
            <TouchableOpacity style={styles.meMiddleButtons}>
                    <Text style={styles.meMiddleButtonText}>Personalized Timetables</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meMiddleButtons}>
                    <Text style={styles.meMiddleButtonText}>Reminders</Text>
                 </TouchableOpacity>
                 </View>
            </View>
            <View style={styles.meBottomSection}>
            <Text style={styles.meTopButtonText}>Log</Text>
            <Text style={styles.meTopButtonText}>Next Class in 30mins</Text>
            </View>
        </View>
    );
}