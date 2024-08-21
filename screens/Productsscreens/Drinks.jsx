import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const PRODUCTS1 = [
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

const Drinks = () => {
  const [activeTab, setActiveTab] = useState('Cold Drinks');
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  
  // Access the isDay value from Redux store
  const isDay = useSelector(state => state.theme.isDay);

  const filteredProducts = PRODUCTS1.filter((product) => {
    return (
      product.category === activeTab &&
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
    <View style={[styles.productItem, { backgroundColor: isDay ? '#FFFFFF' : 'black' }]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={12} color="#FFFFFF" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Text style={[styles.productName, { color: isDay ? '#000000' : '#FFFFFF' }]}>{item.name}</Text>
        <Text style={[styles.productCategory, { color: isDay ? '#AAAAAA' : '#CCCCCC' }]}>{item.category}</Text>
        <Text style={[styles.productPrice, { color: isDay ? '#000000' : '#FFFFFF' }]}>${item.price}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={[styles.buyButton, { backgroundColor: isDay ? '#E0F2F1' : '#333' }]} onPress={() => handleBuy(item)}>
          <Icon name="shopping-cart" size={16} color="#4CAF50" style={styles.buyIcon} />
          <Text style={[styles.buyButtonText, { color: isDay ? '#4CAF50' : '#A5D6A7' }]}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : 'black' }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color={isDay ? '#000000' : '#FFFFFF'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000000' : '#FFFFFF' }]}>Drinks</Text>
      </View>

      <TextInput
        style={[styles.searchInput, { backgroundColor: isDay ? '#F7F7F7' : '#333' }]}
        placeholder="Search Drinks"
        placeholderTextColor={isDay ? '#CCCCCC' : '#888888'}
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
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchInput: {
    height: 40,
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
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    paddingBottom: 8,
    marginRight: 20,
    color: '#4CAF50',

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
    borderRadius: 10,
    padding: 10,
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
    marginLeft: 4,
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
    flexDirection: 'row',
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyIcon: {
    marginRight: 8,
  },
});

export default Drinks;
