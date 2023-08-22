

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
import styles from './Styling/styles';
import Updates from './Screens/updates';
import { Text } from 'react-native';
import Settings from './Screens/settings';
const Stack = createNativeStackNavigator();
import { faLocation, faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Screens/navigate';








//The constant below allows the usage of the tab navigator
const Tab = createBottomTabNavigator();

//I am planning to nest the stack navigation below into the tab navigation in the App() function
function Others () {

  return(
    <NavigationContainer>    
    <Stack.Navigator>
    <Stack.Screen 
        name='Updates'
        component={Updates}
        options = {{title:'Updates',headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'blue',
          }}} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}
function HeaderTitlee() {
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

export default function App() {
  return (<>
  
    <NavigationContainer>
    
    <Tab.Navigator>
    <Tab.Screen 
          name="Lobby" 
         
          component={Lobby} gestureEnabled={true}
          options = { {headerTitle:()=><HeaderTitlee />,tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faMugSaucer} size={32} color='black' />
          ),
           headerShadowVisible:false,headerTintColor:'white', headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f'
          }}
          }
           
        />
        <Tab.Screen
        component={Nxtclass}
        name="Nxtclass"
        options={{title:"Me",tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={32} color='black' />
          ),
          headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f',}
        }}
      />
      
         <Tab.Screen 
        name='Updates'
        component={Updates} 
        options = {{title:'Updates',
        tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faRepeat} size={32} color='black' />
          ),headerTintColor:'white',headerShadowVisible:false, headerStyle: {
            elevation:0,shadowOpacity:0,borderBottomWidth:0,
            backgroundColor:'#00f'
            ,
        }}} />
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



/*TODO : 

        Apply A little bit of Object oriented approach.
        Make the Quotes change.
         1. Bottom Navigation
         2. Add swiping features that will enable user to navigate to other options.
         3. Make the maps component find the location of the user instantly.
      */