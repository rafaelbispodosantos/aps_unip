// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { Component, useState, useEffect, useRef } from 'react';
import { Text, View, Platform, TouchableOpacity, TextInput, Image, StyleSheet, Button, InputAccessoryView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  state = {

    nome: '',
    email: '',
    password: '',
    confimrPassword: '',

    image: null
  }
  const [stageNew ,setStageNew ] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [capturePhoto, setCapturePhoto] = useState(null);
  const [open, setOpen] = useState(null);




  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (

    <View style={styles.container}>

      <View style={styles.firstrow}>


        <Text style={styles.btnTextStyle}>
          {stageNew ? 'Faça login no novo reconhencimento Facial' : 'Faca o cadrasto facial'}
        </Text>





      </View>
      <View style={styles.secondrow}>

        <Camera style={{ flexDirection: 'row', width: 200, height: 150, justifyContent: 'center' }} type={type} ref={ref => {
          setCameraRef(ref);
        }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              justifyContent: 'flex-end'
            }}>


          </View>


        </Camera>



      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.1}
         onPress={async () => {
          if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setCapturePhoto(photo.uri);
            setOpen(true)
            console.log('photo', photo);
          }
        }}>
          <Text style={styles.btnTextStyle}>Tire uma foto </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdrow}>
        <Image
          style={{ width: 200, height: 150, borderRadius: 10 ,alignItems:'center'}}
          source={{ uri: capturePhoto }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.1}>
          <Text style={styles.btnTextStyle}>
            {stageNew ?'Fazer Login' : 'Confirmar Foto'} </Text>

        </TouchableOpacity>

        {stageNew ?  <Text></Text> :
        <TextInput style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
/>}
        
        </View>

       
      <View style={styles.fourthrow}>
      <TouchableOpacity style={{ padding: 10 }}               >
                    <Text style={styles.btnTextStyle}>
{ stageNew ?'Faça seu cadrastro' :  'Cadastrar'} 
                    </Text>

                </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#d0e2dc',
  },
  firstrow: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    flex: 0.4,
    backgroundColor: "#458b74"
  },
  secondrow: {
    flex: 1.5,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
    backgroundColor: "#d0e2dc"
  },
  thirdrow: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
    backgroundColor: "#d0e2dc"
  },
  fourthrow: {
    flex: 0.5,
    backgroundColor: "#458b74"
  },
  btnTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b6',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: '50%'

  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#889099',
    width: '90%',
    height: 45,
    alignItems: 'center',
    borderRadius: 7,



  },
});



function SettingsScreen() {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = 'Placeholder Text';
  const [text, setText] = useState(initialText);
  return (
    <View style={styles.container}>

      <View style={styles.firstrow}>
        <Text style={styles.btnTextStyle}>Faça Seu registro </Text>

      </View>

      <View style={styles.secondrow}>
     


        


       
        <TextInput style={styles.input}
          placeholder="Nome"
          autoCorrect={false}

        />



        <View style={styles.thirdrow}>


        </View>
        <View style={styles.fourthrow}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.button} activeOpacity={0.1}>
              <Text style={styles.btnTextStyle}> Fazer Login </Text>
            </TouchableOpacity></View>
        </View>
      </View>
    </View>
  );
}




const Tab = createBottomTabNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Register') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Login" component={HomeScreen} />
        <Tab.Screen name="Register" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}