import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { cargarRutinas } from '../../Redux/routines/routinesDucks';

const Home = () => {
  const dispatch = useDispatch();
  const rutinas = useSelector((state) => state.rutinas);
  const sesion = useSelector((state) => state.sesion);
  useEffect(() => {
    dispatch(cargarRutinas(sesion.sesion.data.token));
  }, []);
  return (
    <View>
      <Text>Tus rutinas:</Text>
      <Button title='Crear nueva rutina'></Button>
      <Text>Tus ultimos entrenamientos</Text>
    </View>
  );
};

export default Home;
