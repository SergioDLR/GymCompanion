import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { cargarEntrenamientos } from "../../Redux/entrenamientosDucks";
import style from "../../styles/main";
import EntrenamientoRealizado from "./elementos/entrenamientoRealizado";
const EntrenamientosRealizados = () => {
  const [cargando, setCargando] = useState(true);
  const dispatch = useDispatch();
  const sesion = useSelector(state => state.sesion.sesion);
  const entrenamientos = useSelector(state => state.entrenamiento);
  useEffect(() => {
    dispatch(cargarEntrenamientos(sesion.data.token, setCargando));
  }, []);
  console.log();
  const renderEntrenamientos = () => {
    return entrenamientos.entrenamientosRealizados.map((e, i) => (
      <EntrenamientoRealizado item={e} key={i}></EntrenamientoRealizado>
    ));
  };
  return (
    <SafeAreaView style={[style.Container2]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginTop: 40 }}>
          <Text>Tus ultimos entrenamientos</Text>
          {cargando ? (
            <ActivityIndicator
              animating={true}
              color="#0000ff"
            ></ActivityIndicator>
          ) : (
            renderEntrenamientos()
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EntrenamientosRealizados;
