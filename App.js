// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login'
import Cadastro from './src/screens/Cadastro'
import NoPermissionGranted from './src/screens/NoPermissionGranted'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator lazy={false} swipeEnabled screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Login') {
            iconName = 'user'
          } else if (route.name === 'Cadastro') {
            iconName = 'add-user'
          }else{
            iconName = 'circle'
          }

          // You can return any component that you like here!
          return <Entypo  name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}