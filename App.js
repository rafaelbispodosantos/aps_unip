import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login/index'
import CriarConta from './src/screens/CriarConta/CriarConta'
function Home({ navigation }) {
  return (
    <View style={{flex: 1}}>
        <View>
            <Button
            title="FAZER CADASTRO"
            onPress={() => navigation.navigate('Cadastra')}
          />
       
        </View>

        <View style={{flex: 1}}>
           <Login/>
        </View>
        </View>
        )  
}

function Cadastra({ navigation }) {
  return (
    <View style={{flex: 1}}>
    <View>
    <Button title="CRIAR CONTA" onPress={() => navigation.goBack()} />
   
    </View>

    <View style={{flex: 1}}>
       <CriarConta/>
    </View>
    </View>
    )
}
const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="Cadastra"
        component={Cadastra}
        options={{ headerStyleInterpolator: forFade,
          headerTintColor: 'white', 
          headerStyle: { backgroundColor: 'tomato' }}}
      />
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
