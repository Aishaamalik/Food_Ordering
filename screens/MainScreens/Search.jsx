import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const initialSearchHistory = [
  'Sweet Lemon Indonesian Tea',
  'Hot Cappuccino Latte with Mocha',
  'Arabica Latte Ombe Coffee',
  'Original Hot Coffee',
];

const SearchHistoryScreen = () => {
  const [searchHistory, setSearchHistory] = useState(initialSearchHistory);
  const navigation = useNavigation();

  const handleClearAll = () => {
    setSearchHistory([]);
  };

  const handleRemoveItem = (itemToRemove) => {
    setSearchHistory(prevHistory => prevHistory.filter(item => item !== itemToRemove));
  };

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Icon name="history" size={24} color="#4CAF50" />
      <Text style={styles.historyText}>{item}</Text>
      <TouchableOpacity onPress={() => handleRemoveItem(item)}>
        <Icon name="close" size={24} color="#FF5722" />
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
          placeholder="Search Best Items For You" 
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>Search History</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchHistory}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.historyList}
      />
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'black',
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  clearAll: {
    fontSize: 16,
    color: '#4CAF50',
  },
  historyList: {
    paddingHorizontal: 15,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  historyText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchHistoryScreen;
