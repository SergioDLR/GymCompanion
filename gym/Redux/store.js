import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerSesion from "./sesionDucks";
import reducerRoutine from "./routines/routinesDucks";
import reducerAlertas from "./alertDucks";
import reducerEntrenamiento from "./entrenamientosDucks";
const rootReducer = combineReducers({
  sesion: reducerSesion,
  routines: reducerRoutine,
  alertas: reducerAlertas,
  entrenamiento: reducerEntrenamiento
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
