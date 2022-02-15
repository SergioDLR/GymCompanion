import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Modal,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Button, Input, Text, Card, FAB, Overlay } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { cargarRutinas, crearRutina } from "../../Redux/routines/routinesDucks";
import gStyles from "../../styles/main";
import Rutina from "./elementos/rutinas";

import Icon from "react-native-vector-icons/FontAwesome";
import { cargarAlerta } from "../../Redux/alertDucks";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreRutina, setNombreRutina] = useState("");
  const [loadingCreate, setLoadingCreate] = useState(false);
  const dispatch = useDispatch();
  const rutinas = useSelector((state) => state.routines.routines);
  const sesion = useSelector((state) => state.sesion.sesion);
  const [cargarRutinasLoading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(cargarRutinas(sesion.data.token, setLoading));
  }, []);
  function onSubmitRutina() {
    if (nombreRutina.length > 3) {
      setLoadingCreate(true);
      dispatch(crearRutina(nombreRutina, sesion.data.token, setLoadingCreate));
      setModalVisible(!modalVisible);
      setNombreRutina("");
    } else {
      dispatch(cargarAlerta("Ingresa un nombre mayor a 3 caracteres"));
    }
  }
  return (
    <SafeAreaView style={gStyles.Container2}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginTop: 40 }}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Ingresa el nombre de la rutina
                </Text>
                <Input
                  placeholder="Nombre Rutina"
                  onChangeText={(nombreRutina) => setNombreRutina(nombreRutina)}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flexBasis: "60%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => onSubmitRutina()}
                      loading={loadingCreate}
                      title="Aceptar"
                    ></Button>
                    <Button
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                      title="Cancelar"
                    ></Button>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <View>
            <Text p style={{ color: "#fff" }}>
              Tus rutinas:
            </Text>
          </View>
          <View style={styles.rutinasStyle}>
            {rutinas.length > 0 &&
              rutinas.map((element, index) => (
                <Rutina
                  key={index}
                  item={element}
                  navigation={navigation}
                ></Rutina>
              ))}
          </View>
        </View>
        <FAB
          icon={<Icon name="plus" size={15} color="black" />}
          buttonStyle={{ borderRadius: 30 }}
          placement={"right"}
          onPress={() => setModalVisible(true)}
          color={"#fff"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
  },
  rutinasStyle: {
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
