import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isDay = useSelector(state => state.theme.isDay);

  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify({ username, email, password }));
      navigation.navigate('Onboarding1');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : 'black' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? 'black' : 'white'} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../Assets/logo.png')} style={styles.logo} />
          <Text style={[styles.logoText, { color: isDay ? 'black' : 'white' }]}>Ombe</Text>
        </View>
      </View>
      <Text style={[styles.title, { color: isDay ? 'black' : 'white' }]}>Create An Account</Text>
      <Text style={[styles.description, { color: isDay ? '#888888' : '#CCCCCC' }]}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { color: isDay ? 'black' : 'white' }]}>Username</Text>
        <TextInput
          style={[styles.input, { color: isDay ? 'black' : 'white', borderBottomColor: isDay ? '#CCCCCC' : '#555555' }]}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor={isDay ? '#888888' : '#AAAAAA'}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { color: isDay ? 'black' : 'white' }]}>Email</Text>
        <TextInput
          style={[styles.input, { color: isDay ? 'black' : 'white', borderBottomColor: isDay ? '#CCCCCC' : '#555555' }]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor={isDay ? '#888888' : '#AAAAAA'}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { color: isDay ? 'black' : 'white' }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { color: isDay ? 'black' : 'white', borderBottomColor: isDay ? '#CCCCCC' : '#555555' }]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            placeholderTextColor={isDay ? '#888888' : '#AAAAAA'}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color={isDay ? 'gray' : 'lightgray'} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={[styles.signupButton, { backgroundColor: isDay ? '#006400' : '#004d00' }]} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={[styles.termsText, { color: isDay ? '#888888' : '#CCCCCC' }]}>
        By tapping “Sign Up” you accept our <Text style={[styles.linkText, { color: isDay ? '#006400' : '#009900' }]}>terms</Text> and <Text style={[styles.linkText, { color: isDay ? '#006400' : '#009900' }]}>conditions</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signupButton: {
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    textAlign: 'center',
  },
  linkText: {
    fontWeight: 'bold',
  },
});

export default SignUp;
