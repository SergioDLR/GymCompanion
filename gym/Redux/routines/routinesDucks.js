import axios from 'axios';
const configDuck = {
  routines: {},
  seleccionada: {},
};
const CARGAR_RUTINAS = 'CARGAR_RUTINAS';
const CREAR_RUTINA = 'CREAR_RUTINA';
const SELECCIONAR_RUTINA = 'SELECCIONAR_RUTINA';
const CREAR_DIA = 'CREAR_DIA';
export default function reducerRoutine(state = configDuck, action) {
  switch (action.type) {
    case CARGAR_RUTINAS:
      return { ...state, routines: action.payload };
    case CREAR_RUTINA:
      return { ...state, routines: action.payload };
    case SELECCIONAR_RUTINA:
      return { ...state, seleccionada: action.payload };
    case CREAR_DIA:
      return { ...state, seleccionada: action.payload };
    default:
      return state;
  }
}

export const cargarRutinas = (permisions) => (dispatch, getState) => {
  axios
    .get('http://192.168.1.98:3000/api/routines', {
      headers: { 'auth-token': permisions },
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
      'http://192.168.1.98:3000/api/routines',
      { name },
      {
        headers: { 'auth-token': permisions },
      }
    )
    .then(function (response) {
      axios
        .get('http://192.168.1.98:3000/api/routines', {
          headers: { 'auth-token': permisions },
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
      'http://192.168.1.98:3000/api/routinesDay/' + id,
      { nombre: name },
      {
        headers: { 'auth-token': permisions },
      }
    );
    dispatch({ type: CREAR_DIA, payload: data.data.rutinaGuardada });
  };
export const seleccionarRutina = (seleccionada) => (dispatch) => {
  dispatch({
    type: SELECCIONAR_RUTINA,
    payload: seleccionada,
  });
};
