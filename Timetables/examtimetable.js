// I will  rendering a pdf here

import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import PdfComp from '../Components/timetable';

export default function Examt ({navigation}) {
    

        return (
         
              <PdfComp url='https://buddy-backend-ti17.onrender.com/pdf/examtimetable' />
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