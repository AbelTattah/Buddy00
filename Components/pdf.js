import {StyleSheet } from 'react-native' // Importing components from react-native
import React from 'react' // Importing components from react
import Pdf from 'react-native-pdf' // Importing the pdf component from react-native-pdf


// Component to render pdf
export default function PdfComp ({ url }) {
  // Source of the pdf
  const source = { uri: url, cache: true }
  
  // Render the pdf
  return (
    <Pdf
      trustAllCerts={false}
      showsVerticalScrollIndicator
      source={source}
      onLoadComplete={(numberOfPages, filePath) => {
        console.log(`Number of pages: ${numberOfPages}`)
      }}
      onPageChanged={(page, numberOfPages) => {
        console.log(`Current page: ${page}`)
      }}
      onError={(error) => {
        console.log(error)
      }}
      onPressLink={(uri) => {
        console.log(`Link pressed: ${uri}`)
      }}
      style={stylee.pdf}
    />
  )
}

const stylee = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25
  },
  pdf: {
    flex: 1
  }
})
