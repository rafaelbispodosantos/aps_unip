import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera'
import axios from 'axios'

import { serve, showError } from '../../common';
import { decode as atob } from "base-64";
import NoPermissionGranted from '../NoPermissionGranted'
import styles from './styles'

export default function Login({ navigation }) {
  const camRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [permission, setPermission] = useState(null);
  const [picture, setPicture] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const focused = useIsFocused();


  const requestCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setPermission(status === 'granted');
  }

  const signin = () => {
    const { base64 } = picture
    console.log(base64)
    const photoConvertedFormData = convertBase64(base64)

    for (let i of photoConvertedFormData.entries()) {
      console.log(i[0], i[1])
    }

  }
  useEffect(() => {
    requestCameraPermission();
  }, [])

  function convertBase64(base64) {
    let formData = new FormData()
    let imagem = atob(base64)
    const convertImagem = new Array(imagem.length)
    for (let i = 0; i < convertImagem.length; i++) {
      convertImagem[i] = imagem.charCodeAt(i)
    }
    imagem = new Uint8Array(convertImagem)
    imagem = new Blob([imagem], { type: 'image/png' })
    imagem = new File([imagem], "imagemUsuario.png", { type: "image/png" })
    formData.append('imagemUsuario', imagem)
    for (let i of formData) {
      console.log(i[0], i[1])
    }

    return formData

  }


  async function takePhoto() {
    if (camRef) {

      const options = {
        quality: 1,
        base64: true,
        skipProcessing: false
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
      {focused ? <Camera style={styles.imageShow} type={type} ref={camRef} /> : <Text>Teste</Text>}
      {openModal && <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        style={{ height: '70%' }}
      >
        <View style={styles.modalView}>
          <Image style={styles.modalImage} source={{ uri: picture.uri }} />

          <TouchableOpacity style={[styles.button, { width: '90%', position: 'absolute', bottom: '7%' }]} onPress={() => { setOpenModal(false) }}>
            <Text style={styles.btnTextStyle}>Tirar outra foto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { width: '90%', position: "absolute", bottom:'15%' }]} onPress={signin}>
            <Text style={styles.btnTextStyle}>FAZER LOGIN </Text>
          </TouchableOpacity>
        </View>

      </Modal>}


      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={takePhoto}>
        <Text style={styles.btnTextStyle}>Tirar Foto</Text>
      </TouchableOpacity>


    </View>
  );
}