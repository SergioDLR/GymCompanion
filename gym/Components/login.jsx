import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Login = () => {
  const sesion = useSelector((state) => state.sesion);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Login;
