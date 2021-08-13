import axios from "axios";
import DiaDeRutina from "../../Components/usuarioLogeado/elementos/diaDeRutina";
const configDuck = {
  routines: {},
  seleccionada: {},
  seleccionarDia: {},
};
const CARGAR_RUTINAS = "CARGAR_RUTINAS";
const CREAR_RUTINA = "CREAR_RUTINA";
const SELECCIONAR_RUTINA = "SELECCIONAR_RUTINA";
const CREAR_DIA = "CREAR_DIA";
const CREAR_EJERCICIO = "CREAR_EJERCICIO";
const ELIMINAR_DIA = "ELIMINAR_DIA";
const ELIMINAR_RUTINA = "ELIMINAR_RUTINA";
const SELECCIONAR_DIA = "SELECCIONAR_DIA";
export default function reducerRoutine(state = configDuck, action) {
  switch (action.type) {
    case CARGAR_RUTINAS:
      return { ...state, routines: action.payload };
    case CREAR_RUTINA:
      return { ...state, routines: action.payload };
    case ELIMINAR_RUTINA:
      return { ...state, routines: action.payload };
    case SELECCIONAR_RUTINA:
      return { ...state, seleccionada: action.payload };
    case CREAR_DIA:
      return { ...state, seleccionada: action.payload };
    case CREAR_EJERCICIO:
      return { ...state, seleccionada: action.payload };
    case ELIMINAR_DIA:
      return { ...state, seleccionada: action.payload };
    case SELECCIONAR_DIA:
      return { ...state, seleccionarDia: action.payload };
    default:
      return state;
  }
}

export const cargarRutinas = (permisions) => (dispatch, getState) => {
  axios
    .get("http://192.168.1.98:3000/api/routines", {
      headers: { "auth-token": permisions },
    })
    .then(function (response) {
      dispatch({
        type: CARGAR_RUTINAS,
        payload: response.data,
      });
    })
    .catch(function (error) {
      console.log(error.response);
    });
};
export const crearRutina = (name, permisions) => (dispatch, getState) => {
  axios
    .post(
      "http://192.168.1.98:3000/api/routines",
      { name },
      {
        headers: { "auth-token": permisions },
      }
    )
    .then(function (response) {
      axios
        .get("http://192.168.1.98:3000/api/routines", {
          headers: { "auth-token": permisions },
        })
        .then(function (response) {
          dispatch({
            type: CREAR_RUTINA,
            payload: response.data,
          });
        })
        .catch(function (error) {
          alert(error.response.error);
        });
    })
    .catch(function (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    });
};
export const crearDia =
  (name, permisions, id) => async (dispatch, getState) => {
    const data = await axios.post(
      "http://192.168.1.98:3000/api/routinesDay/" + id,
      { nombre: name },
      {
        headers: { "auth-token": permisions },
      }
    );
    dispatch({ type: CREAR_DIA, payload: data.data.rutinaGuardada });
  };

export const crearEjercicio =
  (nombre, permisions, id, repeticiones, series) => async (dispatch) => {
    const ejercicio = {
      nombre,
      repeticiones,
      series,
    };
    const data = await axios.put(
      "http://192.168.1.98:3000/api/routinesDay/" + id,
      { ejercicio },
      {
        headers: { "auth-token": permisions },
      }
    );
    console.log(data);
    dispatch({
      type: CREAR_EJERCICIO,
      payload: data.data.rutinasActualizadas,
    });
  };

export const eliminarEjercicio =
  (ejercicio, permisions, id) => async (dispatch) => {
    const data = await axios.delete(
      "http://192.168.1.98:3000/api/routinesDay/ejercicio" + id,
      { ejercicio },
      {
        headers: { "auth-token": permisions },
      }
    );
  };

export const eliminarDiaDeRutina =
  (dia, id, permisions) => async (dispatch) => {
    const data = await axios.delete(
      "http://192.168.1.98:3000/api/routinesDay/" + id,
      { data: dia, headers: { "auth-token": permisions } }
    );
    dispatch({ type: ELIMINAR_DIA, payload: data.data.rutina });
  };

export const eliminarRutina = (id, permisions) => async (dispatch) => {
  const data = await axios.delete(
    "http://192.168.1.98:3000/api/routines/" + id,
    { headers: { "auth-token": permisions } }
  );
  dispatch({
    type: ELIMINAR_RUTINA,
    payload: data.data.rutinas,
  });
};

export const seleccionarRutina = (seleccionada) => (dispatch) => {
  dispatch({
    type: SELECCIONAR_RUTINA,
    payload: seleccionada,
  });
};
export const seleccionarDia = (dia) => (dispatch) => {
  dispatch({
    type: SELECCIONAR_DIA,
    payload: dia,
  });
};
