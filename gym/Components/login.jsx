import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { registrarUsuario, iniciarSesion } from '../Redux/sesionDucks';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import styles from '../styles/main';
const Login = ({ navigation }) => {
  const sesion = useSelector((state) => state.sesion);
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const dispatch = useDispatch();
  console.log(styles);
  return (
    <View style={styles.Container}>
      <Text>Iniciar sesion</Text>

      <Input
        placeholder='Ingresa tu email'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={(mail) => setMail(mail)}
        defaultValue={mail}
      />
      <Input
        placeholder='ingresa tu contraseña'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
      />

      <Button
        onPress={() => {
          dispatch(iniciarSesion(mail, password, navigation));
        }}
        title='Iniciar sesion'
      />
    </View>
  );
};

export default Login;
