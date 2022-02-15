import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./usuarioLogeado/home";
import RutinaSeleccionada from "./usuarioLogeado/elementos/rutina";
import EntrenamientosRealizados from "./usuarioLogeado/EntrenamientosR";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Pefil from "./usuarioLogeado/perfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Rutinas") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Perfil") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Entrenamientos") {
            iconName = focused ? "user" : "user";
          }
          const iconTest = "fa-duotone";
          return <FontAwesomeIcon icon="fa-duotone" />;
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
