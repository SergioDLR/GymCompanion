import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { eliminarDiaDeRutina } from "../../../Redux/routines/routinesDucks";
import { seleccionarDia } from "../../../Redux/routines/routinesDucks";

import Rutina from "./rutinas";
const DiaDeRutina = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreEjercicio, setNombreEjercicio] = useState("");
  const [cantRepeticiones, setRepeticiones] = useState();
  const [cantSeries, setSeries] = useState();
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const sesion = useSelector((state) => state.sesion.sesion);

  const eliminarDia = () => {
    dispatch(
      eliminarDiaDeRutina(props.item, props.item._id, sesion.data.token)
    );
    setDisable(true);
  };
  const abrirDia = () => {
    dispatch(seleccionarDia(props.item));
    props.navigation.navigate("Ejercicios");
  };
  return (
    <Rutina
      nombre={`nombre del dia : ${props.item.nombre}`}
      disable={disable}
      primeraFuncion={abrirDia}
      segundaFuncion={eliminarDia}
    />
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
  containerCard: {
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default DiaDeRutina;
