import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.name}>William</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-cart" size={24} color="#388e3c" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="menu" size={24} color="#388e3c" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>dfdjfdjgh</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000', // Black shadow color
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 8, // Shadow blur radius
    elevation: 5, // For Android shadow
    borderRadius: 12, // Rounded corners
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 16,
    color: '#388e3c',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388e3c',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  text: {
    color: 'black',
    alignSelf: 'center',
  },
});

export default Main;
