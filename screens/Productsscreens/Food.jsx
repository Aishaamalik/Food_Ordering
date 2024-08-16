import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const PRODUCTS2 = [
  {
    id: '1',
    name: 'Vegetable Biryani',
    category: 'Vegetarian',
    price: '9.5',
    rating: '4.8',
    image: require('../Assets/Food/vegbaryani.jpeg'),
  },
  {
    id: '2',
    name: 'Paneer Tikka',
    category: 'Vegetarian',
    price: '10.0',
    rating: '4.7',
    image: require('../Assets/Food/paneer.jpeg'),
  },
  {
    id: '3',
    name: 'Chole Bhature',
    category: 'Vegetarian',
    price: '8.5',
    rating: '4.6',
    image: require('../Assets/Food/chole.jpeg'),
  },

  {
    id: '5',
    name: 'Nihari',
    category: 'Non-Vegetarian',
    price: '13.0',
    rating: '4.6',
    image: require('../Assets/Food/nahari.jpeg'),
  },
  {
    id: '6',
    name: 'Seekh Kebabs',
    category: 'Non-Vegetarian',
    price: '9.0',
    rating: '4.7',
    image: require('../Assets/Food/kabab.jpeg'),
  },
  {
    id: '7',
    name: 'Chiken Baryani',
    category: 'Non-Vegetarian',
    price: '12.0',
    rating: '4.8',
    image: require('../Assets/Food/baryani.webp'),
  },
];

const Food = () => {
  const [activeTab, setActiveTab] = useState('Vegetarian');
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation(); 


  const filteredProducts = PRODUCTS2.filter((product) => {
    return (
      (activeTab === 'All' || product.category === activeTab) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  
  const handleBuy = (product) => {
    const quantity = 1;
    const size = 'Regular'; 
    const currentPrice = parseFloat(product.price);

    navigation.navigate('OrderScreen', { product, quantity, size, currentPrice });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={12} color="#FFFFFF" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.buyButton}
          onPress={() => handleBuy(item)}
        >
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Food</Text>
        <TouchableOpacity />
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search food items"
        placeholderTextColor="#CCCCCC"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('All')}>
          <Text style={activeTab === 'All' ? styles.activeTab : styles.inactiveTab}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Vegetarian')}>
          <Text style={activeTab === 'Vegetarian' ? styles.activeTab : styles.inactiveTab}>Vegetarian</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Non-Vegetarian')}>
          <Text style={activeTab === 'Non-Vegetarian' ? styles.activeTab : styles.inactiveTab}>Non-Vegetarian</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    paddingBottom: 8,
    marginRight: 20,
  },
  inactiveTab: {
    fontSize: 16,
    color: '#AAAAAA',
    paddingBottom: 8,
    marginRight: 20,
  },
  productList: {
    paddingTop: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 8,
    left: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6347',
    marginBottom: -20,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  productCategory: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,
  },
  actionContainer: {
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#E0F2F1',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default Food;
