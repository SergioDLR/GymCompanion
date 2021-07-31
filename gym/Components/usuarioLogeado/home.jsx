import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const Home = () => {
  return (
    <View>
      <Text>Tus rutinas:</Text>
      <Button title='Crear nueva rutina'></Button>
      <Text>Tus ultimos entrenamientos</Text>
    </View>
  );
};

export default Home;
