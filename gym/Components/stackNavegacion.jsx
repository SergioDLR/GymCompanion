import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./usuarioLogeado/home";
import RutinaSeleccionada from "./usuarioLogeado/elementos/rutina";
import DiaDeRutinaDisplay from "./usuarioLogeado/elementos/diaDeEntrenamiento";
import Login from "./login";
import StartScreen from "./startScreen";
import Register from "./register";
import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeLoged" component={myTab} />
        <Stack.Screen
          name="rutinaSeleccionada"
          component={RutinaSeleccionada}
        />
        <Stack.Screen name="Ejercicios" component={DiaDeRutinaDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const myTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="rutinaSeleccionada" component={RutinaSeleccionada} />
    </Tab.Navigator>
  );
};

export default StackNavigation;
