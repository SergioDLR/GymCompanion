import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-elements";
import logo from "../assets/images/LogoWhite.png";
import styles from "../styles/main";
const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={stylesMain.main} h1>
        Bienvenido
      </Text>
      <Image style={stylesMain.image} source={logo} />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textButton}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.textButton}>Registarte</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const stylesMain = StyleSheet.create({
  mt2: {
    marginBottom: "23px",
    width: 250,
    borderRadius: 5,
  },
  main: {
    fontFamily: "Roboto",
    color: "#fff",
  },
  image: {
    width: 250,
    height: 250,
  },
});
export default StartScreen;
