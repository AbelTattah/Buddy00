
import React from 'react';
import { View,Text,KeyboardAvoidingView } from 'react-native';
import MapView,{Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import * as Location from 'expo-location';
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native';
import styles from '../Styling/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Direction from './direction';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

  function Nav1({navigation}) {
 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let {loc} =await Location.enableNetworkProviderAsync();
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  
  
  return (
    <>
    <View>

    </View>

    <View style={stylese.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      showsCompass={true}
      style={stylese.map}
      showsUserLocation={true}
      zoomEnabled={true}
      rotateEnabled={true}
     
    >
    </MapView>
  
    <View>
      <Button title='Directions' onPress={()=>navigation.navigate('direction')} />
    </View>
    </View>
    </>
  );
}


export default function Nav({navigation}) {

  return(<>
<NavigationContainer independent ={true}>
  <Stack.Navigator>
    <Stack.Screen 
      name='Nav1'
      component={Nav1}
      options={{headerShown:false}}
    />
      <Stack.Screen 
      name='direction'
      component={Direction}
      
      options={{headerShown:false,mode: 'modal',
    headerMode: 'none',
    cardStyle:{
      backgroundColor:"transparent",
      opacity:0.99
  }}}
    />
  </Stack.Navigator>
</NavigationContainer>
  </>);
}

const stylese = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 660,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

//M




