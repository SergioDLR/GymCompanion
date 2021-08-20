import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./usuarioLogeado/home";
import RutinaSeleccionada from "./usuarioLogeado/elementos/rutina";
import EntrenamientosRealizados from "./usuarioLogeado/EntrenamientosR";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Pefil from "./usuarioLogeado/perfil";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rutinas" component={Home} />
      <Tab.Screen name="Perfil" component={Pefil} />
      <Tab.Screen name="Entrenamientos" component={EntrenamientosRealizados} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
