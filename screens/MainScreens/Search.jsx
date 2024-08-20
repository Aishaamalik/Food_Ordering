import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PRODUCTS } from '../Productsscreens/Beverages';
import { PRODUCTS1 } from '../Productsscreens/Drinks';
import { PRODUCTS2 } from '../Productsscreens/Food';
import { PRODUCTS3 } from '../Productsscreens/Lunch';
import { PRODUCTS4 } from '../Productsscreens/Pizza';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [filteredProducts1, setFilteredProducts1] = useState(PRODUCTS1);
  const [filteredProducts2, setFilteredProducts2] = useState(PRODUCTS2);
  const [filteredProducts3, setFilteredProducts3] = useState(PRODUCTS3);
  const [filteredProducts4, setFilteredProducts4] = useState(PRODUCTS4);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickHistory, setClickHistory] = useState([]);

  const navigation = useNavigation();

  // Get the isDay value from the Redux store
  const isDay = useSelector(state => state.theme.isDay);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem('clickHistory');
        if (storedHistory) {
          setClickHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error('Failed to load history:', error);
      }
    };

    loadHistory();
  }, []);

  const handleSearch = (text) => {
    setQuery(text);

    setFilteredProducts((PRODUCTS || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));

    setFilteredProducts1((PRODUCTS1 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));

    setFilteredProducts2((PRODUCTS2 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));

    setFilteredProducts3((PRODUCTS3 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));

    setFilteredProducts4((PRODUCTS4 || []).filter(product =>
      product.name.toLowerCase().includes(text.toLowerCase())
    ));
  };

  const handleItemPress = async (item) => {
    try {
      const storedHistory = await AsyncStorage.getItem('clickHistory');
      const history = storedHistory ? JSON.parse(storedHistory) : [];

      const updatedHistory = [item, ...history];
      setClickHistory(updatedHistory);

      await AsyncStorage.setItem('clickHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Failed to save history:', error);
    }

    switch (item.category) {
      case 'Beverages':
      case 'Brewed Coffee':
      case 'Blended Coffee':
        navigation.navigate('Beverages', { product: item });
        break;
      case 'Drinks':
      case 'Cold Drinks':
      case 'Smoothies':
        navigation.navigate('Drinks', { product: item });
        break;
      case 'Food':
      case 'Vegetarian':
      case 'Non-Vegetarian':
        navigation.navigate('Food', { product: item });
        break;
      case 'Lunch':
        navigation.navigate('Lunch', { product: item });
        break;
      case 'Pizza':
        navigation.navigate('Pizza', { product: item });
        break;
      default:
        console.log('Unknown category:', item.category);
        break;
    }
  };

  const removeHistoryItem = async (itemToRemove) => {
    try {
      const updatedHistory = clickHistory.filter(item => item !== itemToRemove);
      setClickHistory(updatedHistory);
      await AsyncStorage.setItem('clickHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error('Failed to remove history item:', error);
    }
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.productItem} key={index}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={[styles.productText, { color: isDay ? 'black' : 'white'}]}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderHistoryItem = ({ item }) => (
    <View style={[styles.historyItem, {backgroundColor: isDay ? 'white' : 'black'}]}>
      <Icon name="history" size={24} color="#4CAF50" />
      <Text style={[styles.historyText,{color: isDay ? 'black' : 'white'}]}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeHistoryItem(item)}>
        <Icon name="close" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#F5F5F5' : 'black' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#F5F5F5' : 'black' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TextInput
          style={[styles.searchInput, { backgroundColor: isDay ? '#F0F0F0' : '#555', color: isDay ? 'black' : 'white' }]}
          value={query}
          onChangeText={handleSearch}
          placeholder="Search Best Items For You"
          placeholderTextColor={isDay ? '#888' : '#BBB'}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="history" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[...filteredProducts, ...filteredProducts1, ...filteredProducts2, ...filteredProducts3, ...filteredProducts4]}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id ? item.id : index}-${item.category}`}
        contentContainerStyle={[styles.productList, {backgroundColor: isDay ? 'white' : 'black'}]}
      />

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={[styles.modalHeader,{backgroundColor: isDay ? 'white' : 'black'}]}>
            <Text style={[styles.modalTitle, { color: isDay ? 'gray' : 'white'}]}>Search History</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={clickHistory}
            renderItem={renderHistoryItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.historyList}
            style={[styles.flatlist, {backgroundColor: isDay ? 'white' :'black'}]}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  productList: {
    paddingBottom: 15,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  productText: {
    marginLeft: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyList: {
    padding: 15,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  historyText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  flatlist: {
    color: 'black',
  },
});

export default Search;
