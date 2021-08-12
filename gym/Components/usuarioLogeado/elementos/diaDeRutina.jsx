import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
const DiaDeRutina = (props) => {
  return (
    <View>
      <Text>{props.item.nombre}</Text>
      <TouchableOpacity>Agregar ejercicio</TouchableOpacity>
    </View>
  );
};

export default DiaDeRutina;
