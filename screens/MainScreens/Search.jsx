import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { PRODUCTS } from '../Productsscreens/Beverages';
import { PRODUCTS1 } from '../Productsscreens/Drinks';
import { PRODUCTS2 } from '../Productsscreens/Food';
import { PRODUCTS3 } from '../Productsscreens/Lunch';
import { PRODUCTS4 } from '../Productsscreens/Pizza';

const SearchHistoryScreen = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts1, setFilteredProducts1] = useState([]);
  const [filteredProducts2, setFilteredProducts2] = useState([]);
  const [filteredProducts3, setFilteredProducts3] = useState([]);
  const [filteredProducts4, setFilteredProducts4] = useState([]);

  const navigation = useNavigation();

  const handleSearch = (text) => {
    setQuery(text);

    setFilteredProducts((PRODUCTS || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));

    setFilteredProducts1((PRODUCTS1 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));
    
    setFilteredProducts2((PRODUCTS2 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));
    
    setFilteredProducts3((PRODUCTS3 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));
    
    setFilteredProducts4((PRODUCTS4 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem} key={index}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TextInput 
          style={styles.searchInput} 
          value={query}
          onChangeText={handleSearch}
          placeholder="Search Best Items For You" 
          placeholderTextColor="#888"
        />
      </View>

      {filteredProducts.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Beverages</Text>
          <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} 
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts1.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Drinks</Text>
          <FlatList
            data={filteredProducts1}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} 
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts2.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Food</Text>
          <FlatList
            data={filteredProducts2}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} 
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts3.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Lunch</Text>
          <FlatList
            data={filteredProducts3}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} 
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts4.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Pizza</Text>
          <FlatList
            data={filteredProducts4}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} 
            contentContainerStyle={styles.productList}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#333',
  },
  productList: {
    paddingHorizontal: 15,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  productText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SearchHistoryScreen;
