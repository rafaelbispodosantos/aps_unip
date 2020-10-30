// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState, useEffect } from 'react';
import { Image, TextInput, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios';


import face2 from '../../../assets/face2.png';
import { server, showError } from '../../common';
import './styles'


export default function Cadastro() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("robson");
  const [senha, setSenha] = useState('123456');
  const [email, setEmail] = useState('robson@gmail.com');
  const focused = useIsFocused();

  signup = async () => {
    try {
      await axios.post(`${server}/signup`, {
        name: { name },
        email: { senha },
        password: { senha }

      })

      showSucess('Usuario cadastrado!')

    }
    catch (e) {
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

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d0e2dc', }}>
      <View>
        <Text style={{ marginBottom: 100, color: '#2980b6', textAlign: 'justify', fontWeight: '700', fontSize: 17, }}> Faça login no novo reconhencimento Facial</Text>
      </View>
      <Image
        style={{ width: 200, height: 150, borderRadius: 10, alignItems: 'center' }}
        source={face2} />


      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.btnTextStyle}>CADASTRE SUA FACE</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


      <TextInput style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={signup}>
        <Text style={styles.btnTextStyle}>REGISTRA CONTA </Text>
      </TouchableOpacity>
    </View>
  );
}
