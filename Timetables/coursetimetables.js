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
             
             <TouchableOpacity style={styles.meTopButtons} onPress={()=>navigation.navigate("Computer")}>
                <Text style={styles.meTopButtonText}>Computer Science</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.meTopButtons}>
                <Text style={styles.meTopButtonText} onPress={()=>navigation.navigate('Mathematics')} >Mathematics</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.meTopButtons} onPress={()=>navigation.navigate("Statistics")}>
                <Text style={styles.meTopButtonText}>Statistics</Text>
             </TouchableOpacity>
           </View>
        </View>  
    </View>
    )
}


const ComputerScience = ({navigation}) => {
    return(
           <TimetableComp url='https://download1322.mediafire.com/04cox35gbf2ggbnaS_-wSyQgOWoOC-CsE_hD83LDS435D0gvv-f0wNRmDzmzmITNej47uwIhpmN-UUwnzFltpGbaNlztLVpHW-5_zzNuMWPLGxtN3sDjCQQ-NuEctZpII9aVlvR1I9Y7Py7LL79QiOwzz6BQHBG6A0BKsp1lVgoW2GM/t7s1q5xplwlnxyv/timetable.pdf' />
    );
} 


const Mathematics = ({navigation}) => {
    return(
          <TimetableComp url='https://download1592.mediafire.com/ilg0zjuo909grdipL-Ns8ji7hTIz854IQwrienkIgSUHF3LCuIQcGXlm6p0SzC1bCN3-3KX8kP_C6iWwaiXUPof-WdHrYKV9cdrIT2HfkWTWnI0UpX49DQpOYXpeL4VOKKmvDaWM02AT6rNDS_tbLQC_ovOShvKfAmtVh2gYN3KfDnM/7lh46inqi0kh169/Maths_Dept_Timetable-SEM-1-2023-2024+-.pdf' />
    );
}


const Statistics = ({navigation}) => {
    return(
         <TimetableComp url='https://download1073.mediafire.com/yrfgp9kiw0lg07f7EEp7ktKxHwBL4Or4UnCzV1A56AZqYRhyAA5UKYK8U38-Jd9F3PRReSNuYfIq52ihz8Xdf7RWrAzgTyo3zozbnJJqej6z7dd5KV_xGHqOgqHzmPLOhIEAyVkoBDx2ZADQS1wdp921yRIBGZrbf2x63nauFe2symo/if67exe0w9mmq9a/First+Semester+2023_2024+_PROVISIONAL_12_10_2023.pdf' />
    );
}






export default function CourseTimetables() {
    return(
        <NavigationContainer independent={true}>
       <Stack.Navigator >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Computer" component={ComputerScience} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Mathematics" component={Mathematics}/>
       </Stack.Navigator>
       </NavigationContainer>
    )
}