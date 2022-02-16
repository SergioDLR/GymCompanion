import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { seleccionarRutina } from "../../../Redux/routines/routinesDucks";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-native-elements";
import { eliminarRutina } from "../../../Redux/routines/routinesDucks";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "tailwind-react-native-classnames";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  useDerivedValue,
} from "react-native-reanimated";

const Rutina = (props) => {
  const dispatch = useDispatch();
  const sesion = useSelector((state) => state.sesion.sesion);
  const [disable, setDisable] = useState(false);

  const abrirRutina = () => {
    dispatch(seleccionarRutina(props.item));
    props.navigation.navigate("rutinaSeleccionada");
  };
  const eliminar = () => {
    setDisable(true);
    dispatch(eliminarRutina(props.item._id, sesion.data.token, setDisable));
  };

  const translateX = useSharedValue(0);

  //start of animation definition
  const panEvent = useAnimatedGestureHandler(
    {
      onStart: (event, context) => {
        context.translateX = translateX.value;
      },
      onActive: (event, context) => {
        translateX.value = event.translationX + context.translateX;
      },
      onEnd: (event) => {
        translateX.value = withSpring(0);
        runOnJS(abrirRutina)();
      },
    },
    []
  );
  //end of animation definition

  const transformStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });
  return (
    <GestureHandlerRootView style={{ flexGrow: 1 }}>
      <PanGestureHandler onGestureEvent={panEvent}>
        <Animated.View style={[transformStyle]}>
          <View style={tw`flex flex-row`}>
            <View style={tw`m-auto bg-blue-700    rounded-lg p-4 `}>
              <Icon
                style={tw`m-auto  w-8`}
                name="eye"
                size={30}
                color="white"
              />
            </View>
            <View style={tw`w-full bg-white text-center rounded-lg py-4`}>
              <Text>Nombre de la rutina: {props.item.name}</Text>
            </View>
            <View style={tw`m-auto   bg-red-700 rounded-lg p-4 `}>
              <Icon
                style={tw`m-auto  w-8`}
                name="trash"
                size={30}
                color="white"
              />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Rutina;
