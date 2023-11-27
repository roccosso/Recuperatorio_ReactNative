import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu';
import imagenBoton from '../../assets/contador.png'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default async function Uno({ navigation }) {

  let nombre = await AsyncStorage.getItem('nombrecito');
  console.log('nombre', nombre);
  let edad = await AsyncStorage.getItem('edadcita');
  console.log('edad', edad);

  const [contador, setContador] = useState(0);

  useEffect(() => {
    if(contador != 0){
      Alert.alert('Hola', {nombre}, 'tenes', {edad}, 'años de edad');
    }
  },[contador]);

  return (
    <View style={[styles.container]}>
      <Pressable style={styles.botonImagen} onPress={() => setContador(contador+1)}>
        <Image source={imagenBoton} />
      </Pressable>
      <Text style={[styles.text]}>Toca la pantalla</Text>
      <Menu navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  botonImagen: {
    marginBottom: 20
  },
});