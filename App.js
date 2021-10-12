
import React, { useState } from 'react';
import { StyleSheet,  View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from './Screens/Login';
import Principal from './Screens/Principal';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} />
      <Stack.Screen name="Principal" component={Principal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
} 
  


