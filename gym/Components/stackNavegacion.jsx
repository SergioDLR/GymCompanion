import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./usuarioLogeado/home";
import RutinaSeleccionada from "./usuarioLogeado/elementos/rutina";
import DiaDeRutinaDisplay from "./usuarioLogeado/elementos/diaDeEntrenamiento";
import TabNavigation from "./tabNavegation";
import Login from "./login";
import StartScreen from "./startScreen";
import Register from "./register";
import AgregarEjercicios from "./usuarioLogeado/Pantallas/AgregarEjercicios";
import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntrenandoConRutina from "./IniciarEntrenamiento/EntrenandoConRutina";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StartScreen}
          options={{
            headerShown: true,
            animationEnabled: true,
            animationTypeForReplace: "pop",
            title: "Inicio",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Ingresar" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Registrate" }}
        />
        <Stack.Screen
          name="HomeLoged"
          options={{
            headerShown: false,
          }}
          component={TabNavigation}
        />
        <Stack.Screen
          name="rutinaSeleccionada"
          component={RutinaSeleccionada}
        />
        <Stack.Screen name="AgregarEjercicios" component={AgregarEjercicios} />
        <Stack.Screen name="Ejercicios" component={DiaDeRutinaDisplay} />
        <Stack.Screen
          name="EntrenandoConRutina"
          component={EntrenandoConRutina}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
