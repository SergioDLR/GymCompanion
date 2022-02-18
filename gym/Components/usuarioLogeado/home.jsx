import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Button, Input, Text, FAB } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { cargarRutinas, crearRutina } from "../../Redux/routines/routinesDucks";
import gStyles from "../../styles/main";
import Rutina from "./elementos/rutinas";
import tw from "tailwind-react-native-classnames";
import { cargarAlerta } from "../../Redux/alertDucks";
import Icon from "./elementos/Icon";
import PlusIcon from "../../assets/images/icons/plus.png";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nombreRutina, setNombreRutina] = useState("");
  const [loadingCreate, setLoadingCreate] = useState(false);
  const dispatch = useDispatch();
  const rutinas = useSelector((state) => state.routines.routines);
  const sesion = useSelector((state) => state.sesion.sesion);
  const [cargarRutinasLoading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(cargarRutinas(sesion.data.token, setLoading));
  }, [isFocused]);
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
      <ScrollView contentContainerStyle={{ flex: 1 }}>
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
            <Text h4 style={tw`text-center text-white mt-2`}>
              Tus rutinas:
            </Text>
          </View>
        </View>
        {renderRoutines(rutinas, cargarRutinasLoading, navigation)}
        <FAB
          icon={<Icon img={PlusIcon} tamaño={"5"} />}
          buttonStyle={{ borderRadius: 30 }}
          placement="right"
          onPress={() => setModalVisible(true)}
          color={"#fff"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const renderRoutines = (routines, cargo, navigation) => {
  if (cargo) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <View style={styles.rutinasStyle}>
        {routines.length > 0 &&
          routines.map((element, index) => (
            <Rutina key={index} item={element} navigation={navigation}></Rutina>
          ))}
      </View>
    );
  }
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
