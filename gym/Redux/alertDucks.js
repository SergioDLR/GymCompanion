const configDuck = {
  mensaje: "",
  visible: false,
};
const ALERTAR = "ALERTAS";
const ESCONDER = "ESCONDER";
export default function reducerAlertas(state = configDuck, action) {
  switch (action.type) {
    case ALERTAR:
      return { ...state, mensaje: action.payload, visible: action.payload2 };
    case ESCONDER:
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
}
export const cargarAlerta = (mensaje) => (dispatch) => {
  dispatch({
    type: ALERTAR,
    payload: mensaje,
    payload2: true,
  });
};
export const esconderAlerta = (mensaje) => (dispatch) => {
  dispatch({
    type: ESCONDER,
    payload: false,
  });
};
