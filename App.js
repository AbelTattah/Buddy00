import * as React from 'react';
import Lobby from './Screens/lobby';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,TouchableOpacity } from 'react-native';
import Nxtclass from './Screens/nxtclass';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons/faRepeat';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { View } from 'react-native';
import { Text } from 'react-native';
import Settings from './Screens/settings';
const Stack = createNativeStackNavigator();
import { faCalendarDay, faLocation, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Screens/navigate';
import TODO from './Screens/toDo';
import Resources from './Screens/resources';
import Timetables from './Screens/timetables';
// Rest of the import statements
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './Screens/login'









//The constant below allows the usage of the tab navigator
const Tab = createBottomTabNavigator();

//I am planning to nest the stack navigation below into the tab navigation in the App() function

function LobbyTitle() {
  return(
    <View>
      <Text style={{
        marginLeft:226,
      fontWeight:700,
      fontSize:17,
      color:'white'
      }}>Lobby</Text>
    </View>
  );
};


function MeTitle() {
  return(
    <View>
      <Text style={{
        marginTop:29,
        FontFamily:"FredokaBold",
        marginLeft:26,
      fontWeight:700,
      fontSize:23,
      color:'white'
      }}>Timetables</Text>
    </View>
  );
};
function App1() {


  let [fontsLoaded] = useFonts({
    "FredokaBold":require("./fonts/FredokaBold.ttf"),
});


if (!fontsLoaded){
    return <AppLoading />;
}



  return (<>
  
    <NavigationContainer independent={true}>
    
    <Tab.Navigator initialRouteName='Lobby'>
  
           <Tab.Screen 
        name='Updates'
        component={TODO} 
        options = {{title:'TODO',
        tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faBell} size={32} color='black' />
          ),headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f'
            ,
        }}} />
    <Tab.Screen 
          name="Lobby" 
         
          component={Lobby} gestureEnabled={true}
          options = { {headerTitle:()=><LobbyTitle />,tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faMugSaucer} size={32} color='black' />
          ),
           headerShadowVisible:false,headerTintColor:'white', headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f'
          }}
          }
           
        />
      
      
      
          <Tab.Screen
        component={Timetables}
        name="Timetables"
        options={{headerTitle:()=><MeTitle />,tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCalendarDay} size={32} color='black' />
          ),
          headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'blue',}
        }}
      />
         <Tab.Screen 
        name='Navigator'
        component={Nav} 
        options = {{title:'Navigator',
        tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faLocation} size={32} color='black' />
          ),headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f'
            ,
        }}} />
       <Tab.Screen 
        name='Settings'
        component={Settings} 
        options = {{title:'Settings',
        tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGear} size={32} color='black' />
          ),headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f'
            ,
        }}} />
       
    </Tab.Navigator>
   
    </NavigationContainer>
    </>
  );
}



export default function App (){
  return(
    <NavigationContainer>
     
          <Stack.Navigator>
          
        <Stack.Screen 
        name='App1'
        component={App1}
        options={{headerShown:false}}
         />
        <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*TODO : 

        Apply A little bit of Object oriented approach.
        Make the Quotes change.
         1. Bottom Navigation     :Done 
         2. Add swiping features that will enable user to navigate to other options.
         3. Make the maps component find the location of the user instantly.
      */