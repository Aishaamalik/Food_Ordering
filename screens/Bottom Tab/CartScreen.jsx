import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartScreen = () => {
  const [itemCount, setItemCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
        <TouchableOpacity style={styles.changeLocation}>
          <Icon name="location-on" size={20} color="#4CAF50" />
          <Text style={styles.changeLocationText}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemText}>Item:{itemCount}       </Text>
        <Text style={styles.deliverTo}>Delivered to:</Text>
      </View>
      <View style={styles.subtotal}>
        <Text>Subtotal</Text>
        <Text style={styles.price}>${subtotal.toFixed(2)}</Text>
      </View>
      <View style={styles.deliveryEligible}>
        <Icon name="check-circle" size={20} color="#4CAF50" />
        <Text style={styles.deliveryEligibleText}>Your order is eligible for delivery</Text>
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
  },
  changeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeLocationText: {
    color: '#4CAF50',
    marginLeft: 5,
  },
  itemCountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
    color: '#555',
  },
  deliverTo: {
    fontSize: 16,
    color: '#555',
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
});

export default CartScreen;
