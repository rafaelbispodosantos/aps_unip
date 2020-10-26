// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera'
import axios from 'axios'

import { serve, showError } from './common';
import { decode as atob } from "base-64";
import NoPermissionGranted from './screens/NoPermissionGranted'


export default function login() {
  const camRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [permission, setPermission] = useState(null);
  const [picture, setPicture] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [firstOpen,setFirstOpen] = useState(false);


  signin = async () => {
    try {
      const res = await axios.post(`${serve}/signin`, {
        email: Object.values({ email }),
        password: Object.values({ senha })
      })
      axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
    }
    catch (e) {
      showError(e)

    }

  }


  const requestCameraPermission = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setPermission(status === 'granted');
      console.log(firstOpen)
      setFirstOpen(true)
    }

  useEffect(() => {
    requestCameraPermission();
  }, [])




  async function takePhoto() {
    if (camRef) {

      const options = {
        quality: 1,
        base64: true,
      }

      const photo = await camRef.current.takePictureAsync(options);
      setPicture(photo)
      setOpenModal(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTituloApp}>
        <Text style={styles.tituloApp}> Faça login no novo reconhecimento facial</Text>
      </View>

    {firstOpen ? console.log('yes') : console.log('no')}
      {!permission ? <NoPermissionGranted /> : <Camera style={styles.imageShow} type={type} ref={camRef} />}

      {openModal && <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        style={{ height: '70%' }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.8)', width: '100%' }}>
          <Image style={{ width: '80%', height: '60%', borderRadius: 24, position: 'absolute', top: 100 }} source={{ uri: picture.uri }} />

          <TouchableOpacity style={[styles.button, { width: '90%', position: 'absolute', bottom: 45 }]} onPress={() => { setOpenModal(false) }}>
            <Text style={styles.btnTextStyle}>Tirar outra foto</Text>
          </TouchableOpacity>
        </View>

      </Modal>}


      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={takePhoto}>
        <Text style={styles.btnTextStyle}>Tirar Foto</Text>
      </TouchableOpacity>



      <TouchableOpacity style={[styles.button, { width: '90%' }]} onPress={signin}>
        <Text style={styles.btnTextStyle}>FAZER LOGIN </Text>
      </TouchableOpacity>
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
  containerTituloApp: {
    width: '90%',
    height: 60,
    marginTop: 10,
    marginBottom: 40
  },
  tituloApp: {
    color: '#2980b6',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 24,
  },
  imageShow: {
    width: '90%',
    height: 400,
    borderRadius: 15,
    alignItems: 'center'
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
    marginTop: 25,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

});



