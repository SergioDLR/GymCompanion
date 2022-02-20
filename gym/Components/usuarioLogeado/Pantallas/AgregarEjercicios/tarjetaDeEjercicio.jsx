import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import ModalEjercicio from "./modalEjercicio";

const TarjetaDeEjercicio = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={tw`bg-white p-2 mr-2 rounded-lg drop-shadow-2xl`}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          resizeMode="cover"
          source={{
            uri: props.item.source,
          }}
          style={tw`w-32 h-32`}
        />
        <Text style={tw`text-center`}>{props.item.nombre}</Text>
      </TouchableOpacity>
      <ModalEjercicio
        mostrar={modalVisible}
        cerrar={setModalVisible}
        item={props.item}
      />
    </View>
  );
};

export default TarjetaDeEjercicio;
