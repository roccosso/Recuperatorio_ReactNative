import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Boton from '../components/Boton';
import messi from '../../assets/messi.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function BlueScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [clave, setClave] = useState('')

  const handleLogin = async () => {
    if (email.toLowerCase() != '' && clave.toLowerCase() != ''){
      // Guardar en el AsyncStorage
      await AsyncStorage.setItem('nombrecito', email);
      await AsyncStorage.setItem('edadcita', clave);
      navigation.navigate('Uno');
    }else{
      let mensaje = "";
      if (email.toLowerCase() == ''){
        mensaje =  mensaje + "El Nombe esta vacio ";
      }
      if (clave.toLowerCase() == ''){
        mensaje =  mensaje + "La edad esta vacia";
      }
      Alert.alert(mensaje);
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={messi} style={styles.logo}/>
      <Text style={[styles.textLabel]}>Nombre</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={email}
        onChangeText={input => setEmail(input)}
      />
      <Text style={[styles.textLabel]}>Edad</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        value={clave}
        secureTextEntry={true} 
        placeholder="Ingrese su edad"
        inputMode='numeric'
        onChangeText={input => setClave(input)}
      />
      <Boton onPress={handleLogin} titulo='INGRESAR' style={styles.button} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: '40%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLabel:{
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 5,
    fontWeight: 'bold'
  }
});