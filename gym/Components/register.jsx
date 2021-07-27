import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

import { registrarUsuario } from '../Redux/sesionDucks';
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [nombre, editNombre] = useState('');
  const [apellido, editApellido] = useState('');
  const [mail, editMail] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [constraseña, editContraseña] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  function enviarRegistro() {
    console.log('react');

    const user = {
      name: nombre,
      surname: apellido,
      email: mail,
      password: constraseña,
      fechaDeNacimiento: date,
    };
    dispatch(registrarUsuario(user));
  }
  const showDatepicker = () => {
    showMode('date');
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View>
      <Input
        placeholder='ingresa tu nombre'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(nombre) => editNombre(nombre)}
        defaultValue={nombre}
      />
      <Input
        placeholder='ingresa tu apellido'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(apellido) => editApellido(apellido)}
        defaultValue={apellido}
      />
      <Input
        placeholder='ingresa tu contraseña'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(constraseña) => editContraseña(constraseña)}
        defaultValue={constraseña}
      />

      <Input
        placeholder='ingresa tu mail'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(mail) => editMail(mail)}
        defaultValue={mail}
      />
      <Button onPress={showDatepicker} title='agregar fecha de nacimiento' />
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
      <Button title='Registrar' onPress={() => enviarRegistro()}></Button>
    </View>
  );
};

export default Register;
