import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { crearDia } from '../../../Redux/routines/routinesDucks';
import DiaDeRutina from './diaDeRutina';
const RutinaSeleccionada = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreRutina, setNombreRutina] = useState('');
  const sesion = useSelector((state) => state.sesion.sesion);
  const rutina = useSelector((state) => state.routines.seleccionada);

  function onSubmitDia() {
    dispatch(crearDia(nombreRutina, sesion.data.token, rutina._id));
  }
  return (
    <View>
      <Text></Text>
      <Button title='Añadir dia' onPress={() => setModalVisible(true)}></Button>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Ingresa el nombre de la rutina</Text>
            <Input
              placeholder='Nombre dia de entrenamiento'
              onChangeText={(nombreRutina) => setNombreRutina(nombreRutina)}
            />
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => onSubmitDia()}
              title='Aceptar'
            ></Button>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              title='Cancelar'
            ></Button>
          </View>
        </View>
      </Modal>
      {rutina.entrenamientoDias.length > 0 &&
        rutina.entrenamientoDias.map((e) => (
          <DiaDeRutina item={e}></DiaDeRutina>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default RutinaSeleccionada;
