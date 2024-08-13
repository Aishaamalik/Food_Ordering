import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LikedScreen = ({ route }) => {
  const [likedItems, setLikedItems] = useState([]);
  const [removingItem, setRemovingItem] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('likedItems');
        if (storedItems) {
          setLikedItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Failed to load items:', error);
      }
    };

    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem('likedItems', JSON.stringify(likedItems));
      } catch (error) {
        console.error('Failed to save items:', error);
      }
    };

    saveItems();
  }, [likedItems]);

  useEffect(() => {
    const { newItem } = route.params || {}; 
    if (newItem) {
      setLikedItems(prevItems => {
        const updatedItems = [...prevItems, newItem];
        return updatedItems;
      });
    }
  }, [route.params]);

  const handleRemoveItem = (item) => {
    setRemovingItem(item.id);
    setTimeout(() => {
      setLikedItems(prevItems => prevItems.filter(i => i.id !== item.id));
      setRemovingItem(null);
    }, 1000);
  };

  const totalItems = likedItems.length;
  const totalPrice = likedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wishlist</Text>
        <Icon name="search" size={24} color="#000" />
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>{totalItems} Items</Text>
        <Text style={styles.summaryText}>•</Text>
        <Text style={styles.summaryText}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>

      <FlatList
        data={likedItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Icon
                name="favorite"
                size={24}
                color={removingItem === item.id ? 'green' : 'red'}
              />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
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
    borderColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  summaryText: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 5,
  },
  listContent: {
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemVariant: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
    color: 'black',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LikedScreen;
