import React from 'react'
import { StyleSheet, Dimensions} from 'react-native'
import PdfComp from '../Components/timetable'

export default function Examt ({ navigation }) {
  return (
    <PdfComp url='https://buddy-backend-ti17.onrender.com/pdf/examtimetable' />
  )
}
