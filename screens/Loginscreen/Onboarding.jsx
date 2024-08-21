import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

const Onboarding = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#000000' }]}>
      <View style={styles.imageContainer}>
        <Image source={require('../Assets/blackcoffee.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: isDay ? '#000000' : '#FFFFFF' }]}>
          Morning begins with Ombe coffee
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.emailButton, { backgroundColor: isDay ? '#4CAF50' : '#2E7D32' }]}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Icon1 name="email" size={24} color={isDay ? 'white' : '#B9B9B9'} />
          <Text style={[styles.buttonText, { color: isDay ? '#FFFFFF' : '#B9B9B9' }]}>
            Login With Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.facebookButton, { backgroundColor: isDay ? '#3b5998' : '#2E3A59' }]}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Icon name="facebook" size={24} color={isDay ? 'white' : '#B9B9B9'} />
          <Text style={[styles.buttonText, { color: isDay ? '#FFFFFF' : '#B9B9B9' }]}>
            Login With Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.googleButton, { backgroundColor: isDay ? 'white' : '#333333' }]}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Icon name="google" size={24} color={isDay ? 'black' : '#B9B9B9'} />
          <Text style={[styles.buttonText1, { color: isDay ? 'black' : '#B9B9B9' }]}>
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  emailButton: {
    backgroundColor: '#4CAF50',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Onboarding;
