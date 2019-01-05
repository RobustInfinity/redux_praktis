import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './Store'
import Layout from './Container/Layout/Layout'

import './App.css';

class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Layout/>
      </div>
      </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
