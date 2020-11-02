// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState, useEffect } from 'react';
import { Button, Image, TextInput, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import face2 from '../assets/face2.png';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { server, showError, showSuccess } from './common';
import axios from 'axios';





function cadastro() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("robson");
  const [senha, setSenha] = useState('123456');
  const [email, setEmail] = useState('robson@gmail.com');


  signup = async()=> {
      try{
          await axios.post(`${server}/signup`,{
              name: {name},
              email: {senha},
              password: {senha}
             
          })

          showSucess('Usuario cadastrado!')
        
                }
                catch(e){
                    showError(e)
                }
  }
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      videoMaxDuration: 8,


    })

    console.log(result);
    

    if (!result.cancelled) {
      setImage(result.uri);
      
    }
  };
  const fileToUpload = image;
      const data = new FormData();
      data.append('type', 'video');
      data.append('file_attachment', fileToUpload);

  return (

    <View style={styles.conteiner}>
      <View>
<Text style={styles.text}> Faça login no novo reconhencimento Facial</Text>
      </View>
      
      <Image
          style={styles.image}
          source={face2} />
     

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text  style={styles.btnTextStyle}>CADASTRE SUA FACE</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


    <TextInput style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
      value={name}
        onChangeText={text => {
          setName(text);}}
      />
      <TouchableOpacity style={styles.button} onPress={ signup }>
        <Text style={styles.btnTextStyle}>REGISTRA CONTA </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 conteiner :{
    flex: 1,
     alignItems: 'center',
      justifyContent: 'center',
       backgroundColor: '#d0e2dc',
       
    },
    text:{ marginBottom: 100 ,
    color:  '#2980b6',
    textAlign: 'justify',
    fontWeight: '700',
    fontSize: 17,},
  btnTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
  image: { width: 200,
   height: 150,
    borderRadius: 10, 
    alignItems: 'center' },
 
  
  
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
 



 
});
export default cadastro;