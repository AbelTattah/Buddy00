// I will  rendering a pdf here

import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import TimetableComp from '../Components/timetable';

export default function Examt ({navigation}) {
    

        return (
         
              <TimetableComp url='https://download1530.mediafire.com/ejcsahb0wxygrYPuUXcUT6En6tiXOXMwb2T3KQ3UvvEdH2rAZIOAFMCrCCZql1kwmMDBBvPfwI933S1a2HD9vuKhX-RoFD1LQaIV00UrISJxrRVntSiYaRUeF6LpSSoFTe7TbEp_RDmBPSDbkV4pTogsBZb0ocRF_n1lXxDLn1kMtg/rud77ns1b7n1v5f/PROVISIONAL+EXAMINATIONS+TIMETABLE+-+FIRST+SEM+-+2023.2024+-+LVL+200-400.pdf' />
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