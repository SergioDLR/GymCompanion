import axios from 'axios';
const configDuck = {
  routines: {},
};
const CARGAR_RUTINAS = 'CARGAR_RUTINAS';
export default function reducerRoutine(state = configDuck, action) {
  switch (action.type) {
    case CARGAR_RUTINAS:
      return { ...state, routines: action.payload };
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
