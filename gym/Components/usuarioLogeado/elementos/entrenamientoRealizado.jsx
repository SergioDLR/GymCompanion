import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
const EntrenamientoRealizado = props => {
  return (
    <View>
      <Text>{props.item.fecha}</Text>
    </View>
  );
};

export default EntrenamientoRealizado;
