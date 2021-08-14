import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { eliminarEjercicio } from "../../../Redux/routines/routinesDucks";

const DiaDeRutinaDisplay = ({ navigation }) => {
  const dispatch = useDispatch();
  const dia = useSelector((state) => state.routines.seleccionarDia);
  const sesion = useSelector((state) => state.sesion.sesion);
  return (
    <View>
      <Text>Nombre del dia: {dia.nombre}</Text>
      {dia.ejercicios.length > 0 &&
        dia.ejercicios.map((e) => (
          <Text>
            {e.nombre}, {e.repeticiones},{e.series}
            <TouchableOpacity
              onPress={() =>
                dispatch(eliminarEjercicio(e, sesion.data.token, dia._id))
              }
            >
              <Text>Eliminar</Text>
            </TouchableOpacity>
          </Text>
        ))}
    </View>
  );
};

export default DiaDeRutinaDisplay;
