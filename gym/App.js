import * as React from "react";
import { StyleSheet } from "react-native";
import StackNavigation from "./Components/stackNavegacion";
import { Provider } from "react-redux";
import generateStore from "./Redux/store";
import Alerta from "./Components/usuarioLogeado/elementos/alertas";

export default function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Alerta />
      <StackNavigation></StackNavigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
