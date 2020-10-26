import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Camera} from 'expo-camera'

export default function NoPermissionGranted({configPermission}, ...props) {
  useEffect(() => { 
    const {status} = Camera.requestPermissionsAsync();
    if (status){
      configPermission(status)
    }
  }, [])




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Por favor garanta permissão</Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});


