import React, { useState } from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { eliminarEjercicio } from "../../../Redux/routines/routinesDucks";
import { useDispatch } from "react-redux";
import style from "../../../styles/main";
const Ejercicio = props => {
  const dispatch = useDispatch();
  const [eliminando, setEliminando] = useState(false);
  return (
    <View>
      <Card containerStyle={{ borderRadius: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text>Ejercicio</Text>
          </View>
          <Text>Series</Text>
          <Text>Repeticiones</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Text>{props.item.nombre}</Text>
          </View>
          <Text>{props.item.series}</Text>
          <Text>{props.item.repeticiones}</Text>
        </View>
        <Button
          title="Eliminar"
          loading={eliminando}
          onPress={() => {
            dispatch(
              eliminarEjercicio(
                props.item,
                props.sesion.data.token,
                props.dia._id,
                setEliminando
              )
            );
            setEliminando(true);
          }}
        ></Button>
      </Card>
    </View>
  );
};

export default Ejercicio;
