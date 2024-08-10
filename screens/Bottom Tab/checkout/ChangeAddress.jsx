import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ChangeAddress = () => {
  const navigation = useNavigation(); // Get navigation object

  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Delivery Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile No."
            value={mobileNo}
            onChangeText={setMobileNo}
            keyboardType="phone-pad"
            placeholderTextColor="#000"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Locality/Town"
            value={locality}
            onChangeText={setLocality}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="City/District"
            value={city}
            onChangeText={setCity}
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
            placeholderTextColor="#000"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Save Address As</Text>
          <View style={styles.addressTypeContainer}>
            {['Home', 'Shop', 'Office'].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.addressTypeButton,
                  addressType === type && styles.addressTypeButtonSelected,
                ]}
                onPress={() => setAddressType(type)}
              >
                <Text
                  style={[
                    styles.addressTypeButtonText,
                    addressType === type && styles.addressTypeButtonTextSelected,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
    color: '#000',
  },
  contentContainer: {
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    color: '#000',
  },
  addressTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addressTypeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4CAF50',
    backgroundColor: '#fff',
  },
  addressTypeButtonSelected: {
    backgroundColor: '#4CAF50',
  },
  addressTypeButtonText: {
    color: '#4CAF50',
  },
  addressTypeButtonTextSelected: {
    color: '#fff',
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

export default ChangeAddress;
