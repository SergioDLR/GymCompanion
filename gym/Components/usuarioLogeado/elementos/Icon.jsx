import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
const Icon = (props) => {
  const tamaño = props.tamaño;
  return (
    <View style={(tw`p-0 m-0`, props.style)}>
      <Image style={tw`w-${tamaño} h-${tamaño}`} source={props.img}></Image>
    </View>
  );
};

export default Icon;
