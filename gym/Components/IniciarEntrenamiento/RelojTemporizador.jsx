import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const RelojTemporizador = () => {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [isPlaying, setPlaying] = useState(true);
  const LIMITE_SEGUNDOS = 60;

  useEffect(() => {
    let timerSegundos = setTimeout(() => {
      if (isPlaying) {
        setSegundos(segundos + 1);
        if (segundos >= LIMITE_SEGUNDOS) {
          setSegundos(0);
          setMinutos(minutos + 1);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timerSegundos);
    };
  }, [segundos, isPlaying]);

  const pauseTimer = () => {};

  return (
    <View style={tw`border-2 rounded-full border-white max-w-max`}>
      <View style={tw` flex-row p-20 text-center`}>
        <Text h4 style={tw`text-white`}>
          {minutos}
        </Text>
        <Text h4 style={tw`text-white`}>
          :
        </Text>
        <Text h4 style={tw`text-white`}>
          {`${segundos < 10 ? "0" : ""}${segundos}`}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setPlaying(!isPlaying)}>
        <Text style={tw`text-white`}>{isPlaying ? "Pausar" : "Reanudar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RelojTemporizador;
