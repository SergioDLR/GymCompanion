import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { cargarRutinas, crearRutina } from '../../Redux/routines/routinesDucks';
import gStyles from '../../styles/main';
import Rutina from './elementos/rutinas';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreRutina, setNombreRutina] = useState('');
  const dispatch = useDispatch();
  const rutinas = useSelector((state) => state.routines.routines);
  const sesion = useSelector((state) => state.sesion.sesion);
  useEffect(() => {
    dispatch(cargarRutinas(sesion.data.token));
  }, []);
  function onSubmitRutina() {
    if (nombreRutina.length > 3) {
      dispatch(crearRutina(nombreRutina, sesion.data.token));
      setModalVisible(!modalVisible);
    } else {
      alert('Ingresa un nombre mayor a 3 caracteres');
    }
  }
  return (
    <View style={gStyles.Container2}>
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
              placeholder='Nombre Rutina'
              onChangeText={(nombreRutina) => setNombreRutina(nombreRutina)}
            />
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => onSubmitRutina()}
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
      <Text>Tus rutinas:</Text>
      <Button
        onPress={() => setModalVisible(true)}
        title='Crear nueva rutina'
      ></Button>
      <Text>Tus ultimos entrenamientos</Text>
      {rutinas.length > 0 &&
        rutinas.map((element) => (
          <Rutina
            item={element}
            key={element._id}
            navigation={navigation}
          ></Rutina>
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

export default Home;
