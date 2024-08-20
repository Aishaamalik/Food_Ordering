import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const DeliveryAddress = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay); // Access the isDay state from Redux
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleChangeAddress = () => {
    navigation.navigate('Change Address');
  };

  const addresses = [
    { id: 1, label: 'Home Address', address: '123 Main Street, Anytown, USA 12345', icon: 'home' },
    { id: 2, label: 'Office Address', address: '456 Elm Avenue, Smallville, CA 98765', icon: 'location-on' },
    { id: 4, label: 'Shop Address', address: '654 Pine Road, Countryside, FL 34567', icon: 'store' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#f8f8f8' : '#333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#fff' : '#444' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#fff' }]}>Delivery Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {addresses.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.addressContainer, { backgroundColor: isDay ? '#fff' : '#333' }]}
            onPress={() => setSelectedAddress(item.id)}
          >
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={24} color="#fff" />
            </View>
            <View style={styles.addressDetails}>
              <Text style={[styles.addressLabel, { color: isDay ? '#000' : '#fff' }]}>{item.label}</Text>
              <Text style={[styles.addressText, { color: isDay ? '#777' : '#ccc' }]}>{item.address}</Text>
            </View>
            <View style={styles.radioCircle}>
              {selectedAddress === item.id && <View style={styles.selectedRb} />}
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={[styles.addAddressContainer, { backgroundColor: isDay ? '#fff' : '#444' }]} onPress={handleChangeAddress}>
          <View style={styles.addIconContainer}>
            <Icon name="add" size={24} color={isDay ? '#000' : '#fff'} />
          </View>
          <Text style={[styles.addAddressText, { color: isDay ? '#000' : '#fff' }]}>Add Address</Text>
          <Icon name="chevron-right" size={24} color={isDay ? '#000' : '#fff'} />
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default DeliveryAddress;
