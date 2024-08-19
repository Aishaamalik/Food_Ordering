import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ route, navigation }) => {
  const { product, quantity, size, currentPrice } = route.params || {};
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const isDay = useSelector(state => state.theme.isDay); // Access isDay from Redux store

  const loadCartItems = async () => {
    try {
      const storedCartItems = await AsyncStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    } catch (error) {
      console.error('Failed to load cart items', error);
    }
  };

  const loadProfileData = async () => {
    try {
      const storedProfile = await AsyncStorage.getItem('profileData');
      if (storedProfile) {
        const profileData = JSON.parse(storedProfile);
        setDeliveryAddress(profileData.location);
      }
    } catch (error) {
      console.error('Failed to load profile data', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadCartItems();
      loadProfileData();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (product) {
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems, { product, quantity, size, currentPrice }];
        saveCartItems(updatedItems);
        return updatedItems;
      });
    }
  }, [product]);

  const saveCartItems = async (items) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart items', error);
    }
  };

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const increaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      saveCartItems(updatedItems);
      return updatedItems;
    });
  };

  const decreaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
        saveCartItems(updatedItems);
      }
      return updatedItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      saveCartItems(updatedItems);
      return updatedItems;
    });
  };

  const handlePlaceOrder = () => {
    navigation.navigate('Checkout', { subtotal, cartItems });
  };

  const handleChange = () => {
    navigation.navigate('Change Address');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? 'white' : '#333' }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: isDay ? 'black' : 'white' }]}>My Cart</Text>
        <TouchableOpacity style={styles.changeLocation} onPress={handleChange}>
          <Icon name="location-on" size={20} color={isDay ? '#4CAF50' : '#8BC34A'} />
          <Text style={[styles.changeLocationText, { color: isDay ? 'green' : '#9CCC65' }]}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemCountContainer}>
        <Text style={[styles.itemText, { color: isDay ? 'black' : 'white' }]}>Item(s): {cartItems.length}</Text>
        <Text style={[styles.deliverTo, { color: isDay ? 'black' : 'white' }]}>Delivered to: {deliveryAddress}</Text>
      </View>
      <View style={[styles.subtotal, { backgroundColor: isDay ? 'white' : '#424242' }]}>
        <Text style={{ color: isDay ? 'black' : 'white' }}>Subtotal</Text>
        <Text style={[styles.price, { color: isDay ? 'black' : 'white' }]}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={[styles.deliveryEligible, { backgroundColor: isDay ? '#e8f5e9' : '#616161' }]}>
        <Icon name="check-circle" size={20} color={isDay ? '#4CAF50' : '#8BC34A'} />
        <Text style={[styles.deliveryEligibleText, { color: isDay ? 'green' : '#9CCC65' }]}>Your order is eligible for delivery</Text>
      </View>
      <ScrollView>
        <View style={styles.productContainer}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={item.product.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={[styles.productTitle, { color: isDay ? 'black' : 'white' }]}>{item.product.name}</Text>
                <Text style={[styles.productSize, { color: isDay ? '#888888' : '#e0e0e0' }]}>Size: {item.size}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(index)} style={styles.quantityButton}>
                    <Icon name="remove" size={26} color="white" />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(index)} style={styles.quantityButton}>
                    <Icon name="add" size={26} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
                    <Icon name="delete" size={20} color={isDay ? 'green' : '#9CCC65'} />
                    <Text style={[styles.removeText, { color: isDay ? 'green' : '#9CCC65' }]}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[styles.productPrice, { color: isDay ? 'black' : 'white' }]}>Price: ${item.currentPrice.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  changeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeLocationText: {
    fontSize: 16,
    marginLeft: 8,
  },
  itemCountContainer: {
    padding: 16,
  },
  itemText: {
    fontSize: 16,
  },
  deliverTo: {
    fontSize: 14,
  },
  subtotal: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryEligible: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryEligibleText: {
    marginLeft: 8,
    fontSize: 16,
  },
  productContainer: {
    padding: 16,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSize: {
    fontSize: 14,
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  removeText: {
    marginLeft: 5,
    fontSize: 14,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  placeOrderButton: {
    padding: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  placeOrderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
