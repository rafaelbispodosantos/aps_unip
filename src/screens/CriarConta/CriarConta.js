
import React, { useState, useEffect } from 'react';
import { Button, Image, TextInput, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import face2 from '../../../assets/face2.png';
import styles from './styles'




function cadastro() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [senha, setSenha] = useState('123456');
  const [email, setEmail] = useState('robson@gmail.com');


  
  

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


  return (

    <View style={styles.container}>
      <View style={styles.containerTituloApp} >
        <Text style={styles.tituloApp}> Faça login no novo reconhencimento Facial</Text>
      </View>
      
      <Image
          style={ { width: '90%', height: '60%', borderRadius: 24, position: 'absolute', top: 100 , justifyContent: 'center', alignItems: 'center'}}
          source={image== null ? face2 : { uri: image }} />
     

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text  style={styles.btnTextStyle}>Grave um Video</Text>
      </TouchableOpacity>
     


    <TextInput style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
      value={name}
        onChangeText={text => {
          setName(text);}}
      />
      
    </View>
  );
}


export default cadastro;