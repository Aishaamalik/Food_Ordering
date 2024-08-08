import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

const MyOrderScreen = ({ route, navigation }) => {
  const [activeTab, setActiveTab] = useState('Ongoing');
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Order</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="home" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Ongoing' && styles.tabButtonActive]}
          onPress={() => setActiveTab('Ongoing')}
        >
          <Text style={[styles.tabText, activeTab === 'Ongoing' && styles.tabTextActive]}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Completed' && styles.tabButtonActive]}
          onPress={() => setActiveTab('Completed')}
        >
          <Text style={[styles.tabText, activeTab === 'Completed' && styles.tabTextActive]}>Completed</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'Ongoing' ? (
        <View style={styles.orderList}>
            <Text style={styles.noOrdersText}>No ongoing orders</Text>
          
        </View>
      ) : (
        <View style={styles.greenContainer}>
          <Text style={styles.containerText}>Completed Orders</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  tabButtonActive: {
    backgroundColor: '#008000',
  },
  tabText: {
    color: '#000',
  },
  tabTextActive: {
    color: '#FFF',
  },
  orderList: {
    paddingHorizontal: 20,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  imageContainer: {
    position: 'relative',
  },
  orderImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  orderRating: {
    fontSize: 15,
    marginLeft: 5,
    color: '#FFF',
  },
  orderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  orderQuantity: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  orderSize: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 25,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  continueOrder: {
    marginLeft: 10,
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  removeLabel: {
    marginLeft: 5,
    color: '#FF0000',
    fontSize: 16,
  },
  noOrdersText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  greenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFE0',
  },
  containerText: {
    fontSize: 18,
    color: '#008000',
  },
});

export default MyOrderScreen;
