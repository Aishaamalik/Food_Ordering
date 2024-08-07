import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Importing Feather icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons for the star
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyOrderScreen = ({ route, navigation }) => {
  const [activeTab, setActiveTab] = useState('Ongoing');
  const [ongoingOrders, setOngoingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [bookmarkedProduct, setBookmarkedProduct] = useState(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const storedOngoingOrders = await AsyncStorage.getItem('ongoingOrders');
        if (storedOngoingOrders) {
          setOngoingOrders(JSON.parse(storedOngoingOrders));
        }

        const storedCompletedOrders = await AsyncStorage.getItem('completedOrders');
        if (storedCompletedOrders) {
          setCompletedOrders(JSON.parse(storedCompletedOrders));
        }
      } catch (error) {
        console.error('Failed to load orders', error);
      }
    };

    loadOrders();
  }, []);

  useEffect(() => {
    if (route.params?.bookmarkedProduct) {
      const { bookmarkedProduct } = route.params;
      setBookmarkedProduct(bookmarkedProduct);
      setOngoingOrders((prevOrders) => [...prevOrders, bookmarkedProduct]);
    }
  }, [route.params?.bookmarkedProduct]);

  useEffect(() => {
    const saveOrders = async () => {
      try {
        await AsyncStorage.setItem('ongoingOrders', JSON.stringify(ongoingOrders));
        await AsyncStorage.setItem('completedOrders', JSON.stringify(completedOrders));
      } catch (error) {
        console.error('Failed to save orders', error);
      }
    };

    saveOrders();
  }, [ongoingOrders, completedOrders]);

  const renderProductItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.orderImage} />
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={14} color="#FFF" />
          <Text style={styles.orderRating}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.orderTitle}>{item.title}</Text>
        <Text style={styles.orderQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.orderSize}>Size: {item.size}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.orderPrice}>${item.currentPrice.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart', {
            product: item,
            quantity: item.quantity,
            size: item.size,
            currentPrice: item.currentPrice
          })}>
            <Text style={styles.continueOrder}>Continue Order</Text>
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
          {ongoingOrders.length > 0 ? (
            <FlatList
              data={ongoingOrders}
              renderItem={renderProductItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <Text style={styles.noOrdersText}>No ongoing orders</Text>
          )}
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
