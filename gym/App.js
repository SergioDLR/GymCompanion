import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/login';
import { Provider } from 'react-redux';
import generateStore from './Redux/store';
export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your affpp!</Text>
        <StatusBar style='auto' />
        <Login></Login>
      </View>
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
