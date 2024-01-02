import { View, Text } from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import { StyleSheet } from 'react-native';

export default function TimetableComp({url}) {
  const source = { uri: url, cache: true };

  return (

        <Pdf
            trustAllCerts={false}
            showsVerticalScrollIndicator = {true}
            source={source}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            style={stylee.pdf}/>

)
}


const stylee = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'flex-start',
alignItems: 'center',
marginTop: 25,
},
pdf: {
flex:1,
}
});