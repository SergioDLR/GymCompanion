import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { seleccionarRutina } from "../../../Redux/routines/routinesDucks";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-native-elements";
import { eliminarRutina } from "../../../Redux/routines/routinesDucks";
import Icon from "react-native-vector-icons/FontAwesome";
const Rutina = (props) => {
  const dispatch = useDispatch();
  const sesion = useSelector((state) => state.sesion.sesion);
  function abrirRutina() {
    dispatch(seleccionarRutina(props.item));
    props.navigation.navigate("rutinaSeleccionada");
  }
  return (
    <View>
      <TouchableOpacity onPress={() => abrirRutina()}>
        <Card>
          <Card.Title>
            <Text>{props.item.name}</Text>
          </Card.Title>
        </Card>
      </TouchableOpacity>
      <Button
        icon={<Icon name="trash" size={15} color="white" />}
        onPress={() =>
          dispatch(eliminarRutina(props.item._id, sesion.data.token))
        }
      />
    </View>
  );
};

export default Rutina;
