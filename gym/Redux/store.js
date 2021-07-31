import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerSesion from './sesionDucks';
import reducerRoutine from './routines/routinesDucks';
const rootReducer = combineReducers({
  sesion: reducerSesion,
  routines: reducerRoutine,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
