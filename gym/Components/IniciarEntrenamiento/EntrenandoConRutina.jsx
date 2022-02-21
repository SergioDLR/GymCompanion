import React, { useState, useEffect } from "react";
import RelojTemporizador from "./RelojTemporizador";
import { View, SafeAreaView, Text } from "react-native";
import Styles from "../../styles/main";
const EntrenandoConRutina = () => {
  return (
    <SafeAreaView style={Styles.Container2}>
      <View>
        <RelojTemporizador></RelojTemporizador>
        <Text>Me encuentro entrenando</Text>
      </View>
    </SafeAreaView>
  );
};

export default EntrenandoConRutina;
