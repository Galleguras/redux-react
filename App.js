import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'

import App from '/.src'




export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


