import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const direccionDeConexion = "http://localhost:3000";
import { cargarAlerta } from "./alertDucks";
import { CommonActions } from "@react-navigation/native";
const configDuck = {
  sesion: {},
};
const REGISTRAR_USUARIO = "REGISTRAR_USUARIO";
const INICIAR_SESION = "INICIAR_SESION";
const REANUDAR_SESSION = "REANUDAR_SESSION";
export default function reducerSesion(state = configDuck, action) {
  switch (action.type) {
    case REGISTRAR_USUARIO:
      return { ...state, sesion: action.payload };
    case INICIAR_SESION:
      return { ...state, sesion: action.payload };
    case REANUDAR_SESSION:
      return { ...state, sesion: action.payload };
    default:
      return state;
  }
}
export const registrarUsuario =
  (user, navigation, loaded) => (dispatch, getState) => {
    axios
      .post(direccionDeConexion + "/api/auth", {
        user: user,
      })
      .then(function (response) {
        loaded(false);
        if (response.status === 200) {
          dispatch(cargarAlerta("Cuenta creada con exito"));
          dispatch({ type: REGISTRAR_USUARIO, payload: response.data });

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "HomeLoged" }],
            })
          );
        }
      })
      .catch(function (error) {
        loaded(false);
        dispatch(cargarAlerta("Ocurrio un error"));
      });
  };
export const iniciarSesion =
  (email, password, navigation, loadedState) => (dispatch, getState) => {
    axios
      .post(direccionDeConexion + "/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        dispatch({ type: INICIAR_SESION, payload: response.data });

        if (response.status === 200) {
          const jsonValue = JSON.stringify(response.data);
          AsyncStorage.setItem("@session", jsonValue);

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "HomeLoged" }],
            })
          );
        }
      })
      .catch(function (error) {
        loadedState(false);

        dispatch(cargarAlerta("El email o la contraseña no es correcto"));
      });
  };

export const reanudarSession = (session) => (dispatch) => {
  dispatch({ type: REANUDAR_SESSION, payload: session });
};
