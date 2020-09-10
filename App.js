import React, { Component } from 'react';
import { AppContainer } from '@navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './src/redux'

const store = createStore(reducers);

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider >
    );
  }
}