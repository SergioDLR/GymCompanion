import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
const StartScreen = () => {
  return (
    <SafeAreaView>
      <Text h1>Bienvenido </Text>
      <Button style={styles.mt2} title='iniciar sesion'></Button>
      <Button title='Registrate'></Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mt2: {
    marginBottom: '2px',
  },
});
export default StartScreen;
