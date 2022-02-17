import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { useDispatch } from "react-redux";
import styles from "../styles/main";
import { registrarUsuario } from "../Redux/sesionDucks";
import { cargarAlerta } from "../Redux/alertDucks";
import Icon from "./usuarioLogeado/elementos/Icon";
import IdIcon from "../assets/images/icons/id-badge.png";
import emailIcon from "../assets/images/icons/envelope.png";
import lockIcon from "../assets/images/icons/lock.png";
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nombre, editNombre] = useState("");
  const [apellido, editApellido] = useState("");
  const [mail, editMail] = useState("");
  const [constraseña, editContraseña] = useState("");
  const [registrando, setRegistrando] = useState(false);

  function enviarRegistro() {
    if (nombre.length <= 1) {
      dispatch(cargarAlerta("Ingresa un nombre valido"));
    } else if (apellido.length <= 1) {
      dispatch(cargarAlerta("Ingresa un apellido valido"));
    } else if (constraseña.length <= 6) {
      dispatch(cargarAlerta("ingresa una contraseña valida"));
    } else if (mail.length <= 6) {
      dispatch(cargarAlerta("Ingrese un mail valido"));
    } else {
      setRegistrando(true);
      const user = {
        name: nombre,
        surname: apellido,
        email: mail,
        password: constraseña,
      };
      dispatch(registrarUsuario(user, navigation, setRegistrando));
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
          leftIcon={<Icon img={IdIcon} tamaño={3} />}
          onChangeText={(nombre) => editNombre(nombre)}
          defaultValue={nombre}
        />
        <Input
          placeholder="Ingresa tu apellido"
          style={localStyle.inputLabel}
          leftIcon={<Icon img={IdIcon} tamaño={3} />}
          onChangeText={(apellido) => editApellido(apellido)}
          defaultValue={apellido}
        />
        <Input
          placeholder="Ingresa una contraseña"
          style={localStyle.inputLabel}
          leftIcon={<Icon img={lockIcon} tamaño={3} />}
          secureTextEntry={true}
          onChangeText={(constraseña) => editContraseña(constraseña)}
          defaultValue={constraseña}
        />

        <Input
          placeholder="Ingresa tu mail"
          style={localStyle.inputLabel}
          leftIcon={<Icon img={emailIcon} tamaño={3} />}
          onChangeText={(mail) => editMail(mail)}
          defaultValue={mail}
          keyboardType="email-address"
        />
      </View>
      <Button
        loading={registrando}
        buttonStyle={styles.button2}
        titleStyle={styles.textButton}
        loadingProps={{ color: "#000" }}
        onPress={() => enviarRegistro()}
        title={"Registrarte"}
      />
    </View>
  );
};
const localStyle = StyleSheet.create({
  inputLabel: {
    color: "#fff",
  },
});

export default Register;
