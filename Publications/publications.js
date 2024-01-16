/*

Steps for displaying timetables for a specific student
1. Have course course codes and respective links in front end for now
2. Validate user's courses for the semester and render the timetables accordingly
3. Make a page for recording user's courses for the semester

*/

import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../Styling/styles";
import { NavigationContainer } from "@react-navigation/native";
import TimetableComp from "../Components/timetable";

const Stack = createNativeStackNavigator();

const Main = ({navigation}) => {
    return(
        <View style={styles.me}>
        <View style={styles.meTopSection}>
           <View style={styles.meTopButtonView}>
             
             <TouchableOpacity style={styles.meTopButtons} onPress={()=>navigation.navigate("Aca")}>
                <Text style={styles.meTopButtonText}>AcademicCalendar</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.meTopButtons}>
                <Text style={styles.meTopButtonText} onPress={()=>navigation.navigate('Schfees')} >Schedule of fees</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.meTopButtons} onPress={()=>navigation.navigate("Handbook")}>
                <Text style={styles.meTopButtonText}>Student Handbook</Text>
             </TouchableOpacity>
           </View>
        </View>  
    </View>
    )
}


const StudentHandbook = ({navigation}) => {
    return(
           <TimetableComp url='https://buddybackend-0i8h.onrender.com/pdf/' />
    );
} 


const AcademicCalendar = ({navigation}) => {
    return(
          <TimetableComp url='https://buddybackend-0i8h.onrender.com/pdf/academiccalendar' />
    );
}


const ScheduleofFees = ({navigation}) => {
    return(
         <TimetableComp url='https://buddybackend-0i8h.onrender.com/pdf/fees' />
    );
}






export default function Publications() {
    return(
        <NavigationContainer independent={true}>
       <Stack.Navigator >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Aca" component={AcademicCalendar} />
        <Stack.Screen name="Schfees" component={ScheduleofFees} />
        <Stack.Screen name="Handbook" component={StudentHandbook}/>
       </Stack.Navigator>
       </NavigationContainer>
    )
}