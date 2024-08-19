
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; 

export const PRODUCTS = [
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

const Beverages = () => {
  const [activeTab, setActiveTab] = useState('Beverages');
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const theme = useSelector(state => state.theme);

  const filteredProducts = PRODUCTS.filter((product) => {
    return (
      (activeTab === 'Beverages' || product.category === activeTab) &&
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
          <Icon name="star" size={12} color="white" />
          <Text style={[styles.ratingText, { color: theme.isDay ? 'white' : 'white' }]}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text style={[styles.productName, { color: theme.isDay ? 'black' : 'white' }]}>{item.name}</Text>
        <Text style={[styles.productCategory, { color: theme.isDay ? 'black' : 'white' }]}>{item.category}</Text>
        <Text style={[styles.productPrice, { color: theme.isDay ? 'black' : 'white' }]}>${item.price}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.buyButton} 
          onPress={() => handleBuy(item)}
        >
          <View style={[styles.buttonContent , { color: theme.isDay ? 'black' : 'white' }]}>
            <Icon name="shopping-cart" size={16} color="#4CAF50" style={styles.cartIcon} />
            <Text style={[styles.buyButtonText, { color: theme.isDay ? 'green' : 'black' }]}>Buy</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.isDay ? '#FFFFFF' : 'black' }]}>
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
    justifyContent: 'space-between',
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    paddingBottom: 8,
    marginRight: 20,
  },
  inactiveTab: {
    fontSize: 16,
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
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
    color: 'white',
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productCategory: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
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
  buyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Beverages;
