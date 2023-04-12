import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App(){

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState(0);

  function calcular(){
    setResultado((alcool / gasolina) > 0.7 ?'A gasolina está mais em conta.' : 'O álcool está mais em conta.');
  }

  function limparCampos(){
    setAlcool('');
    setGasolina('');
    setResultado('');
  }

  return (
    <View  style={{ alignItems: 'center'}}>
      <Text style={styles.paragraph}>Álcool ou Gasolina</Text>

      <Image style={styles.image} source={require('./img/alcool-ou-gasolina.png')}></Image>

      <TextInput style={styles.inputs}  placeholder="Digite o preço do álcool: " onChangeText={(e) => setAlcool(e)} value={alcool}></TextInput>

      <TextInput style={styles.inputs}  placeholder="Digite o preço da gasolina: " onChangeText={(e) => setGasolina(e)} value={gasolina}></TextInput>

      <View style={styles.buttons}>
        <Button color={'green'} title='Verificar' onPress={calcular}></Button>
      </View>

      <View style={styles.buttons}>
        <Button title='Limpar' onPress={limparCampos}></Button>
      </View>

      <Text> Valor do litro do álcool: {alcool} </Text>
      <Text> Valor do litro da gasolina: {gasolina} </Text>

      <Text style={styles.paragraph}> Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    margin: 5,
    width: 300,
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputs: {
    margin: 5,
    padding: 10,
    width: 300,
    color: '#808080',
    backgroundColor: '#F5F5F5',
    borderRadius: 5
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: '2%',
    marginBottom: 20
  }
});