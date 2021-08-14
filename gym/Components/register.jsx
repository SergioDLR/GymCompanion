import React, { useState } from "react";
import { View, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { useDispatch } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/main";
import { registrarUsuario } from "../Redux/sesionDucks";
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nombre, editNombre] = useState("");
  const [apellido, editApellido] = useState("");
  const [mail, editMail] = useState("");

  const [constraseña, editContraseña] = useState("");

  function enviarRegistro() {
    if (nombre.length <= 1) {
      alert("Ingresa un nombre valido");
    } else if (apellido.length <= 1) {
      alert("Ingresa un apellido valido");
    } else if (constraseña.length <= 6) {
      alert("ingresa una contraseña valida");
    } else if (mail.length <= 6) {
      alert("ingresa un mail valido");
    } else {
      const user = {
        name: nombre,
        surname: apellido,
        email: mail,
        password: constraseña,
      };
      dispatch(registrarUsuario(user, navigation));
    }
  }
  const showDatepicker = () => {
    showMode("date");
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View style={styles.Container}>
      <View style={{ width: "80%" }}>
        <Input
          placeholder="Ingresa tu nombre"
          style={localStyle.inputLabel}
          leftIcon={{ type: "font-awesome", name: "users", color: "#fff" }}
          onChangeText={(nombre) => editNombre(nombre)}
          defaultValue={nombre}
        />
        <Input
          placeholder="Ingresa tu apellido"
          style={localStyle.inputLabel}
          leftIcon={{ type: "font-awesome", name: "user", color: "#fff" }}
          onChangeText={(apellido) => editApellido(apellido)}
          defaultValue={apellido}
        />
        <Input
          placeholder="Ingresa una contraseña"
          style={localStyle.inputLabel}
          leftIcon={{ type: "font-awesome", name: "lock", color: "#fff" }}
          secureTextEntry={true}
          onChangeText={(constraseña) => editContraseña(constraseña)}
          defaultValue={constraseña}
        />

        <Input
          placeholder="Ingresa tu mail"
          style={localStyle.inputLabel}
          leftIcon={{ type: "font-awesome", name: "envelope", color: "#fff" }}
          onChangeText={(mail) => editMail(mail)}
          defaultValue={mail}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.button1} onPress={() => enviarRegistro()}>
        <Text style={styles.textButton}>Registrarte</Text>
      </TouchableOpacity>
    </View>
  );
};
const localStyle = StyleSheet.create({
  inputLabel: {
    color: "#fff",
  },
});

export default Register;
