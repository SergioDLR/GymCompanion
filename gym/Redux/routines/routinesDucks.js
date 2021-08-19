import axios from "axios";
const direccionDeConexion = "http://192.168.1.48:3000";
const configDuck = {
  routines: {},
  seleccionada: {},
  seleccionarDia: {}
};
const CARGAR_RUTINAS = "CARGAR_RUTINAS";
const CREAR_RUTINA = "CREAR_RUTINA";
const SELECCIONAR_RUTINA = "SELECCIONAR_RUTINA";
const CREAR_DIA = "CREAR_DIA";
const CREAR_EJERCICIO = "CREAR_EJERCICIO";
const ELIMINAR_DIA = "ELIMINAR_DIA";
const ELIMINAR_RUTINA = "ELIMINAR_RUTINA";
const SELECCIONAR_DIA = "SELECCIONAR_DIA";
const ELIMINAR_EJERCICIO = "ELIMINAR_EJERCICIO";
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
    case ELIMINAR_EJERCICIO:
      return {
        ...state,
        seleccionarDia: action.payload,
        seleccionada: action.payloadDos
      };
    default:
      return state;
  }
}

export const cargarRutinas = (permisions, loading) => (dispatch, getState) => {
  axios
    .get(direccionDeConexion + "/api/routines", {
      headers: { "auth-token": permisions }
    })
    .then(function(response) {
      loading(false);
      dispatch({
        type: CARGAR_RUTINAS,
        payload: response.data
      });
    })
    .catch(function(error) {
      loading(false);
      dispatch({
        type: CARGAR_RUTINAS,
        payload: {}
      });
    });
};
export const crearRutina = (name, permisions) => (dispatch, getState) => {
  axios
    .post(
      direccionDeConexion + "/api/routines",
      { name },
      {
        headers: { "auth-token": permisions }
      }
    )
    .then(function(response) {
      axios
        .get(direccionDeConexion + "/api/routines", {
          headers: { "auth-token": permisions }
        })
        .then(function(response) {
          dispatch({
            type: CREAR_RUTINA,
            payload: response.data
          });
        })
        .catch(function(error) {
          alert(error.response.error);
        });
    })
    .catch(function(error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    });
};
export const crearDia = (name, permisions, id) => async (
  dispatch,
  getState
) => {
  const data = await axios.post(
    direccionDeConexion + "/api/routinesDay/" + id,
    { nombre: name },
    {
      headers: { "auth-token": permisions }
    }
  );
  dispatch({ type: CREAR_DIA, payload: data.data.rutinaGuardada });
};

export const crearEjercicio = (
  nombre,
  permisions,
  id,
  repeticiones,
  series
) => async dispatch => {
  const ejercicio = {
    nombre,
    repeticiones,
    series
  };
  const data = await axios.put(
    direccionDeConexion + "/api/routinesDay/" + id,
    { ejercicio },
    {
      headers: { "auth-token": permisions }
    }
  );
  dispatch({
    type: CREAR_EJERCICIO,
    payload: data.data.rutinasActualizadas
  });
};

export const eliminarEjercicio = (
  ejercicio,
  permisions,
  id,
  setState
) => async dispatch => {
  const data = await axios.delete(
    direccionDeConexion + "/api/routinesDay/ejercicio/" + id,
    {
      data: ejercicio,
      headers: { "auth-token": permisions }
    }
  );
  setState(false);
  dispatch({
    type: ELIMINAR_EJERCICIO,
    payload: data.data.rutinaNueva,
    payloadDos: data.data.rutinaSeleccionada
  });
};

export const eliminarDiaDeRutina = (dia, id, permisions) => async dispatch => {
  const data = await axios.delete(
    direccionDeConexion + "/api/routinesDay/" + id,
    { data: dia, headers: { "auth-token": permisions } }
  );
  dispatch({ type: ELIMINAR_DIA, payload: data.data.rutina });
};

export const eliminarRutina = (id, permisions) => async dispatch => {
  const data = await axios.delete(direccionDeConexion + "/api/routines/" + id, {
    headers: { "auth-token": permisions }
  });

  if (data.status == 200) {
    dispatch({
      type: ELIMINAR_RUTINA,
      payload: data.data.rutinas
    });
  } else {
    alert("Ocurrio un error durante la eliminacion");
    dispatch(cargarRutinas(permisions));
  }
};

export const seleccionarRutina = seleccionada => dispatch => {
  dispatch({
    type: SELECCIONAR_RUTINA,
    payload: seleccionada
  });
};
export const seleccionarDia = dia => dispatch => {
  dispatch({
    type: SELECCIONAR_DIA,
    payload: dia
  });
};
