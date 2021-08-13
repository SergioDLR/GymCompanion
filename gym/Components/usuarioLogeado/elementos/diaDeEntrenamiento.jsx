import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
const DiaDeRutinaDisplay = ({ navigation }) => {
  const dia = useSelector((state) => state.routines.seleccionarDia);
  return (
    <View>
      <Text>Nombre del dia: {dia.nombre}</Text>
      {dia.ejercicios.length > 0 &&
        dia.ejercicios.map((e) => (
          <Text>
            {e.nombre}, {e.repeticiones},{e.series}
          </Text>
        ))}
    </View>
  );
};

export default DiaDeRutinaDisplay;
