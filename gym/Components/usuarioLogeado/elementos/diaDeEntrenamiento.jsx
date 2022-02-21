import React from "react";
import { View, Button, SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useSelector, useDispatch } from "react-redux";
import Ejercicio from "./ejercicio";
import style from "../../../styles/main";

const DiaDeRutinaDisplay = ({ navigation }) => {
  const dispatch = useDispatch();
  const dia = useSelector((state) => state.routines.seleccionarDia);
  const sesion = useSelector((state) => state.sesion.sesion);
  return (
    <SafeAreaView style={style.Container2}>
      <ScrollView>
        <View style={{ padding: 30 }}>
          <Text h4 style={{ color: "#fff" }}>
            Nombre del dia: {dia.nombre}
          </Text>
          <Text h4 style={{ color: "#fff" }}>
            Ejercicios:
          </Text>
        </View>
        {dia.ejercicios.length > 0 &&
          dia.ejercicios.map((e) => (
            <Ejercicio
              item={e}
              sesion={sesion}
              dia={dia}
              key={e._id}
            ></Ejercicio>
          ))}
        <View style={tw`m-5 `}>
          <Button
            onPress={() => navigation.navigate("AgregarEjercicios")}
            title="agregar un ejercicio"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiaDeRutinaDisplay;
