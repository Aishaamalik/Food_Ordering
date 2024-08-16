import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const PRODUCTS4 = [
  {
    id: '1',
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: '10.5',
    rating: '4.2',
    image: require('../Assets/pizza/mar.jpeg'),
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: '12.0',
    rating: '4.5',
    image: require('../Assets/pizza/pep.jpeg'),
  },
  {
    id: '3',
    name: 'BBQ Chicken Pizza',
    category: 'Pizza',
    price: '13.5',
    rating: '4.6',
    image: require('../Assets/pizza/bbq.jpeg'),
  },
];

const Pizza = ({ navigation }) => {
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
          onPress={() => handleBuy(item)}>
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
        <Text style={styles.headerTitle}>Pizza</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search pizzas"
        placeholderTextColor="#CCCCCC"
      />

      <FlatList
        data={PRODUCTS4}
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

export default Pizza;
