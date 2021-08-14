import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { crearEjercicio } from "../../../Redux/routines/routinesDucks";
import { eliminarDiaDeRutina } from "../../../Redux/routines/routinesDucks";
import { seleccionarDia } from "../../../Redux/routines/routinesDucks";
const DiaDeRutina = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreEjercicio, setNombreEjercicio] = useState("");
  const [cantRepeticiones, setRepeticiones] = useState();
  const [cantSeries, setSeries] = useState();
  const dispatch = useDispatch();
  const sesion = useSelector((state) => state.sesion.sesion);

  function onSubmit() {
    alert("ejercicio creado");
    setModalVisible(!modalVisible);
    dispatch(
      crearEjercicio(
        nombreEjercicio,
        sesion.data.token,
        props.item._id,
        cantRepeticiones,
        cantSeries
      )
    );
  }
  function abrirDia() {
    dispatch(seleccionarDia(props.item));
    props.navigation.navigate("Ejercicios");
  }
  return (
    <View>
      <TouchableOpacity onPress={() => abrirDia()}>
        <Text>abrir</Text>
      </TouchableOpacity>
      <Text>{props.item.nombre}</Text>
      <Button
        icon={<Icon name="trash" size={15} color="white" />}
        onPress={() =>
          dispatch(
            eliminarDiaDeRutina(props.item, props.item._id, sesion.data.token)
          )
        }
      />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Agregar ejercicio</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Ingresa el nombre de la rutina</Text>
            <Input
              placeholder="Nombre ejercicio"
              onChangeText={(nombreEjercicio) =>
                setNombreEjercicio(nombreEjercicio)
              }
            />
            <Input
              placeholder="Cantidad de series"
              onChangeText={(cantRepeticiones) =>
                setRepeticiones(cantRepeticiones)
              }
            />
            <Input
              placeholder="Cantidad de repeticiones"
              onChangeText={(cantSeries) => setSeries(cantSeries)}
            />
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => onSubmit()}
              title="Aceptar"
            ></Button>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              title="Cancelar"
            ></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DiaDeRutina;