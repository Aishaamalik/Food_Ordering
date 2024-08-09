import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const MyOrderScreen = ({ route, navigation }) => {
  const [activeTab, setActiveTab] = useState('Ongoing');
  
  const { ongoingOrders = [] } = route.params || {};

  const renderOrderItem = ({ item, index }) => (
    <View key={index} style={styles.orderItem}>
      <View style={styles.imageContainer}>
        <Image source={item.product.image} style={styles.orderImage} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={14} color="#FFD700" />
          <Text style={styles.orderItemRating}>{item.product.rating}</Text>
        </View>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.orderItemTitle}>{item.product.title}</Text>
        <Text style={styles.orderItemNotes}>{item.notes}</Text>
        <View style={styles.priceAndButton}>
          <Text style={styles.orderItemQty}>${item.currentPrice.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.trackOrderButton}
            onPress={() => navigation.navigate('Track Order', { orderId: item.id })}
          >
            <Text style={styles.trackOrderButtonText}>Track Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
          style={[styles.tabButton, activeTab === 'Ongoing' && styles.activeTabButton]}
          onPress={() => setActiveTab('Ongoing')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Ongoing' && styles.activeTabButtonText]}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Past' && styles.activeTabButton]}
          onPress={() => setActiveTab('Past')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'Past' && styles.activeTabButtonText]}>Past</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ongoingOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.orderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabButtonText: {
    fontSize: 16,
    color: '#777',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
  },
  activeTabButtonText: {
    color: '#4CAF50',
  },
  orderList: {
    padding: 15,
  },
  orderItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    position: 'relative',
  },
  imageContainer: {
    marginRight: 15,
  },
  orderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange', 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10, 
  },
  orderItemRating: {
    fontSize: 14,
    marginLeft: 5,
    color: '#fff',
  },
  orderDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  orderItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  orderItemNotes: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  priceAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderItemQty: {
    fontSize: 16,
    color: '#000',
  },
  trackOrderButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  trackOrderButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MyOrderScreen;
