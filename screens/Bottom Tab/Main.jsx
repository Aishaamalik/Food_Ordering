import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Coffee Shop</Text>
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
    padding: 16,
    backgroundColor: '#e8f5e9', // Light green background
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c', // Darker green for the header text
  },
  content: {
    flex: 1,
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
