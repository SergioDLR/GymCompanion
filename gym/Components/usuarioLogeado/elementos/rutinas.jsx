import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { seleccionarRutina } from '../../../Redux/routines/routinesDucks';
import { useDispatch } from 'react-redux';
import { Card } from 'react-native-elements';
const Rutina = (props) => {
  const dispatch = useDispatch();
  function abrirRutina() {
    dispatch(seleccionarRutina(props.item));
    props.navigation.navigate('rutinaSeleccionada');
  }
  return (
    <View>
      <TouchableOpacity onPress={() => abrirRutina()}>
        <Card>
          <Card.Title>{props.item.name}</Card.Title>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default Rutina;
