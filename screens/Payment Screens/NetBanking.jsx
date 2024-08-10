import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const allBanks = [
  'Habib Bank Limited',
  'United Bank Limited',
  'National Bank of Pakistan',
  'Meezan Bank',
  'Allied Bank',
  'MCB Bank',
  'Bank Alfalah',
  'Askari Bank',
  'Faysal Bank',
  'Bank of Punjab',
  'Standard Chartered Bank',
  'Summit Bank',
];

const BankListScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const filteredBanks = allBanks.filter(bank => bank.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by bank name"
          placeholderTextColor="#000"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text style={styles.sectionTitle}>All Banks</Text>
      <FlatList
        data={filteredBanks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bankListItem}>
            <Text style={styles.bankListText}>{item}</Text>
            <Icon name="chevron-right" size={20} color="#000" />
          </View>
        )}
        contentContainerStyle={styles.section}
      />

      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <Text style={styles.returnButtonText}>Return</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  bankListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  bankListText: {
    fontSize: 16,
    color: '#000',
  },
  returnButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BankListScreen;
