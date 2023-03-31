
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      resultado: ''
    }
    this.calcular = this.calcular.bind(this);
    this.limparCampos = this.limparCampos.bind(this);
  }

  calcular(){
    this.setState({
      resultado:(this.state.alcool / this.state.gasolina) > 0.7 ?'A gasolina está mais em conta.' : 'O álcool está mais em conta.'
    })
  }

  limparCampos(){
    this.setState({
      alcool: 0.0,
      gasolina: 0.0,
      resultado: ''
    })
  }

  render(){
    return (
      <View  style={{ alignItems: 'center'}}>
        <Text style={styles.paragraph}>Álcool ou Gasolina</Text>

        <Image style={styles.image} source={require('./img/alcool-ou-gasolina.png')}></Image>

        <TextInput style={styles.inputs}  placeholder="Digite o preço do álcool: " onChangeText={(e) => this.setState({alcool:e})} value={this.state.alcool}></TextInput>

        <TextInput style={styles.inputs}  placeholder="Digite o preço da gasolina: " onChangeText={(e) => this.setState({gasolina:e})} value={this.state.gasolina}></TextInput>

        <View style={styles.buttons}>
          <Button color={'green'} title='Verificar' onPress={this.calcular}></Button>
        </View>

        <View style={styles.buttons}>
          <Button title='Limpar' onPress={this.limparCampos}></Button>
        </View>

        <Text> Valor do litro do álcool: {this.state.alcool} </Text>
        <Text> Valor do litro da gasolina: {this.state.gasolina} </Text>

        <Text style={styles.paragraph}> Resultado: {this.state.resultado}</Text>
      </View>
    );
  }
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
