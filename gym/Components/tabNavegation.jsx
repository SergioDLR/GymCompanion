import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./usuarioLogeado/home";
import EntrenamientosRealizados from "./usuarioLogeado/EntrenamientosR";
import Pefil from "./usuarioLogeado/perfil";
import Icon from "./usuarioLogeado/elementos/Icon";
import ClockPast from "../assets/images/icons/time-past.png";
import profileIcon from "../assets/images/icons/user.png";
import runningIcon from "../assets/images/icons/running.png";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Rutinas") {
            iconName = focused ? runningIcon : runningIcon;
          } else if (route.name === "Perfil") {
            iconName = focused ? profileIcon : profileIcon;
          } else if (route.name === "Entrenamientos") {
            iconName = focused ? ClockPast : ClockPast;
          }

          return <Icon img={iconName} tamaño={"4"} />;
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
