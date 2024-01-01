import { View, Text } from 'react-native';
import React from 'react';
import PDFReader from 'rn-pdf-reader-js';

export default function TimetableComp({uri}) {
  return (
    <View>         
       <PDFReader
             source={{ uri: uri, }}
        />
    </View>
  )
};