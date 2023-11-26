import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CartaoProduto = ({ item }) => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('DetalhesProdutos', { produto: item })}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MakeupApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const produtos = [
    { id: 1, nome: 'HAMBÚRGUER', preco: 14.99, imagem: 'https://th.bing.com/th/id/OIP.KKtpGJc9GC8tan1mjbJRIAHaE8?rs=1&pid=ImgDetMain'},
    { id: 2, nome: 'PIZZA', preco: 35.00, imagem: 'https://static.vecteezy.com/system/resources/previews/022/994/036/non_2x/the-pepperoni-pizza-and-a-piece-of-streched-cheese-pizza-with-ai-generated-free-photo.jpg' },
    { id: 3, nome: 'CACHORRO QUENTE', preco: 12.00, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54ZJFiXyOLG5slcTqWvGXLSBx2FO2wHHWGTGnSHMDS5RYRim6JoxbvwmHdhS_Tvw4LzM&usqp=CAU' },
    { id: 4, nome: 'COXINHA DE FRANGO', preco: 2.50, imagem: 'https://www.designi.com.br/images/preview/10201982.jpg'},
    { id: 5, nome: 'PASTEL', preco: 3.00, imagem: 'https://media.istockphoto.com/photos/brazilian-cheese-pastel-picture-id697131150?k=6&m=697131150&s=612x612&w=0&h=k-Z5ONr_ycuOtBhqGv7t4ALDNzUuNmkbiTawpuPVhyE='},
    { id: 6, nome: 'MILK-SHAKE', preco: 15.99, imagem: 'https://www.designi.com.br/images/preview/11116581.jpg'},
    { id: 7, nome: 'BOLO RED VELVET', preco: 5.50, imagem: 'https://scontent.fapq9-1.fna.fbcdn.net/v/t1.6435-9/104875211_1609513229199177_8186686358687478733_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=2vXrced1_OYAX_Faprf&_nc_ht=scontent.fapq9-1.fna&oh=00_AfC0a983Zb-mZPijPakpinNvjw-RRxE9OOMm4319HNV86g&oe=658B169B' },
    { id: 8, nome: 'SORVETE', preco: 4.80, imagem: 'https://www.designi.com.br/images/preview/10896978.jpg'},
    { id: 9, nome: 'AÇAI', preco: 8.40, imagem: 'https://media.istockphoto.com/id/1359525881/ko/%EC%82%AC%EC%A7%84/%EB%B8%8C%EB%9D%BC%EC%A7%88-%EB%83%89%EB%8F%99-%EC%95%84%EC%82%AC%EC%9D%B4-%EB%B2%A0%EB%A6%AC-%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC-%EC%8A%A4%EB%AC%B4%EB%94%94-%EC%97%90-%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1-%EC%BB%B5-%EB%94%B8%EA%B8%B0-%EB%82%98%EB%AC%B4-%EC%B1%85%EC%83%81%EA%B3%BC-%EA%B3%BC%EC%9D%BC%EC%9D%B4-%EC%9E%88%EB%8A%94-%ED%9A%8C%EC%83%89-%EC%97%AC%EB%A6%84-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EB%A9%94%EB%89%B4-%EB%B0%8F-%EC%86%8C%EC%85%9C-%EB%AF%B8%EB%94%94%EC%96%B4%EC%97%90-%EB%8C%80%ED%95%9C-%EC%A0%84%EB%A9%B4-%EB%B3%B4%EA%B8%B0.jpg?s=170667a&w=0&k=20&c=zjQtq9FFFLqo-1_d9I9TlJfRwTmwG8JC2syeq8-p_Mw=' },
    { id: 10, nome: 'PUDIM', preco: 9.00, imagem: 'https://cdn.discordapp.com/attachments/1047486282525323306/1097935624889184256/Gowtham_gr_Panna_cotta_Italian_dessert_Contemporary_professiona_97dba79f-3cbb-4add-91e2-cd9392ae5f28.png' },

  ];

  const produtosFiltrados = produtos.filter(item => item.nome.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        value={searchTerm}
        onChangeText={texto => setSearchTerm(texto)}
      />
      <ScrollView>
      <FlatList
        data={produtosFiltrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartaoProduto item={item}/>}
        numColumns={2} 
      />
      </ScrollView>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FDBD58',
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  card: {
    padding: 10,
    margin: 10,
    width: 150,
    backgroundColor: '#FDBD58',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    color: '#663514'
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#663514',
    marginTop: 5,
    textAlign: 'center',
  },
});

