import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Uso do Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Pages
import Welcome from '../../pages/Welcome';
import SingIn from '../../pages/SingIn';
import SingUp from '../../pages/SingUp';
import HomeScreen from '../Screens/index';
import AnimePage from '../../pages/AnimePage';

// Options
const optionsLogin = {
  title: '',
  headerShown: true,
  headerTransparent: true,
  headerTintColor: '#fff',
}

export default function Login() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={optionsLogin}
      />
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={optionsLogin}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={optionsLogin}
      />
    </Stack.Navigator>
  );
}

/*<Stack.Screen
        name="Logado"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      /> */