import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
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
          runOnJS(props.primeraFuncion)();
        } else if (translateX.value < -80) {
          runOnJS(props.segundaFuncion)();
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
          {renderRutina(props.nombre, props.disable)}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};
const renderRutina = (nombre, disable) => {
  if (disable) {
    return (
      <View style={tw`w-full bg-gray-200 text-center rounded-lg py-4 z-10`}>
        <ActivityIndicator size="small" color={"red"} />
      </View>
    );
  } else {
    return (
      <View style={tw`flex flex-row`}>
        <View style={tw`m-auto bg-blue-700    rounded-lg p-4 `}>
          <Icon img={EyeIcon} tamaño={6} style={tw`m-auto  w-8 mr-10`} />
        </View>
        <View style={tw`w-full bg-white text-center rounded-lg py-4 z-10`}>
          <Text style={tw`text-center m-0 p-0`}>{nombre}</Text>
        </View>
        <View style={tw`m-auto   bg-red-700 rounded-lg p-4 `}>
          <Icon img={TrashIcon} tamaño={6} style={tw`m-auto ml-10  w-8`} />
        </View>
      </View>
    );
  }
};

export default Rutina;
