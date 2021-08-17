import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { registrarUsuario, iniciarSesion } from "../Redux/sesionDucks";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text, Button } from "react-native-elements";

import styles from "../styles/main";

const Login = ({ navigation }) => {
  const sesion = useSelector((state) => state.sesion);
  const [cargando, setCargando] = useState(false);
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();
  function alerar(val) {
    setCargando(val);
  }
  function logear(val) {
    setCargando(val);
    dispatch(iniciarSesion(mail, password, navigation, alerar));
  }
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

      <Button
        buttonStyle={styles.button2}
        onPress={() => logear(true)}
        title={"ingresar"}
        titleStyle={styles.textButton}
        loadingProps={{ color: "black" }}
        loading={cargando}
      ></Button>
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
