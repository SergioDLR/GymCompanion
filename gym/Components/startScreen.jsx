import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text h1>Bienvenido </Text>
      <Button
        style={styles.mt2}
        title='iniciar sesion'
        onPress={() => navigation.navigate('Login')}
      ></Button>
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
