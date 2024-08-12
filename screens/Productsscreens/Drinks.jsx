import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PRODUCTS = [
  {
    id: '1',
    name: 'Lemonade',
    category: 'Cold Drinks',
    price: '5.5',
    rating: '4.5',
    image: require('../Assets/Drinks/lemonade.jpeg'),
  },
  {
    id: '2',
    name: 'Iced Tea',
    category: 'Cold Drinks',
    price: '4.5',
    rating: '4.2',
    image: require('../Assets/Drinks/icedtea.jpeg'),
  },
  {
    id: '3',
    name: 'Strawberry Smoothie',
    category: 'Smoothies',
    price: '6.0',
    rating: '4.8',
    image: require('../Assets/Drinks/smoothie.jpeg'),
  },
  {
    id: '4',
    name: 'Mango Smoothie',
    category: 'Smoothies',
    price: '6.5',
    rating: '4.7',
    image: require('../Assets/Drinks/mango.jpeg'),
  },
];

const Drinks = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Cold Drinks');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on active tab and search query
  const filteredProducts = PRODUCTS.filter((product) => {
    return (
      product.category === activeTab &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
          <Icon name="arrow-left" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Drinks</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search Drinks"
        placeholderTextColor="#CCCCCC"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Cold Drinks')}>
          <Text style={activeTab === 'Cold Drinks' ? styles.activeTab : styles.inactiveTab}>Cold Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Smoothies')}>
          <Text style={activeTab === 'Smoothies' ? styles.activeTab : styles.inactiveTab}>Smoothies</Text>
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
    marginTop: 20,
    justifyContent: 'center', 
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    flex: 1,
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

export default Drinks;
