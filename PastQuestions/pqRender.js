import { View, Text } from 'react-native'
import React from 'react'
import PdfComp from '../Components/timetable'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { useSelector } from 'react-redux'

const PqRender = ({navigation}) => {
 
  const { currentc } = useSelector(state => state.userReducer)
  return (
   <Provider store={store}>
        <PdfComp url={`https://buddy-backend-ti17.onrender.com/pdf/${currentc}`} />
   </Provider>
  )
}

export default PqRender