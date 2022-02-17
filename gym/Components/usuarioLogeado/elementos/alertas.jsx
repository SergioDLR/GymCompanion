import React from "react";
import { View, Text } from "react-native";
import { Overlay, Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { esconderAlerta } from "../../../Redux/alertDucks";

const Alerta = () => {
  const alertState = useSelector((state) => state.alertas);
  const dispatch = useDispatch();
  if (alertState.visible) {
    return (
      <Overlay
        onBackdropPress={() => dispatch(esconderAlerta())}
        overlayStyle={{ padding: 30 }}
        visible={alertState.visible}
      >
        <Text>{alertState.mensaje}</Text>
        <View style={{ marginTop: 20 }}>
          <Button
            title={"Cerrar"}
            onPress={() => dispatch(esconderAlerta())}
          ></Button>
        </View>
      </Overlay>
    );
  } else {
    return false;
  }
};

export default Alerta;
