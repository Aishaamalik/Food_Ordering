import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native'; // Correct import

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.name}>William</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-cart" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Espresso</Text>
            <Text style={styles.itemPrice}>$3.00</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Latte</Text>
            <Text style={styles.itemPrice}>$4.50</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Cappuccino</Text>
            <Text style={styles.itemPrice}>$4.00</Text>
          </View>
        </View>
        {/* Add more coffee items as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
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
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#ffffff', // White background for items
    borderRadius: 8,
    padding: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388e3c', // Green text for item titles
  },
  itemPrice: {
    fontSize: 16,
    color: '#4caf50', // Slightly different green for prices
  },
});

export default Main;
