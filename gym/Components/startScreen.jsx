import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../styles/main';
const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text h1>Bienvenido </Text>
      <Button
        style={stylesMain.mt2}
        title='iniciar sesion'
        onPress={() => navigation.navigate('Login')}
      ></Button>
      <Button
        title='Registrate'
        onPress={() => navigation.navigate('Register')}
      ></Button>
    </SafeAreaView>
  );
};
const stylesMain = StyleSheet.create({
  mt2: {
    marginBottom: '23px',
  },
});
export default StartScreen;
