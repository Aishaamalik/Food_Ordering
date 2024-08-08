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
      setCartItems((prevItems) => [...prevItems, { product, quantity, size, currentPrice }]);
    }
  }, [product]);

  useEffect(() => {
    const saveCartItems = async () => {
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Failed to save cart items', error);
      }
    };
    saveCartItems();

    const total = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const increaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      return updatedItems;
    });
  };

  const decreaseQuantity = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
      }
      return updatedItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = () => {
    navigation.navigate('Checkout');
  };

  const handleChange = () => {
    navigation.navigate('Change Address');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle} >My Cart</Text>
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
                <Text style={styles.productTitle}>{item.product.title}</Text>
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
      <View>
        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  changeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeLocationText: {
    color: '#4CAF50',
    marginLeft: 5,
  },
  placeOrderButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  placeOrderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  deliverTo: {
    fontSize: 16,
    color: 'black',
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  deliveryEligible: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  deliveryEligibleText: {
    color: '#4CAF50',
    marginLeft: 10,
  },
  productContainer: {
    flex: 1,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  productSize: {
    fontSize: 14,
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'black',
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  removeText: {
    color: 'green',
    fontSize: 14,
    marginRight: 0,
    marginLeft: 0,
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
  },
});

export default CartScreen;
