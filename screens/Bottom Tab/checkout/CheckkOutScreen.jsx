import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [], subtotal = 0 } = route.params || {};
  const [notes, setNotes] = useState('');
  const discount = 0;

  const isDay = useSelector(state => state.theme.isDay);

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
    <SafeAreaView style={[styles.container, isDay ? styles.dayContainer : styles.nightContainer]}>
      <View style={[styles.header, isDay ? styles.dayHeader : styles.nightHeader]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? "#000" : "#FFF"} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, isDay ? styles.dayText : styles.nightText]}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.section} onPress={handleDeliveryAddress}>
          <View style={[styles.sectionIcon, isDay ? styles.dayIconBackground : styles.nightIconBackground]}>
            <Icon name="location-on" size={24} color={isDay ? "#000" : "#FFF"} />
          </View>
          <View style={styles.sectionDetails}>
            <Text style={[styles.sectionTitle, isDay ? styles.dayText : styles.nightText]}>Delivery Address</Text>
            <Text style={[styles.sectionSubtitle, isDay ? styles.dayText : styles.nightText]}>123 Main Street, Anytown, USA 12345</Text>
          </View>
          <Icon name="chevron-right" size={24} color={isDay ? "#000" : "#FFF"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section} onPress={handlePayment}>
          <View style={[styles.sectionIcon, isDay ? styles.dayIconBackground : styles.nightIconBackground]}>
            <Icon name="credit-card" size={24} color={isDay ? "#000" : "#FFF"} />
          </View>
          <View style={styles.sectionDetails}>
            <Text style={[styles.sectionTitle, isDay ? styles.dayText : styles.nightText]}>Payment</Text>
            <Text style={[styles.sectionSubtitle, isDay ? styles.dayText : styles.nightText]}>XXXX XXXX XXXX 3456</Text>
          </View>
          <Icon name="chevron-right" size={24} color={isDay ? "#000" : "#FFF"} />
        </TouchableOpacity>

        <View style={styles.notesContainer}>
          <Text style={[styles.notesLabel, isDay ? styles.dayText : styles.nightText]}>Additional Notes:</Text>
          <TextInput
            style={[styles.notesInput, isDay ? styles.dayInput : styles.nightInput]}
            placeholder="Write Here"
            placeholderTextColor={isDay ? 'gray' : '#CCC'}
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        <View style={[styles.orderSummary, isDay ? styles.dayBackground : styles.nightBackground]}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <Image source={item.product.image} style={styles.orderImage} />
              <View style={styles.orderDetails}>
                <Text style={[styles.cartItemTitle, isDay ? styles.dayText : styles.nightText]}>{item.product.name}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={14} color="#FFD700" />
                  <Text style={styles.orderItemRating}>{item.product.rating || 'No Rating'}</Text>
                </View>
                <Text style={[styles.orderItemQty, isDay ? styles.dayText : styles.nightText]}>{item.quantity} x ${item.currentPrice.toFixed(2)}</Text>
              </View>
            </View>
          ))}
          <Text style={[styles.orderItem, isDay ? styles.dayText : styles.nightText]}>Discount: <Text style={styles.orderItemQty}>-${discount.toFixed(2)}</Text></Text>
          <Text style={[styles.orderItem, isDay ? styles.dayText : styles.nightText]}>Shipping: <Text style={styles.orderItemQty}>FREE Delivery</Text></Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={[styles.totalLabel, isDay ? styles.dayText : styles.nightText]}>Subtotal</Text>
          <Text style={[styles.totalAmount, isDay ? styles.dayText : styles.nightText]}>${subtotal.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={[styles.submitButton, isDay ? styles.dayButton : styles.nightButton]} onPress={handleSubmitOrder}>
          <Text style={styles.submitButtonText}>SUBMIT ORDER</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayContainer: {
    backgroundColor: '#f8f8f8',
  },
  nightContainer: {
    backgroundColor: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
  },
  dayHeader: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  nightHeader: {
    backgroundColor: '#444',
    borderColor: '#555',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayText: {
    color: '#000',
  },
  nightText: {
    color: '#FFF',
  },
  contentContainer: {
    padding: 15,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  sectionIcon: {
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
  },
  dayIconBackground: {
    backgroundColor: '#4CAF50',
  },
  nightIconBackground: {
    backgroundColor: '#666',
  },
  sectionDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionSubtitle: {},
  notesContainer: {
    marginBottom: 15,
  },
  notesLabel: {
    marginBottom: 5,
  },
  notesInput: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  dayInput: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    color: '#000',
  },
  nightInput: {
    backgroundColor: '#555',
    borderColor: '#777',
    color: '#FFF',
  },
  orderSummary: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  dayBackground: {
    backgroundColor: '#fff',
  },
  nightBackground: {
    backgroundColor: '#444',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  orderItemQty: {},
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  totalLabel: {
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  dayButton: {
    backgroundColor: '#4CAF50',
  },
  nightButton: {
    backgroundColor: '#666',
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CheckoutScreen;
