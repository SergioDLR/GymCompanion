import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
const Rutina = (props, { navigation }) => {
  return (
    <View>
      <Card>
        <Card.Title>{props.item.name}</Card.Title>
      </Card>
    </View>
  );
};

export default Rutina;
