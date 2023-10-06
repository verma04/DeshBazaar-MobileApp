import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../splashScreen/SplashScreen';
import Login from './LoginScreen';

const Stack = createNativeStackNavigator();

function Auth({setActive}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack.Screen
        initialParams={{setActive: setActive}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default Auth;
