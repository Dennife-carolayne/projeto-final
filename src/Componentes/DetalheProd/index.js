import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DetalhesProduto = ({ route }) => {
  const { produto } = route.params;
  const { nome, preco, imagem } = produto;
  const navigation = useNavigation();

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={handleVoltar}>
        <Text style={styles.textoBotaoVoltar}>{'Voltar'}</Text>
      </TouchableOpacity>
      <Image
        source={{uri: imagem}}
        style={styles.imagem}
      />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>Preço: R$ {preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.botaoCarrinho}>
        <Text style={styles.textoBotaoCarrinho}>Adicionar ao Carinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#FDBD58'
  },
  botaoVoltar: {
    position: 'absolute', 
    top: 10, 
    left: 13,
    padding: 10,
  },
  textoBotaoVoltar: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 250,
    height: 250,
    marginBottom: 16,
    marginTop: 50,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#663514'
  },
  preco: {
    fontSize: 18,
    marginBottom: 16,
    color:'#663514'
  },
  botaoCarrinho: {
    backgroundColor:'#B67A51',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  textoBotaoCarrinho: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});