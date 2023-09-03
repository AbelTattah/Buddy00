
import React from 'react';
import { View,Text } from 'react-native';
import MapView,{Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet} from 'react-native';



 export default function Nav({navigation}) {
  return (
    <>
    <View>
   <Text>Where are you?</Text>
   <Text>Where do you want to go?</Text>
    </View>

    <View style={stylese.container}>
    <MapView
    
      style={stylese.map}
      zoomEnabled={true}
      region={{
        latitude: 22.258,
        longitude: 71.19,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
    </MapView>
    </View>
    </>
  );
}

const stylese = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 400,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

