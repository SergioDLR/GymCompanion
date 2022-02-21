import React, { useState } from "react";
import { Text, View } from "react-native";
import Rutina from "./rutinas";
import { seleccionarRutina } from "../../../Redux/routines/routinesDucks";
import { useDispatch, useSelector } from "react-redux";
import { eliminarRutina } from "../../../Redux/routines/routinesDucks";

const TarjetaLateral = (props) => {
  const dispatch = useDispatch();
  const sesion = useSelector((state) => state.sesion.sesion);
  const [disable, setDisable] = useState(false);

  const abrirRutina = () => {
    if (!disable) {
      dispatch(seleccionarRutina(props.item));
      props.navigation.navigate("rutinaSeleccionada");
    }
  };
  const eliminar = () => {
    if (!disable) {
      setDisable(true);
      dispatch(eliminarRutina(props.item._id, sesion.data.token, setDisable));
    }
  };
  return (
    <View>
      <Rutina
        nombre={`nombre de la rutina : ${props.item.name}`}
        disable={disable}
        primeraFuncion={abrirRutina}
        segundaFuncion={eliminar}
      />
    </View>
  );
};

export default TarjetaLateral;
