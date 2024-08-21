import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [storedUserDetails, setStoredUserDetails] = useState(null);
  const navigation = useNavigation();
  
  const isDay = useSelector(state => state.theme.isDay);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await AsyncStorage.getItem('userDetails');
        if (userDetails) {
          setStoredUserDetails(JSON.parse(userDetails));
        }
      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogin = async () => {
    if (storedUserDetails) {
      if (username === storedUserDetails.username && password === storedUserDetails.password) {
        try {
          await AsyncStorage.setItem('signedInUser', JSON.stringify({ fullName: username }));
          navigation.navigate('H');
        } catch (error) {
          console.error('Error saving user data', error);
        }
      } else {
        Alert.alert('Login Failed', 'Incorrect username or password');
      }
    } else {
      Alert.alert('Login Failed', 'No user details found');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#000000' }]}>
      <View style={styles.logoContainer}>
        <Image source={require('../Assets/logo.png')} style={styles.logo} />
        <Text style={[styles.logoText, { color: isDay ? 'black' : 'white' }]}>Ombe</Text>
      </View>
      <Text style={[styles.signInText, { color: isDay ? 'black' : 'white' }]}>Sign In</Text>
      <Text style={[styles.descriptionText, { color: isDay ? '#888888' : '#CCCCCC' }]}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
      </Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { color: isDay ? '#888888' : '#CCCCCC' }]}>Username</Text>
        <TextInput
          style={[styles.input, { borderBottomColor: isDay ? '#CCCCCC' : '#555555', color: isDay ? 'black' : 'white' }]}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor={isDay ? '#888888' : '#CCCCCC'}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={[styles.inputLabel, { color: isDay ? '#888888' : '#CCCCCC' }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { borderBottomColor: isDay ? '#CCCCCC' : '#555555', color: isDay ? 'black' : 'white' }]}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            placeholderTextColor={isDay ? '#888888' : '#CCCCCC'}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color={isDay ? 'gray' : 'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={[styles.loginButton, { backgroundColor: isDay ? '#006400' : '#004d00' }]} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.forgotPasswordContainer}>
        <Text style={[styles.forgotPasswordText, { color: isDay ? '#888888' : '#CCCCCC' }]}>Forgot Password?</Text>
        <TouchableOpacity>
          <Text style={[styles.resetPasswordText, { color: isDay ? '#006400' : '#004d00' }]}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={[styles.noAccountText, { color: isDay ? '#888888' : '#CCCCCC' }]}>Don't have an account?</Text>
        <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.createAccountButtonText, { color: isDay ? '#000000' : '#FFFFFF' }]}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
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
  loginButton: {
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
  },
  resetPasswordText: {
    marginLeft: 5,
  },
  createAccountContainer: {
    alignItems: 'center',
  },
  noAccountText: {
    marginBottom: 10,
  },
  createAccountButton: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  createAccountButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;
