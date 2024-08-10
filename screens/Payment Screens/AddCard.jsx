import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddCard = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Card</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardType}>CREDIT CARD</Text>
          <Text style={styles.cardNumber}>**** **** **** 4532</Text>
          <View style={styles.cardDetails}>
            <Text style={styles.cardName}>ROOPA SMITH</Text>
            <Text style={styles.cardExp}>EXP 14/07</Text>
            <Text style={styles.cardCvv}>CVV 012</Text>
          </View>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' }} // Replace with actual image URL
            style={styles.cardBrand}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card Name"
          placeholderTextColor="#808080"
          value={cardName}
          onChangeText={setCardName}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#808080"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date"
            placeholderTextColor="#808080"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            placeholderTextColor="#808080"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD CARD</Text>
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
  cardContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    position: 'relative',
  },
  cardType: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 10,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    color: '#fff',
    fontSize: 14,
  },
  cardExp: {
    color: '#fff',
    fontSize: 14,
  },
  cardCvv: {
    color: '#fff',
    fontSize: 14,
  },
  cardBrand: {
    width: 40,
    height: 25,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  inputContainer: {
    padding: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#000', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddCard;
