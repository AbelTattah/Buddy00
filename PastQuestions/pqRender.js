import React from 'react' // Importing components from react
import PdfComp from '../Components/timetable' // Importing the pdf component
import { Provider, useSelector } from 'react-redux' // Importing the provider and useSelector component from react-redux
import { store } from '../redux/store' // Importing the store from the redux store

// Component to render past questions pdf
const PqRender = ({ navigation }) => {
  const { currentc } = useSelector((state) => state.userReducer)
  // Render the pdf component
  return (
    <Provider store={store}>
      <PdfComp
        url={`https://buddy-backend-ti17.onrender.com/pdf/${currentc}`}
      />
    </Provider>
  )
}

export default PqRender
