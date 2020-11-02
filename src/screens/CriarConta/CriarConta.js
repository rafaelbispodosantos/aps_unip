
import React, { useState, useEffect } from 'react';
import { Button, Image, TextInput, View, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import face2 from '../../../assets/face2.png';




export default props=> {
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
        <Text style={styles.tituloApp}> Faça o cadastro no novo reconhencimento Facial</Text>
      </View>
      
      <Image
          style={ { width: '90%', height: '60%', borderRadius: 24, position: 'absolute', top: 100 , justifyContent: 'center', alignItems: 'center'}}
          source={image== null ? face2 : { uri: props.image }} />
     

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text  style={styles.btnTextStyle}>Grave um Video</Text>
      </TouchableOpacity>
     


    <TextInput style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
      value={props.name}
        onChangeText={text => {
          setName(text);}}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d0e2dc',
  },
  tituloApp: {
      color: '#2980b6',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 24,
      justifyContent: 'flex-start'
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


  containerTituloApp: {
      flex: 1,
      width: '90%',
      height: 60,
      marginTop: 10,
      marginBottom: 40
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
  marginBottom: 10,
  width: '50%'

},
input: {
  backgroundColor: '#fff',
  width: '80%',
  marginBottom: 50,
  color: '#222',
  fontSize: 17,
  borderRadius: 7,
  padding: 8
},





});


