import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Uso do Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Pages
import Welcome from '../../pages/Welcome';
import SingIn from '../../pages/SingIn';
import SingUp from '../../pages/SingUp';
import HomeScreen from '../Home/index';
import AnimePage from '../../pages/AnimePage';

// Options
const optionsLogin = {
  title: '',
  headerShown: true,
  headerTransparent: true,
  headerTintColor: '#fff',
}

export default function Routes({ login }) {
  return (
    <Stack.Navigator initialRouteName={login}>
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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="AnimePage"
        component={AnimePage}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}