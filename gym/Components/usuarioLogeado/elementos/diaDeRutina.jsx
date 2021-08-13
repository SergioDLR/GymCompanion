import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { crearEjercicio } from "../../../Redux/routines/routinesDucks";
const DiaDeRutina = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreEjercicio, setNombreEjercicio] = useState("");
  const [cantRepeticiones, setRepeticiones] = useState();
  const [cantSeries, setSeries] = useState();
  const dispatch = useDispatch();
  const sesion = useSelector((state) => state.sesion.sesion);

  function onSubmit() {
    alert("ejercicio creado");
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
  return (
    <View>
      <Text>{props.item.nombre}</Text>
      <TouchableOpacity>Agregar ejercicio</TouchableOpacity>
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
