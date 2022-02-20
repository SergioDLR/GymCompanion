import React, { useState } from "react";
import { Text, View, Modal, Pressable, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
const ModalEjercicio = (props) => {
  return (
    <View style={tw`flex-1  justify-center items-center mt-2`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.mostrar}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={tw`flex-1  justify-center items-center mt-2`}>
          <View style={tw`bg-white p-4 rounded-lg`}>
            <Image
              resizeMode="cover"
              source={{
                uri: props.item.source,
              }}
              style={tw`w-48 h-48`}
            />
            <Text style={tw`text-center mt-2 mb-2`}>{props.item.nombre}</Text>
            <Text>Descripcion</Text>
            <View style={tw`flex flex-row items-center justify-center mt-4`}>
              <Pressable
                style={tw`bg-blue-200 p-2 rounded-lg `}
                onPress={() => props.cerrar(false)}
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
