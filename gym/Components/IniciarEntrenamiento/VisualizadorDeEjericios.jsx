import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TarjetaDeEjercicio from "../usuarioLogeado/Pantallas/AgregarEjercicios/tarjetaDeEjercicio";

const VisualizadorDeEjercicios = () => {
  return (
    <View>
      <Text>Voy a mostrar los ejercicios!</Text>
      <TouchableOpacity>Siguiente</TouchableOpacity>
      <TouchableOpacity>Saltar</TouchableOpacity>
    </View>
  );
};

export default VisualizadorDeEjercicios;
