import axios from 'axios';
const configDuck = {
  sesion: {},
};
const REGISTRAR_USUARIO = 'REGISTRAR_USUARIO';
const INICIAR_SESION = 'INICIAR_SESION';
export default function reducerSesion(state = configDuck, action) {
  switch (action.type) {
    case REGISTRAR_USUARIO:
      return { ...state, sesion: action.payload };
    case INICIAR_SESION:
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
      dispatch({ type: REGISTRAR_USUARIO, payload: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const iniciarSesion =
  (email, password, navigation) => (dispatch, getState) => {
    axios
      .post('http://192.168.1.98:3000/api/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        dispatch({ type: INICIAR_SESION, payload: response.data });

        if (response.status === 200) {
          alert('Sesion iniciada con exito');
          navigation.navigate('LogedHomeUser');
        }
      })
      .catch(function (error) {
        alert('El email o la contraseña no es correcto');
      });
  };
