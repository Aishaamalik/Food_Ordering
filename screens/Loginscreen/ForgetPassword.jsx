import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const isDay = useSelector(state => state.theme.isDay);
  const navigation = useNavigation();


  return (
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : '#121212' }]}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.backButton, { backgroundColor: isDay ? '#E0F0E9' : '#333333' }]}>
            <Icon name="arrow-left" size={24} color={isDay ? 'black' : 'white'} />
          </View>
        </TouchableOpacity>
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDay ? 'black' : 'white' }]}>Forgot Password</Text>
        <Text style={[styles.subtitle, { color: isDay ? 'gray' : '#B9B9B9' }]}>
          Enter the email associated with your account and we’ll send an email to reset your password.
        </Text>
        <Text style={[styles.label, { color: isDay ? 'gray' : '#B9B9B9' }]}>Email Address</Text>
        <TextInput
          style={[styles.input, { borderBottomColor: isDay ? 'gray' : '#B9B9B9' }]}
          placeholder="info@example.com"
          placeholderTextColor={isDay ? 'gray' : '#B9B9B9'}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: isDay ? '#087F23' : '#0B5A40' }]}>
          <Text style={[styles.buttonText, { color: isDay ? 'white' : '#E0F0E9' }]}>SEND MAIL</Text>
        </TouchableOpacity>
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
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
  },
  label: {
    marginTop: 30,
    fontSize: 14,
  },
  input: {
    marginTop: 10,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingBottom: 8,
  },
  button: {
    marginTop: 40,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
