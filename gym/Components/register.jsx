import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/main';
import { registrarUsuario } from '../Redux/sesionDucks';
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nombre, editNombre] = useState('');
  const [apellido, editApellido] = useState('');
  const [mail, editMail] = useState('');

  const [constraseña, editContraseña] = useState('');

  function enviarRegistro() {
    if (nombre.length <= 1) {
      alert('Ingresa un nombre valido');
    } else if (apellido.length <= 1) {
      alert('Ingresa un apellido valido');
    } else if (constraseña.length <= 6) {
      alert('ingresa una contraseña valida');
    } else if (mail.length <= 6) {
      alert('ingresa un mail valido');
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
    showMode('date');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View style={styles.Container}>
      <Input
        placeholder='Ingresa tu nombre'
        leftIcon={{ type: 'font-awesome', name: 'users' }}
        onChangeText={(nombre) => editNombre(nombre)}
        defaultValue={nombre}
      />
      <Input
        placeholder='Ingresa tu apellido'
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText={(apellido) => editApellido(apellido)}
        defaultValue={apellido}
      />
      <Input
        placeholder='Ingresa una contraseña'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry={true}
        onChangeText={(constraseña) => editContraseña(constraseña)}
        defaultValue={constraseña}
      />

      <Input
        placeholder='Ingresa tu mail'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={(mail) => editMail(mail)}
        defaultValue={mail}
        keyboardType='email-address'
      />

      <Button title='Registrar' onPress={() => enviarRegistro()}></Button>
    </View>
  );
};

export default Register;
