import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Hot Creamy Cappuccino Latte Ombe',
      price: 8.9,
      originalPrice: 9.5,
      rating: 4.5,
      reviews: '2k Review',
      image: require('../Assets/productspics/creamymocha.jpeg'),

    },
    {
      id: 2,
      name: 'Creamy Mocha Ome Coffee',
      price: 6.3,
      originalPrice: 8.5,
      rating: 4.5,
      reviews: '2k Review',
      image: require('../Assets/productspics/HotCreamyMocha.jpeg'),

    },
    {
      id: 3,
      name: 'Ice Chocolate Coffee',
      price: 6.2,
      originalPrice: 9.5,
      rating: 4.5,
      reviews: '2k Review',
      image: require('../Assets/productspics/blackcoffee.jpeg'),

    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Cart</Text>
          <TouchableOpacity style={styles.changeLocation}>
            <Icon name="location-on" size={20} color="#4CAF50" />
            <Text style={styles.changeLocationText}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.deliverTo}>8 Items  •  Deliver To: <Text style={styles.location}>London</Text></Text>
        <View style={styles.subtotal}>
          <Text>Subtotal</Text>
          <Text style={styles.price}>$3,599</Text>
        </View>
        <View style={styles.freeDelivery}>
          <Icon name="check-circle" size={20} color="#4CAF50" />
          <Text style={styles.freeDeliveryText}>Your order is eligible for free Delivery</Text>
        </View>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.cartItemTitle}>{item.name}</Text>
              <View style={styles.cartItemPrice}>
                <Text style={styles.currentPrice}>${item.price}</Text>
                <Text style={styles.originalPrice}>${item.originalPrice}</Text>
              </View>
              <View style={styles.cartItemRating}>
                <Icon name="star" size={16} color="orange" />
                <Text>{item.rating}</Text>
                <Text> ({item.reviews})</Text>
              </View>
              <View style={styles.cartItemQuantity}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Icon name="remove" size={16} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Icon name="add" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.cartItemRemove}>
              <Icon name="delete" size={20} color="#777" />
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.proceedToBuy}>
        <Text style={styles.proceedToBuyText}>PROCEED TO BUY (8 ITEMS)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  changeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeLocationText: {
    color: '#4CAF50',
    marginLeft: 5,
  },
  deliverTo: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    color: '#555',
  },
  location: {
    fontWeight: 'bold',
    color: '#000',
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  freeDelivery: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  freeDeliveryText: {
    color: '#4CAF50',
    marginLeft: 10,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cartItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartItemPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  currentPrice: {
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
  cartItemRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cartItemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  cartItemRemove: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedToBuy: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  proceedToBuyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartScreen;