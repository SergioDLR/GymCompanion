import React, { useEffect } from "react";
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
import { reanudarSession } from "../Redux/sesionDucks";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    leerSesion();
  }, []);
  async function leerSesion() {
    try {
      const value = await AsyncStorage.getItem("@session");
      if (value !== null) {
        dispatch(reanudarSession(JSON.parse(value)));
        navigation.replace("HomeLoged");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={stylesMain.main} h1>
        Bienvenido
      </Text>
      <Text style={stylesMain.main} h4>
        Empieza a entrenar con la ayuda de GYMnion!
      </Text>
      <View style={stylesMain.sector}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textButton}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.textButton}>Registarte</Text>
        </TouchableOpacity>
      </View>
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
    textAlign: "center",
    padding: "20px",
  },
  image: {
    width: 250,
    height: 250,
  },
  sector: {
    padding: "20px",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default StartScreen;
