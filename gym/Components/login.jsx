import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { registrarUsuario, iniciarSesion } from '../Redux/sesionDucks';
const Login = () => {
  const sesion = useSelector((state) => state.sesion);
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const dispatch = useDispatch();
  const user = {
    name: 'sergio',
    surname: 'lll',
    email: 'lopez@hotmail.com',
    password: '1231232',
    fechaDeNacimiento: '07-22-2021',
  };
  useEffect(() => {
    dispatch(iniciarSesion(user));
  }, []);
  return (
    <View>
      <Text>FFFFF</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder='Ingresa aqui tu mail'
        onChangeText={(mail) => setMail(mail)}
        defaultValue={mail}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder='Ingresa aqui tu password'
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
      />
      <Button
        onPress={() => {
          dispatch(iniciarSesion(user));
        }}
        title='Iniciar sesion'
      />
    </View>
  );
};

export default Login;
