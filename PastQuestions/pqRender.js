import { View, Text } from 'react-native'
import React from 'react'
import PdfComp from '../Components/timetable'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { UseSelector } from 'react-redux/es/hooks/useSelector'

const pqRender = ({navigation}) => {
  const { currentc } = UseSelector(state => state.userReducer)
  return (
   <Provider store={store}>
        <PdfComp url={`https://buddy-backend-ti17.onrender.com/pasco/get/${currentc}`} />
   </Provider>
  )
}

export default pqRender