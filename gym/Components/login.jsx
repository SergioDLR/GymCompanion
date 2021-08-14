import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { registrarUsuario, iniciarSesion } from "../Redux/sesionDucks";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text } from "react-native-elements";
import styles from "../styles/main";

const Login = ({ navigation }) => {
  const sesion = useSelector((state) => state.sesion);
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={stylesMain.titulo}>Iniciar sesion en Gym Companion</Text>
      <View style={{ width: "80%" }}>
        <Input
          placeholder="Ingresa tu email"
          style={stylesMain.inputLabel}
          leftIcon={{ type: "font-awesome", name: "envelope", color: "#fff" }}
          onChangeText={(mail) => setMail(mail)}
          defaultValue={mail}
        />
        <Input
          placeholder="ingresa tu contraseña"
          style={stylesMain.inputLabel}
          leftIcon={{ type: "font-awesome", name: "lock", color: "#fff" }}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
      </View>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => {
          dispatch(iniciarSesion(mail, password, navigation));
        }}
      >
        <Text style={styles.textButton}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const stylesMain = StyleSheet.create({
  titulo: {
    color: "#fff",
  },

  inputLabel: {
    color: "#FFFFFF",
  },
});

export default Login;
