import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { Button, Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { crearDia } from "../../../Redux/routines/routinesDucks";
import style from "../../../styles/main";
import DiaDeRutina from "./diaDeRutina";
const RutinaSeleccionada = ({ navigation }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreRutina, setNombreRutina] = useState("");
  const sesion = useSelector(state => state.sesion.sesion);
  const rutina = useSelector(state => state.routines.seleccionada);

  function onSubmitDia() {
    setModalVisible(!modalVisible);
    dispatch(crearDia(nombreRutina, sesion.data.token, rutina._id));
  }
  return (
    <View style={style.Container3}>
      <View
        style={{
          marginBottom: 10,
          alignContent: "flex-start",
          justifyContent: "center"
        }}
      >
        {rutina.entrenamientoDias.length > 0 &&
          rutina.entrenamientoDias.map(e => (
            <DiaDeRutina
              item={e}
              key={e._id}
              navigation={navigation}
            ></DiaDeRutina>
          ))}
        <View style={{ alignItems: "center" }}>
          <Button
            buttonStyle={{
              backgroundColor: "#fff",
              width: 250,
              marginTop: 20
            }}
            titleStyle={style.textButton}
            title="Añadir dia"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

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
              placeholder="Nombre dia de entrenamiento"
              onChangeText={nombreRutina => setNombreRutina(nombreRutina)}
            />
            <View style={{ flexDirection: "row" }}>
              <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => onSubmitDia()}
                title="Aceptar"
              ></Button>
              <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                title="Cancelar"
              ></Button>
            </View>
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
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default RutinaSeleccionada;
