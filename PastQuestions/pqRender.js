import React from 'react' // Importing components from react
import PdfComp from '../Components/pdf' // Importing the pdf component
import { useContext } from 'react'
import { userContext } from '../store/user'

// Component to render past questions pdf
const PqRender = ({ navigation }) => {
  // Render the pdf component
  const context = useContext(userContext)
  return (
      <PdfComp
        url={`https://buddy-backend-ti17.onrender.com/pdf/${context.pdf}`}
      />
  )
}

export default PqRender
