import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const EnterCodeScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const isDay = useSelector(state => state.theme.isDay);
  const navigation = useNavigation();

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : 'black' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <View style={[styles.backButton, { backgroundColor: isDay ? '#E0F0E9' : '#333333' }]}>
            <Icon name="arrow-left" size={24} color={isDay ? 'black' : 'white'} />
          </View>
        </TouchableOpacity>
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDay ? 'black' : 'white' }]}>Enter Code</Text>
        <Text style={[styles.subtitle, { color: isDay ? 'gray' : '#B9B9B9' }]}>
          An authentication code has been sent to info@examplegmail.com
        </Text>
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.codeInput, { borderBottomColor: isDay ? 'gray' : '#B9B9B9', color: isDay ? 'black' : 'white' }]}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              placeholderTextColor={isDay ? 'gray' : '#B9B9B9'}
            />
          ))}
        </View>
        <Text style={[styles.resendText, { color: isDay ? 'gray' : '#B9B9B9' }]}>
          If you don’t receive the code! <Text style={[styles.resendLink, { color: isDay ? '#087F23' : '#4CAF50' }]}>Resend</Text>
        </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: isDay ? '#087F23' : '#0B5A40' }]}>
          <Text style={[styles.buttonText, { color: isDay ? 'white' : '#E0F0E9' }]}>VERIFY AND PROCEED</Text>
        </TouchableOpacity>
        <Text style={[styles.backToSignIn, { color: isDay ? 'gray' : '#B9B9B9' }]}>
          Back To <Text style={[styles.signInLink, { color: isDay ? '#087F23' : '#4CAF50' }]}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginLeft: 16,
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderBottomWidth: 1,
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  resendText: {
    marginTop: 20,
    fontSize: 14,
  },
  resendLink: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 40,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToSignIn: {
    marginTop: 20,
    fontSize: 14,
  },
  signInLink: {
    fontWeight: 'bold',
  },
});

export default EnterCodeScreen;
