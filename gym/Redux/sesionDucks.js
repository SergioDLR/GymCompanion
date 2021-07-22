import axios from 'axios';
const configDuck = {
  sesion: {},
};
const REGISTRAR_USUARIO = 'REGISTRAR_USUARIO';
export default function reducerSesion(state = configDuck, action) {
  switch (action.type) {
    case REGISTRAR_USUARIO:
      return { ...state, sesion: action.payload };
    default:
      return state;
  }
}
export const registrarUsuario = (user) => (dispatch, getState) => {
  axios
    .post('http://192.168.1.98:3000/api/auth', {
      user: user,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
