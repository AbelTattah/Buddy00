// I will  rendering a pdf here

import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

export default function Examt ({navigation}) {
        const source = { uri: 'https://download1530.mediafire.com/e27s7j4f3q1g56BKU0Jo7KxBdB6GwzaGYRwpawyncLrPCh9JsK3Ns5GztzlOaS29yxayIPN_dnrr06IZVL9ydsNTjMMaU-xP3zRAQJXtWgUVoi-W6vg4M7vgxInTPq9JcZ-_cA6EnQWYhVkpTg4wltQTAmSAzLYAOpPRMc21FhXLpg/rud77ns1b7n1v5f/PROVISIONAL+EXAMINATIONS+TIMETABLE+-+FIRST+SEM+-+2023.2024+-+LVL+200-400.pdf', cache: true };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

        return (
            <View style={stylee.container}>
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
            </View>
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
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});