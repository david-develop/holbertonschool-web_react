import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from "redux";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";
import { Provider } from "react-redux";

// Create a store using createStore from Redux that would contain the uiReducer state
// Implement a provider passing the store that you created to the main App
const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);