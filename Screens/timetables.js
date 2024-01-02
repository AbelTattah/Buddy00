import { View,Text,TouchableOpacity } from "react-native";
import styles from "../Styling/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import PersonalTimetable from "../Timetables/personalTimetable";
import Examt from "../Timetables/examtimetable";
import CourseTimetables from "../Timetables/coursetimetables";

const stack = createNativeStackNavigator();

 function MePage({navigation}) {
    return (
        <View style={styles.me}>
            <View style={styles.meTopSection}>
               <View style={styles.meTopButtonView}>
                 
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText} onPress={()=>navigation.navigate('Course')} >Course Timetables</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText} onPress={()=>navigation.navigate('Examt')} >Exam Timetable</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons} onPress={()=>navigation.navigate('PerT')}>
                    <Text style={styles.meTopButtonText}>Personalized Timetable</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText}>Past Questions</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.meTopButtons}>
                    <Text style={styles.meTopButtonText}>Other Publications</Text>
                 </TouchableOpacity>
                 
               </View>
            </View>
          
         
        </View>
    );
}
function MeTitle() {
    return(
      <View>
        <Text style={{
          marginLeft:26,
        fontWeight:700,
        fontSize:23,
        color:'white'
        }}>Me</Text>
      </View>
    );
  };
export default function Timetables({navigation}) {
    return (
        <NavigationContainer independent={true}>
         <stack.Navigator>
         <stack.Screen
        component={MePage}
        name="Me"
        options={{headerTintColor:'white',title:'',tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={32} color='black' />
          ),
          headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
          }
        }}
      />
            <stack.Screen 
        name='PerT'
        component={PersonalTimetable}
        options = {{title:'Personal Timetable',headerTintColor:'blue',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#eee',
          }}} />
           <stack.Screen 
        name='Examt'
        component={Examt}
        options = {{title:'Exam Timetable',headerTintColor:'blue',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#eee',
          }}} />
             <stack.Screen 
        name='Course'
        component={CourseTimetables}
        options = {{title:'Course Timetables',headerTintColor:'blue',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#eee',
          }}} />
         </stack.Navigator>
        </NavigationContainer>
    )
}

