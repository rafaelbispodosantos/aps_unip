// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState, useEffect } from 'react';
import { Button, Image, TextInput, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import face from '../assets/face.png'
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { server, showError, showSuccess} from './common';
import axios from 'axios'



function login() {
   const [image, setImage] = useState(null);
 const [name, setName] = useState('Rafael');
 const [senha, setSenha] = useState("123456");
 const [email, setMail ]= useState("rafael@gmail.com");



 signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: Object.values({email}),
                password: Object.values({senha})
            })
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
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
    console.log(Object.values({email}));
    console.log(Object.values({senha}));

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
<Text style={{ marginBottom: 100 ,color:  '#2980b6',textAlign: 'justify',fontWeight: '700',fontSize: 17,}}> Faça login no novo reconhencimento Facial</Text>
      </View>
      
      <Image
          style={{ width: 200, height: 150, borderRadius: 10, alignItems: 'center' }}
          source={face} />
     

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text  style={styles.btnTextStyle}>GRAVAR</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


      <TextInput style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
      value={name}
        onChangeText={text => {
          setName(text);}}
      />
      <TouchableOpacity style={styles.button} onPress={signin}>
        <Text style={styles.btnTextStyle}>FAZER LOGIN </Text>
      </TouchableOpacity>
      
       
    </View>
  );
}

      

const styles = StyleSheet.create({
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
export default login;
