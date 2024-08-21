import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Onboarding1 = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#333333' }]}>
      <View style={styles.imageContainer}>
        <Image source={require('../Assets/login/login1.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: isDay ? '#000000' : '#FFFFFF' }]}>
          Start your morning with great coffee
        </Text>
        <Text style={[styles.description, { color: isDay ? '#757575' : '#CCCCCC' }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator, { backgroundColor: isDay ? '#4CAF50' : '#66BB6A' }]} />
      </View>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: isDay ? '#4CAF50' : '#66BB6A' }]} 
        onPress={() => navigation.navigate('Onboarding')}
      >
        <Text style={[styles.buttonText, { color: isDay ? '#FFFFFF' : '#000000' }]}>
          GET STARTED
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#E0E0E0',
  },
  button: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboarding1;
