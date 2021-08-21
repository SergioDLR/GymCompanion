import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cargarEntrenamientos } from "../../Redux/entrenamientosDucks";
import EntrenamientoRealizado from "./elementos/entrenamientoRealizado";
const EntrenamientosRealizados = () => {
  const dispatch = useDispatch();
  const sesion = useSelector(state => state.sesion.sesion);
  const entrenamientos = useSelector(state => state.entrenamiento);
  useEffect(() => {
    dispatch(cargarEntrenamientos(sesion.data.token));
  }, []);
  console.log();

  return (
    <View>
      <Text>Estos son los entrenamientos</Text>

      {entrenamientos.entrenamientosRealizados.map((e, i) => (
        <EntrenamientoRealizado item={e} key={i}></EntrenamientoRealizado>
      ))}
    </View>
  );
};

export default EntrenamientosRealizados;
