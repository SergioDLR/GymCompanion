import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./usuarioLogeado/home";
import RutinaSeleccionada from "./usuarioLogeado/elementos/rutina";
import EntrenamientosRealizados from "./usuarioLogeado/EntrenamientosR";
import { NavigationContainer } from "@react-navigation/native";
import Pefil from "./usuarioLogeado/perfil";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Rutinas") {
            iconName = focused ? "running" : "running";
          } else if (route.name === "Perfil") {
            iconName = focused ? "user-circle" : "user-circle";
          } else if (route.name === "Entrenamientos") {
            iconName = focused ? "clock" : "clock";
          }

          return <Icon name={iconName} type="font-awesome-5" />;
        },
      })}
    >
      <Tab.Screen name="Rutinas" component={Home} />
      <Tab.Screen name="Perfil" component={Pefil} />
      <Tab.Screen name="Entrenamientos" component={EntrenamientosRealizados} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
