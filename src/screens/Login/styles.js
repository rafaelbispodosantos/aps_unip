import {StyleSheet} from 'react-native'


export default styles = StyleSheet.create({
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
    modalView:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(0,0,0,0.8)',
      width: '100%'
    },
    modalImage:{
      width: '80%', 
      height: '60%', 
      borderRadius: 24, 
      borderWidth :1,
      borderColor:'rgba(255,255,255,0.3)',
      position: 'absolute', 
      top: 100 
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
  
  
  
  