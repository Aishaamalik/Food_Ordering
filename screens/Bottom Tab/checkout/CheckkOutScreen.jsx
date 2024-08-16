import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [], subtotal = 0 } = route.params || {};
  const [notes, setNotes] = useState('');
  const discount = 0; 

  const handleDeliveryAddress = () => {
    navigation.navigate('Delivery Address');
  };

  const handlePayment = () => {
    navigation.navigate('Payment');
  };

  const handleSubmitOrder = async () => {
    const updatedCartItems = cartItems.map(item => ({
      ...item,
      notes,
    }));

    try {
      await AsyncStorage.setItem('ongoingOrders', JSON.stringify(updatedCartItems));
      navigation.navigate('My Order', { ongoingOrders: updatedCartItems });
    } catch (error) {
      console.error('Failed to save order to AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.section} onPress={handleDeliveryAddress}>
          <View style={styles.sectionIcon}>
            <Icon name="location-on" size={24} color="#000" />
          </View>
          <View style={styles.sectionDetails}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <Text style={styles.sectionSubtitle}>123 Main Street, Anytown, USA 12345</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section} onPress={handlePayment}>
          <View style={styles.sectionIcon}>
            <Icon name="credit-card" size={24} color="#000" />
          </View>
          <View style={styles.sectionDetails}>
            <Text style={styles.sectionTitle}>Payment</Text>
            <Text style={styles.sectionSubtitle}>XXXX XXXX XXXX 3456</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.notesContainer}>
          <Text style={styles.notesLabel}>Additional Notes:</Text>
          <TextInput
            style={styles.notesInput}
            placeholder="Write Here"
            placeholderTextColor={'gray'}
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        <View style={styles.orderSummary}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <Image source={item.product.image} style={styles.orderImage} />
              <View style={styles.orderDetails}>
              <Text style={styles.cartItemTitle}>{item.product.name}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={14} color="#FFD700" />
                  <Text style={styles.orderItemRating}>{item.product.rating || 'No Rating'}</Text>
                </View>
                <Text style={styles.orderItemQty}>{item.quantity} x ${item.currentPrice.toFixed(2)}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.orderItem}>Discount:  <Text style={styles.orderItemQty}>-${discount.toFixed(2)}</Text></Text>
          <Text style={styles.orderItem}>Shipping:  <Text style={styles.orderItemQty}>FREE Delivery</Text></Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Subtotal</Text>
          <Text style={styles.totalAmount}>${subtotal.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitOrder}>
          <Text style={styles.submitButtonText}>SUBMIT ORDER</Text>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  contentContainer: {
    padding: 15,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  sectionIcon: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
  },
  sectionDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  sectionSubtitle: {
    color: '#000',
  },
  notesContainer: {
    marginBottom: 15,
  },
  notesLabel: {
    marginBottom: 5,
    color: '#000',
  },
  notesInput: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
    color:'black',
  },
  orderSummary: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color: 'black',
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  orderItemRating: {
    fontSize: 14,
    marginLeft: 5,
    color: '#FFD700',
  },
  orderItemQty: {
    color: '#000',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  totalLabel: {
    fontSize: 16,
    color: '#000',
  },
  totalAmount: {
    fontSize: 16,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
