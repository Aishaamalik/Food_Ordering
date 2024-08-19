import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from '../MainScreens/Search';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; 

const LikedScreen = ({ route }) => {
  const [likedItems, setLikedItems] = useState([]);
  const [removingItem, setRemovingItem] = useState(null);
  const navigation = useNavigation(); 
  const isDay = useSelector(state => state.theme.isDay);

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
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#f8f8f8' : '#333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#fff' : '#444' }]}>
        <Text style={[styles.headerTitle, { color: isDay ? 'black' : 'white' }]}>Wishlist</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Search)}>
          <Icon name="search" size={24} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
      </View>

      <View style={[styles.summary, { backgroundColor: isDay ? '#fff' : '#444' }]}>
        <Text style={[styles.summaryText, { color: isDay ? '#000' : '#fff' }]}>{totalItems} Items</Text>
        <Text style={[styles.summaryText, { color: isDay ? '#000' : '#fff' }]}>•</Text>
        <Text style={[styles.summaryText, { color: isDay ? '#000' : '#fff' }]}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>

      <FlatList
        data={likedItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: isDay ? '#fff' : '#444' }]}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={[styles.itemName, { color: isDay ? 'black' : 'white' }]}>{item.name}</Text>
              <Text style={[styles.itemPrice, { color: isDay ? 'black' : 'white' }]}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
              <Icon
                name="favorite"
                size={24}
                color={removingItem === item.id ? 'green' : (isDay ? 'red' : 'lightcoral')}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  summaryText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  listContent: {
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LikedScreen;
