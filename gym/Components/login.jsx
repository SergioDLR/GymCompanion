import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { registrarUsuario } from '../Redux/sesionDucks';
const Login = () => {
  const sesion = useSelector((state) => state.sesion);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = {
      name: 'sergio',
      surname: 'lll',
      email: 'lopez@hotmail.com',
      password: '1231232',
      fechaDeNacimiento: '07-22-2021',
    };
    dispatch(registrarUsuario(user));
  }, []);
  return (
    <View>
      <Text>FFFFF</Text>
    </View>
  );
};

export default Login;
