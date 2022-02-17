import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { seleccionarRutina } from "../../../Redux/routines/routinesDucks";
import { useDispatch, useSelector } from "react-redux";
import { eliminarRutina } from "../../../Redux/routines/routinesDucks";
import tw from "tailwind-react-native-classnames";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import Icon from "./Icon";
import TrashIcon from "../../../assets/images/icons/trash.png";
import EyeIcon from "../../../assets/images/icons/eye.png";
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

      onEnd: () => {
        translateX.value = withSpring(0);
        if (translateX.value > 80) {
          runOnJS(abrirRutina)();
        } else if (translateX.value < -80) {
          runOnJS(eliminar)();
        }
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
        <Animated.View style={[tw`mt-4`, transformStyle]}>
          <View style={tw`flex flex-row`}>
            <View style={tw`m-auto bg-blue-700    rounded-lg p-4 `}>
              <Icon img={EyeIcon} tamaño={6} style={tw`m-auto  w-8 mr-10`} />
            </View>
            <View style={tw`w-full bg-white text-center rounded-lg py-4 z-10`}>
              <Text style={tw`text-center m-0 p-0`}>
                Nombre de la rutina: {props.item.name}
              </Text>
            </View>
            <View style={tw`m-auto   bg-red-700 rounded-lg p-4 `}>
              <Icon img={TrashIcon} tamaño={6} style={tw`m-auto ml-10  w-8`} />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Rutina;
