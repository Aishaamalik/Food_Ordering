import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PRODUCTS = [
  {
    id: '1',
    name: 'Iced Tea',
    category: 'Beverages',
    price: '4.5',
    rating: '4.2',
    image: require('../Assets/Drinks/icedtea.jpeg'),
  },
  {
    id: '2',
    name: 'Lemonade',
    category: 'Beverages',
    price: '5.5',
    rating: '4.5',
    image: require('../Assets/Drinks/lemonade.jpeg'),
  },
  {
    id: '3',
    name: 'Black Coffee',
    category: 'Brewed Coffee',
    price: '12.6',
    rating: '3.8',
    image: require('../Assets/productspics/blackcoffee.jpeg'),
  },
  {
    id: '4',
    name: 'Creamy Mocha Ombe Coffee',
    category: 'Brewed Coffee',
    price: '12.6',
    rating: '3.8',
    image: require('../Assets/productspics/creamymocha.jpeg'),
  },
  {
    id: '5',
    name: 'Arabica Latte Ombe Coffee',
    category: 'Brewed Coffee',
    price: '12.6',
    rating: '3.8',
    image: require('../Assets/productspics/Arabicalatte.jpeg'),
  },
  {
    id: '6',
    name: 'Mocha Frappe',
    category: 'Blended Coffee',
    price: '13.0',
    rating: '4.2',
    image: require('../Assets/productspics/mochafrappe.jpeg'),
  },
  {
    id: '7',
    name: 'Caramel Frappe',
    category: 'Blended Coffee',
    price: '13.5',
    rating: '4.4',
    image: require('../Assets/productspics/caramelfrappe.jpeg'),
  },
];

const Beverages = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Beverages');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    return (
      (activeTab === 'Beverages' || product.category === activeTab) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={12} color="white" />
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
          <View style={styles.buttonContent}>
            <Icon name="bug" size={16} color="#4CAF50" style={styles.bugIcon} />
            <Text style={styles.buyButtonText}>Buy</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Beverages</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search beverages"
        placeholderTextColor="#000000"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Beverages')}>
          <Text style={activeTab === 'Beverages' ? styles.activeTab : styles.inactiveTab}>Beverages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Brewed Coffee')}>
          <Text style={activeTab === 'Brewed Coffee' ? styles.activeTab : styles.inactiveTab}>Brewed Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Blended Coffee')}>
          <Text style={activeTab === 'Blended Coffee' ? styles.activeTab : styles.inactiveTab}>Blended Coffee</Text>
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
    justifyContent: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
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
    flexWrap: 'wrap',
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
    color: 'white',
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
    color: '#000000',
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bugIcon: {
    marginRight: 8,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default Beverages;
