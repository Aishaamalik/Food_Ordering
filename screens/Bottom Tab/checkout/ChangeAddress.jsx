import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 
import { useSelector } from 'react-redux'; 

const ChangeAddress = () => {
  const navigation = useNavigation(); 
  const isDay = useSelector(state => state.theme.isDay);

  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [address, setAddress] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('Home');

  const handleChangeAddress = () => {
    navigation.navigate('Delivery Address');
  };

  const themeStyles = {
    backgroundColor: isDay ? '#f8f8f8' : '#333',
    textColor: isDay ? '#000' : '#fff',
    headerBackground: isDay ? '#fff' : '#444',
    borderColor: isDay ? '#ddd' : '#555',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <View style={[styles.header, { backgroundColor: themeStyles.headerBackground, borderColor: themeStyles.borderColor }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={themeStyles.textColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: themeStyles.textColor }]}>Add Delivery Address</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>Contact Details</Text>
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="Mobile No."
            value={mobileNo}
            onChangeText={setMobileNo}
            keyboardType="phone-pad"
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>Address</Text>
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="Locality/Town"
            value={locality}
            onChangeText={setLocality}
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="City/District"
            value={city}
            onChangeText={setCity}
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
          <TextInput
            style={[styles.input, { borderColor: themeStyles.borderColor, color: isDay ? 'black' : 'black' }]}
            placeholder="State"
            value={state}
            onChangeText={setState}
            placeholderTextColor={[themeStyles.textColor , { color: isDay ? 'black' : 'black'}]}
          />
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>Save Address As</Text>
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
        <Text style={styles.saveButtonText} onPress={handleChangeAddress}>SAVE ADDRESS</Text>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
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
