
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './src/reducers/AppReducers';
import AppNavigator from './src/components/AppNavigator';

const store = createStore(AppReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <View style={{ flex: 1 }}>
          {/* <View style={{backgroundColor:'green',height:20}}></View> */}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
