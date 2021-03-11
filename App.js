import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import {createStore,combinereducers} from'redux'

const reducers ={
  todos: (state = []) => {
    return state
  }
}

const MyApp =() => {
  return(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const store = createStore(combinereducers({...reducers}))

export default function App() {
  return (
 <Provider store={store}>
      <MyApp/>
 </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
