import React from 'react';
import { View, Text } from 'react-native';
const DiaDeRutina = (props) => {
  return (
    <View>
      <Text>{props.item.nombre}</Text>
    </View>
  );
};

export default DiaDeRutina;
