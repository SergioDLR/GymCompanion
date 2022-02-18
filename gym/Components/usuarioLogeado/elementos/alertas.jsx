import React from "react";
import { View, Text } from "react-native";
import { Overlay, Button } from "react-native-elements";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import { esconderAlerta } from "../../../Redux/alertDucks";

const Alerta = () => {
  const alertState = useSelector((state) => state.alertas);
  const dispatch = useDispatch();
  if (alertState.visible) {
    return (
      <View style={{ flex: 1 }}>
        <Modal isVisible={alertState.visible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button
              title="Hide modal"
              onPress={() => dispatch(esconderAlerta())}
            />
          </View>
        </Modal>
      </View>
    );
  } else {
    return false;
  }
};

export default Alerta;
