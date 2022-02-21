import React, { useState } from "react";
import { Text, View, Modal, Pressable, Image } from "react-native";
import { Input } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { crearEjercicio } from "../../../../Redux/routines/routinesDucks";
import { recargarDia } from "../../../../Redux/routines/routinesDucks";

const ModalEjercicio = (props) => {
  const [cantRepeticiones, setCantRepeticiones] = useState(0);
  const [cantSeries, setCantidadSeries] = useState(0);
  const dispatch = useDispatch();
  const agregarEjercicio = () => {
    if (cantRepeticiones <= 0 && cantSeries <= 0) {
      alert("por favor complete con numeros mayores a 0 ");
    } else {
      dispatch(
        crearEjercicio(
          sesion.sesion.data.token,
          diaSeleccionado._id,
          props.item.nombre,
          cantRepeticiones,
          cantSeries
        )
      );
      props.cerrar(false);
    }
    return true;
  };
  const sesion = useSelector((state) => state.sesion);
  const diaSeleccionado = useSelector((state) => state.routines.seleccionarDia);

  return (
    <View style={tw`flex-1  justify-center items-center mt-2 `}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.mostrar}
        onRequestClose={() => {
          props.cerrar(false);
        }}
      >
        <View style={tw`flex-1  justify-center items-center mt-2 `}>
          <View style={tw`bg-white p-4 rounded-lg drop-shadow-xl`}>
            <Image
              resizeMode="cover"
              source={{
                uri: props.item.source,
              }}
              style={tw` h-48`}
            />
            <Text style={tw`text-center mt-2 mb-2`}>{props.item.nombre}</Text>
            <Text>Descripcion</Text>
            <View>
              <Input
                placeholder={"Cantidad de series"}
                onChangeText={(value) => setCantidadSeries(value)}
              />
              <Input
                placeholder={"cantidad de repeticiones"}
                onChangeText={(value) => setCantRepeticiones(value)}
              />
            </View>
            <View style={tw`flex flex-row items-center justify-center mt-4`}>
              <Pressable
                style={tw`bg-blue-200 p-2 rounded-lg `}
                onPress={() => agregarEjercicio()}
              >
                <Text>Aceptar</Text>
              </Pressable>
              <Pressable
                style={tw`bg-red-200 p-2 rounded-lg `}
                onPress={() => props.cerrar(false)}
              >
                <Text>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalEjercicio;
