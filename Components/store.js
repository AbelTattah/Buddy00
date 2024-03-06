import React from 'react' // Import the React library
import { render } from 'react-dom' // Import the render method from the react-dom library
import { Provider } from 'react-redux' // Import the Provider component from the react-redux library
import { createStore } from 'redux' // Import the createStore method from the redux library
import rootReducer from './reducers' // Import the root reducer 
import App from './components/App' // Import the App component

// Create a store with the root reducer
const store = createStore(rootReducer)

// Render the App component with the store provider
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
