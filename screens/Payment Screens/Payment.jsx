import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [upiId, setUpiId] = useState('');
  const [walletNumber, setWalletNumber] = useState('');

  const navigation = useNavigation(); 

  const paymentMethods = [
    {
      id: 1,
      icon: 'attach-money',
      title: 'Cash on Delivery(Cash/UPI)',
      description: 'Carry on your cash payment.. Thanx!',
    },
    {
      id: 2,
      icon: 'account-balance-wallet',
      title: 'Google Pay/Phone Pay/BHIM UPI',
    },
    {
      id: 3,
      icon: 'account-balance-wallet',
      title: 'Payments/Wallet',
    },
    {
      id: 4,
      icon: 'account-balance',
      title: 'Netbanking',
      description: 'Choose your bank for net banking.',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Credit/Debit Card</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Add Card')}>
              <Text style={styles.addCardText}>+ Add Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardType}>CREDIT CARD</Text>
            <Text style={styles.cardNumber}>**** **** **** 4532</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.cardName}>ROOPA SMITH</Text>
              <Text style={styles.cardExp}>EXP 14/07</Text>
              <Text style={styles.cardCvv}>CVV 012</Text>
            </View>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' }} 
              style={styles.cardBrand}
            />
          </View>
        </View>

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentMethod,
              selectedPaymentMethod === method.id && styles.selectedPaymentMethod,
            ]}
            onPress={() => setSelectedPaymentMethod(method.id)}
          >
            <View style={styles.paymentMethodHeader}>
              <Icon name={method.icon} size={24} color="#4CAF50" />
              <Text style={styles.paymentMethodTitle}>{method.title}</Text>
              {selectedPaymentMethod === method.id && (
                <Icon name="radio-button-checked" size={24} color="#4CAF50" />
              )}
              {selectedPaymentMethod !== method.id && (
                <Icon name="radio-button-unchecked" size={24} color="#4CAF50" />
              )}
            </View>
            {selectedPaymentMethod === method.id && method.description && (
              <Text style={styles.paymentMethodDescription}>{method.description}</Text>
            )}
            {selectedPaymentMethod === method.id && method.id === 2 && (
              <View style={styles.upiContainer}>
                <Text style={styles.upiLabel}>Link via UPI</Text>
                <TextInput
                  style={styles.upiInput}
                  placeholder="Enter your UPI ID"
                  value={upiId}
                  onChangeText={setUpiId}
                />
                <TouchableOpacity style={styles.upiContinueButton}>
                  <Text style={styles.upiContinueButtonText}>Continue</Text>
                </TouchableOpacity>
                <Text style={styles.upiNote}>
                  <Icon name="shield" size={16} color="#4CAF50" /> Your UPI ID will be encrypted and is 100% safe with us.
                </Text>
              </View>
            )}
            {selectedPaymentMethod === method.id && method.id === 3 && (
              <View style={styles.walletContainer}>
                <Text style={styles.walletLabel}>Link Your Wallet</Text>
                <TextInput
                  style={styles.walletInput}
                  placeholder="+91"
                  keyboardType="phone-pad"
                  value={walletNumber}
                  onChangeText={setWalletNumber}
                />
                <TouchableOpacity style={styles.walletContinueButton}>
                  <Text style={styles.walletContinueButtonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            )}
            {selectedPaymentMethod === method.id && method.id === 4 && (
              <TouchableOpacity
                style={styles.netBankingButton}
                onPress={() => navigation.navigate('Net Banking')} 
              >
                <Text style={styles.netBankingButtonText}>Net Banking:</Text>
              </TouchableOpacity>
            )}
            
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
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
    color:'black',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',

  },
  contentContainer: {
    padding: 15,
    color:'black',

  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    color:'black',

  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    color:'black',

  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'black',

  },
  addCardText: {
    fontSize: 16,
    color:'green',

  },
  card: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    position: 'relative',
    color:'black',

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
    color:'black',

  },
  paymentMethod: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    color:'black',

  },
  selectedPaymentMethod: {
    borderColor: '#4CAF50',
    color:'black',

  },
  paymentMethodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color:'black',

  },
  paymentMethodTitle: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
    color:'black',

  },
  paymentMethodDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
    color:'black',

  },
  upiContainer: {
    marginTop: 10,
    color:'black',

  },
  upiLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    color:'black',

  },
  upiInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color:'black',

  },
  upiContinueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    color:'black',

  },
  upiContinueButtonText: {
    color: '#fff',
    fontSize: 16,

  },
  upiNote: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    color:'black',

  },
  walletContainer: {
    marginTop: 10,
    color:'black',

  },
  walletLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    color:'black',

  },
  walletInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color:'black',

  },
  walletContinueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    color:'black',

  },
  walletContinueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  netBankingButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
    color:'black',

  },
  netBankingButtonText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    margin: 15,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
