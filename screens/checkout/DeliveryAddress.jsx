import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DeliveryAddressScreen = ({ navigation }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleChangeAddress = () => {
    navigation.navigate('Change Address');
  };

  const addresses = [
    { id: 1, label: 'Home Address', address: '123 Main Street, Anytown, USA 12345', icon: 'home' },
    { id: 2, label: 'Office Address', address: '456 Elm Avenue, Smallville, CA 98765', icon: 'location-on' },
    { id: 3, label: 'Home Address', address: '789 Maple Lane, Suburbia, NY 54321', icon: 'home' },
    { id: 4, label: 'Shop Address', address: '654 Pine Road, Countryside, FL 34567', icon: 'store' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.addressContainer}
            onPress={() => setSelectedAddress(item.id)}
          >
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={24} color="#fff" />
            </View>
            <View style={styles.addressDetails}>
              <Text style={styles.addressLabel}>{item.label}</Text>
              <Text style={styles.addressText}>{item.address}</Text>
            </View>
            <View style={styles.radioCircle}>
              {selectedAddress === item.id && <View style={styles.selectedRb} />}
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addAddressContainer} onPress={handleChangeAddress}>
          <View style={styles.addIconContainer}>
            <Icon name="add" size={24} color="#000" />
          </View>
          <Text style={styles.addAddressText}>Add Address</Text>
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
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
    color: '#000', // Changed to black
  },
  contentContainer: {
    padding: 15,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
  },
  addressDetails: {
    flex: 1,
  },
  addressLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000', // Changed to black
  },
  addressText: {
    color: '#777',
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  addAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  addIconContainer: {
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
  },
  addAddressText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000', // Changed to black
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 15,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DeliveryAddressScreen;
