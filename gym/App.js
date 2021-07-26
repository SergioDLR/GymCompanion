import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/login';
import { Provider } from 'react-redux';
import generateStore from './Redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StartScreen from './Components/startScreen';
export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar style='auto' />
          <StartScreen></StartScreen>
        </View>
      </SafeAreaProvider>
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
