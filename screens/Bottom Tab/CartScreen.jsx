import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ route, navigation }) => {
  const { product, quantity, size, currentPrice } = route.params || {};
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
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
    loadCartItems();
  }, []);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
        <TouchableOpacity style={styles.changeLocation} onPress={handleChange}>
          <Icon name="location-on" size={20} color="#4CAF50" />
          <Text style={styles.changeLocationText}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemText}>Item(s): {cartItems.length}</Text>
        <Text style={styles.deliverTo}>Delivered to:</Text>
      </View>
      <View style={styles.subtotal}>
        <Text style={{ color: 'black' }}>Subtotal</Text>
        <Text style={styles.price}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.deliveryEligible}>
        <Icon name="check-circle" size={20} color="#4CAF50" />
        <Text style={styles.deliveryEligibleText}>Your order is eligible for delivery</Text>
      </View>
      <ScrollView>
        <View style={styles.productContainer}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={item.product.image} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{item.product.name}</Text>
                <Text style={styles.productSize}>Size: {item.size}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(index)} style={styles.quantityButton}>
                    <Icon name="remove" size={26} color="white" />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(index)} style={styles.quantityButton}>
                    <Icon name="add" size={26} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
                    <Icon name="delete" size={20} color="green" />
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.productPrice}>Price: ${item.currentPrice.toFixed(2)}</Text>
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
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  changeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeLocationText: {
    color: 'green',
    fontSize: 16,
    marginLeft: 8,
  },
  itemCountContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 16,
  },
  deliverTo: {
    fontSize: 14,
    color: '#888888',
  },
  subtotal: {
    padding: 16,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#e8f5e9',
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
    elevation: 2,
    marginBottom: 16,
    padding: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  productSize: {
    fontSize: 14,
    color: '#888888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    padding: 4,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  removeText: {
    color: 'green',
    fontSize: 14,
    marginLeft: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  placeOrderButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOrderText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
