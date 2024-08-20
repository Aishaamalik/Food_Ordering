import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const AddCard = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();


  const isDay = useSelector(state => state.theme.isDay);

  const styles = getStyles(isDay);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? "#000" : "#FFF"} />
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
          placeholderTextColor={isDay ? "#808080" : "#A9A9A9"}
          value={cardName}
          onChangeText={setCardName}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor={isDay ? "#808080" : "#A9A9A9"}
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date"
            placeholderTextColor={isDay ? "#808080" : "#A9A9A9"}
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            placeholderTextColor={isDay ? "#808080" : "#A9A9A9"}
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

const getStyles = (isDay) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDay ? '#f8f8f8' : '#1C1C1C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: isDay ? '#fff' : '#333',
    borderBottomWidth: 1,
    borderColor: isDay ? '#ddd' : '#444',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: isDay ? '#000' : '#FFF',
  },
  cardContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: isDay ? '#000' : '#444',
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
    backgroundColor: isDay ? '#fff' : '#444',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: isDay ? '#ddd' : '#666',
    color: isDay ? '#000' : '#FFF',
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
