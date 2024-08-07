import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.section}>
          <View style={styles.sectionIcon}>
            <Icon name="location-on" size={24} color="#000" />
          </View>
          <View style={styles.sectionDetails}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <Text style={styles.sectionSubtitle}>123 Main Street, Anytown, USA 12345</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
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
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.orderSummary}>
          <Text style={styles.orderItem}>bluebell hand block tiered <Text style={styles.orderItemQty}>2 x $2000.00</Text></Text>
          <Text style={styles.orderItem}>Men Black Grey Allover Printed: <Text style={styles.orderItemQty}>2 x $1699.00</Text></Text>
          <Text style={styles.orderItem}>Discount <Text style={styles.orderItemQty}>-$100.00</Text></Text>
          <Text style={styles.orderItem}>Shipping <Text style={styles.orderItemQty}>FREE Delivery</Text></Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>My Order</Text>
          <Text style={styles.totalAmount}>$3,599.00</Text>
        </View>

        <TouchableOpacity style={styles.submitButton}>
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
    color: '#000', // Added black color for header title
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
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000', // Added black color for section title
  },
  sectionSubtitle: {
    color: '#000', // Changed color to black for section subtitle
  },
  notesContainer: {
    marginBottom: 15,
  },
  notesLabel: {
    marginBottom: 5,
    color: '#000', // Changed color to black for notes label
  },
  notesInput: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
  },
  orderSummary: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontSize: 16,
    color: '#000', // Added black color for order items
  },
  orderItemQty: {
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000', // Added black color for total label
  },
  totalAmount: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4CAF50',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
