import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeLogeado from './usuarioLogeado/homeLoged';
import Login from './login';
import StartScreen from './startScreen';
import Register from './register';
import * as React from 'react';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          options={{ headerShown: false }}
          component={StartScreen}
        />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen
          name='LogedHomeUser'
          options={{ title: 'My home', headerLeft: null }}
          component={HomeLogeado}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
