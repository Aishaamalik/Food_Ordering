import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 
import { useSelector } from 'react-redux'; 

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [upiId, setUpiId] = useState('');
  const [walletNumber, setWalletNumber] = useState('');

  const navigation = useNavigation(); 

  const isDay = useSelector(state => state.theme.isDay);

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

  const themeStyles = isDay ? styles.dayTheme : styles.nightTheme;

  return (
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      <View style={[styles.header, themeStyles.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? "#000" : "#FFF"} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, themeStyles.headerTitle]}>Payment</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={[styles.contentContainer, themeStyles.contentContainer]}>
        <View style={[styles.cardContainer, themeStyles.cardContainer]}>
          <View style={[styles.cardHeader, themeStyles.cardHeader]}>
            <Text style={[styles.cardTitle, themeStyles.cardTitle]}>Credit/Debit Card</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Add Card')}>
              <Text style={styles.addCardText}>+ Add Card</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, themeStyles.card]}>
            <Text style={[styles.cardType , { color: isDay ? 'gray' : 'white'}]}>CREDIT CARD</Text>
            <Text style={[styles.cardNumber , { color: isDay ? 'gray' : 'white'}]}>**** **** **** 4532</Text>
            <View style={styles.cardDetails}>
              <Text style={[styles.cardName , { color: isDay ? 'gray' : 'white'}]}>ROOPA SMITH</Text>
              <Text style={[styles.cardExp , { color: isDay ? 'gray' : 'white'}]}>EXP 14/07</Text>
              <Text style={[styles.cardCvv , { color: isDay ? 'gray' : 'white'}]}>CVV 012</Text>
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
              themeStyles.paymentMethod,
            ]}
            onPress={() => setSelectedPaymentMethod(method.id)}
          >
            <View style={[styles.paymentMethodHeader, themeStyles.paymentMethodHeader]}>
              <Icon name={method.icon} size={24} color="#4CAF50" />
              <Text style={[styles.paymentMethodTitle, themeStyles.paymentMethodTitle]}>{method.title}</Text>
              {selectedPaymentMethod === method.id ? (
                <Icon name="radio-button-checked" size={24} color="#4CAF50" />
              ) : (
                <Icon name="radio-button-unchecked" size={24} color="#4CAF50" />
              )}
            </View>
            {selectedPaymentMethod === method.id && method.description && (
              <Text style={[styles.paymentMethodDescription, themeStyles.paymentMethodDescription]}>
                {method.description}
              </Text>
            )}
            {selectedPaymentMethod === method.id && method.id === 2 && (
              <View style={styles.upiContainer}>
                <Text style={[styles.upiLabel, themeStyles.upiLabel]}>Link via UPI</Text>
                <TextInput
                  style={[styles.upiInput, themeStyles.upiInput]}
                  placeholder="Enter your UPI ID"
                  placeholderTextColor={isDay ? "#000" : "#FFF"}
                  value={upiId}
                  onChangeText={setUpiId}
                />
                <TouchableOpacity style={styles.upiContinueButton}>
                  <Text style={styles.upiContinueButtonText}>Continue</Text>
                </TouchableOpacity>
                <Text style={[styles.upiNote, themeStyles.upiNote]}>
                  <Icon name="shield" size={16} color="#4CAF50" /> Your UPI ID will be encrypted and is 100% safe with us.
                </Text>
              </View>
            )}
            {selectedPaymentMethod === method.id && method.id === 3 && (
              <View style={styles.walletContainer}>
                <Text style={[styles.walletLabel, themeStyles.walletLabel]}>Link Your Wallet</Text>
                <TextInput
                  style={[styles.walletInput, themeStyles.walletInput]}
                  placeholder="+91"
                  placeholderTextColor={isDay ? "#000" : "#FFF"}
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
                <Text style={[styles.netBankingButtonText, themeStyles.netBankingButtonText]}>Net Banking:</Text>
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
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addCardText: {
    fontSize: 16,
    color: '#4CAF50',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    position: 'relative',
  },
  cardType: {
    fontSize: 12,
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 14,
  },
  cardExp: {
    fontSize: 14,
  },
  cardCvv: {
    fontSize: 14,
  },
  cardBrand: {
    width: 40,
    height: 25,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  paymentMethod: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  selectedPaymentMethod: {
    borderColor: '#4CAF50',
  },
  paymentMethodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentMethodTitle: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  paymentMethodDescription: {
    fontSize: 14,
    marginTop: 10,
  },
  upiContainer: {
    marginTop: 10,
  },
  upiLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  upiInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  upiContinueButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  upiContinueButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  upiNote: {
    fontSize: 12,
    marginTop: 5,
  },
  walletContainer: {
    marginTop: 10,
  },
  walletLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  walletInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  walletContinueButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  walletContinueButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  netBankingButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  netBankingButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    margin: 15,
  },
  continueButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
  },
  dayTheme: {
    container: {
      backgroundColor: '#F5F5F5',
    },
    header: {
      backgroundColor: '#FFF',
    },
    headerTitle: {
      color: '#000',
    },
    contentContainer: {
      backgroundColor: '#FFF',
    },
    cardContainer: {
      backgroundColor: '#FFF',
    },
    cardHeader: {
      backgroundColor: '#FFF',
    },
    cardTitle: {
      color: '#000',
    },
    paymentMethod: {
      backgroundColor: '#FFF',
      borderColor: '#ddd',
    },
    paymentMethodHeader: {
      backgroundColor: '#FFF',
    },
    paymentMethodTitle: {
      color: '#000',
    },
    paymentMethodDescription: {
      color: '#000',
    },
    upiLabel: {
      color: '#000',
    },
    upiInput: {
      backgroundColor: '#FFF',
      borderColor: '#ddd',
    },
    upiNote: {
      color: '#000',
    },
    walletLabel: {
      color: '#000',
    },
    walletInput: {
      backgroundColor: '#FFF',
      borderColor: '#ddd',
    },
    netBankingButtonText: {
      color: '#FFF',
    },
  },
  nightTheme: {
    container: {
      backgroundColor: '#1C1C1C',
    },
    header: {
      backgroundColor: '#333',
    },
    headerTitle: {
      color: '#FFF',
    },
    contentContainer: {
      backgroundColor: '#2C2C2C',
    },
    cardContainer: {
      backgroundColor: '#333',
    },
    cardHeader: {
      backgroundColor: '#333',
    },
    cardTitle: {
      color: '#FFF',
    },
    paymentMethod: {
      backgroundColor: '#333',
      borderColor: '#444',
    },
    paymentMethodHeader: {
      backgroundColor: '#333',
    },
    paymentMethodTitle: {
      color: '#FFF',
    },
    paymentMethodDescription: {
      color: '#FFF',
    },
    upiLabel: {
      color: '#FFF',
    },
    upiInput: {
      backgroundColor: '#444',
      borderColor: '#666',
    },
    upiNote: {
      color: '#FFF',
    },
    walletLabel: {
      color: '#FFF',
    },
    walletInput: {
      backgroundColor: '#444',
      borderColor: '#666',
    },
    netBankingButtonText: {
      color: '#FFF',
    },
  },
});

export default PaymentScreen;
