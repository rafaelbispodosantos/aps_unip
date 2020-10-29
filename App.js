// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState, useEffect } from 'react';
import { Button, Image, TextInput, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import face from './assets/face.png'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login'
import cadastro from './src/cadastro';


const Tab = createBottomTabNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = focused ? 'user' : 'fingerprint';
          } else if (route.name === 'Register') {
            iconName = focused ? 'add-user' : 'add-user';
          }

          // You can return any component that you like here!
          return <Entypo  name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: '#ffb5a8',
        }}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={cadastro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}