import {Alert, Platform} from 'react-native'

const serve = Platform === 'ios'
   ?'http://localhost:3000' : 'http://10.0.2.2.3000'

   function showError(err) {
       Alert.alert('Ops! Ocorreu um Problema!', `Mensagem:${err}`)
       
   }

   function showSucces(msg){
       Alert.alert('Sucesso!',msg)
   }

   export {serve, showError, showSucces}