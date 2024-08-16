import React, { useState } from 'react';
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
import { PRODUCTS } from '../Productsscreens/Beverages';
import { PRODUCTS1 } from '../Productsscreens/Drinks';
import { PRODUCTS2 } from '../Productsscreens/Food';
import { PRODUCTS3 } from '../Productsscreens/Lunch';
import { PRODUCTS4 } from '../Productsscreens/Pizza';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts1, setFilteredProducts1] = useState([]);
  const [filteredProducts2, setFilteredProducts2] = useState([]);
  const [filteredProducts3, setFilteredProducts3] = useState([]);
  const [filteredProducts4, setFilteredProducts4] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickHistory, setClickHistory] = useState([]); // State to store click history

  const navigation = useNavigation();

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

  const handleItemPress = (item) => {
    // Update the click history
    setClickHistory(prevHistory => [item, ...prevHistory]);

    switch (item.category) {
      case 'Beverages':
        navigation.navigate('Beverages', { product: item });
        break;
      case 'Brewed Coffee':
        navigation.navigate('Beverages', { product: item });
        break;
      case 'Blended Coffee':
        navigation.navigate('Beverages', { product: item });
        break;
      case 'Drinks':
        navigation.navigate('Drinks', { product: item });
        break;
      case 'Cold Drinks':
        navigation.navigate('Drinks', { product: item });
        break;
      case 'Smoothies':
        navigation.navigate('Drinks', { product: item });
        break;
      case 'Food':
        navigation.navigate('Food', { product: item });
        break;
      case 'Vegetarian':
        navigation.navigate('Food', { product: item });
        break;
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

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.productItem} key={index}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Icon name="history" size={24} color="#4CAF50" />
      <Text style={styles.historyText}>{item.name}</Text>
      <TouchableOpacity>
        <Icon name="close" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={handleSearch}
          placeholder="Search Best Items For You"
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="history" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      {filteredProducts.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Beverages</Text>
          <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts1.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Drinks</Text>
          <FlatList
            data={filteredProducts1}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts2.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Food</Text>
          <FlatList
            data={filteredProducts2}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts3.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Lunch</Text>
          <FlatList
            data={filteredProducts3}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      {filteredProducts4.length > 0 && (
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Pizza</Text>
          <FlatList
            data={filteredProducts4}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Search History</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={clickHistory}
            renderItem={renderHistoryItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.historyList}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    color: 'black',
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 15,
    color: 'black',
  },
  categoryContainer: {
    padding: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  productList: {
    paddingBottom: 15,
    color: 'black',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color: 'black',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  productText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
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
    color: 'black',
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
    color: 'black',
  },
});

export default Search;
