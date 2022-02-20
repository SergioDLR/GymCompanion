import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import style from "../../../styles/main";
import tw from "tailwind-react-native-classnames";
import TarjetaDeEjercicio from "./AgregarEjercicios/tarjetaDeEjercicio";
const AgregarEjercicios = () => {
  return (
    <SafeAreaView style={[style.Container2, tw`p-3`]}>
      <Text h4 style={tw`text-white`}>
        Pecho
      </Text>
      <ScrollView>
        <ScrollView horizontal>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          />
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          />
        </ScrollView>
        <Text h4 style={tw`text-white`}>
          Espalda
        </Text>
        <ScrollView horizontal={true}>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
        </ScrollView>
        <Text h4 style={tw`text-white`}>
          Brazos
        </Text>
        <ScrollView horizontal={true}>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
        </ScrollView>
        <Text h4 style={tw`text-white`}>
          Piernas
        </Text>
        <ScrollView horizontal={true}>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
        </ScrollView>
        <Text h4 style={tw`text-white`}>
          Hombros
        </Text>
        <ScrollView horizontal={true}>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
        </ScrollView>
        <Text h4 style={tw`text-white`}>
          Cardio
        </Text>
        <ScrollView horizontal={true}>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
          <TarjetaDeEjercicio
            item={{
              nombre: "Pecho plano",
              source: "https://via.placeholder.com/400.png",
            }}
          ></TarjetaDeEjercicio>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AgregarEjercicios;
