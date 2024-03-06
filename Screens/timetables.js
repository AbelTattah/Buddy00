import { View, Text, TouchableOpacity } from "react-native"; // Importing components from react-native
import styles from "../Styling/styles"; //  Importing the styles from the styles file
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importing the createNativeStackNavigator from @react-navigation/native-stack
import { NavigationContainer } from "@react-navigation/native"; // Importing the NavigationContainer from @react-navigation/native
import Examt from "../Timetables/examtimetable"; // Importing the exam timetable component
import CourseTimetables from "../Timetables/coursetimetables"; // Importing the course timetables component
import Publications from "../Publications/publications"; // Importing the publications component

// Create a stack navigator
const stack = createNativeStackNavigator();

// Main page for the timetables
function MePage({ navigation }) {
  return (
    <View style={styles.me}>
      <View style={styles.meTopSection}>
        <View style={styles.meTopButtonView}>
          <TouchableOpacity style={styles.meTopButtons}>
            <Text
              style={styles.meTopButtonText}
              onPress={() => navigation.navigate("Course")}
            >
              Course Timetables
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.meTopButtons}>
            <Text
              style={styles.meTopButtonText}
              onPress={() => navigation.navigate("Examt")}
            >
              Exam Timetable
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.meTopButtons}
            onPress={() => navigation.navigate("Publications")}
          >
            <Text style={styles.meTopButtonText}>Other Publications</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Export the timetables component
export default function Timetables({ navigation }) {
  return (
    <NavigationContainer independent>
      <stack.Navigator>
        <stack.Screen
          component={MePage}
          name="Me"
          options={{
            headerTintColor: "white",
            title: "",
            headerTintColor: "white",
            headerShadowVisible: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <stack.Screen
          name="Examt"
          component={Examt}
          options={{
            title: "Exam Timetable",
            headerTintColor: "blue",
            headerShadowVisible: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: "#eee",
            },
          }}
        />
        <stack.Screen
          name="Course"
          component={CourseTimetables}
          options={{
            headerShown: false,
            title: "Course Timetables",
            headerTintColor: "blue",
            headerShadowVisible: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: "#eee",
            },
          }}
        />
        <stack.Screen
          name="Publications"
          component={Publications}
          options={{
            headerShown: false,
            headerTintColor: "blue",
            headerShadowVisible: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: "#eee",
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
