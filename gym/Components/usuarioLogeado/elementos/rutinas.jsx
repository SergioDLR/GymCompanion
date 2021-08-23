import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { seleccionarRutina } from "../../../Redux/routines/routinesDucks";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-native-elements";
import { eliminarRutina } from "../../../Redux/routines/routinesDucks";
import Icon from "react-native-vector-icons/FontAwesome";
const Rutina = props => {
  const dispatch = useDispatch();
  const sesion = useSelector(state => state.sesion.sesion);
  const [disable, setDisable] = useState(false);

  function abrirRutina() {
    dispatch(seleccionarRutina(props.item));
    props.navigation.navigate("rutinaSeleccionada");
  }
  function eliminar() {
    setDisable(true);
    dispatch(eliminarRutina(props.item._id, sesion.data.token, setDisable));
  }
  return (
    <View style={{ width: "100%" }}>
      <Card containerStyle={{ borderRadius: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexBasis: "70%" }}>
            <Card.Title style={{ marginTop: 8 }}>
              <Text>{props.item.name}</Text>
            </Card.Title>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              icon={<Icon name="eye" size={30} color="white" />}
              onPress={() => abrirRutina()}
            />
            <Button
              icon={<Icon name="trash" size={30} color="white" />}
              buttonStyle={{ marginLeft: 10 }}
              loading={disable}
              onPress={() => eliminar()}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Rutina;
