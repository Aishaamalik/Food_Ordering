import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

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
  const isDay = useSelector(state => state.theme.isDay);

  const filteredBanks = allBanks.filter(bank => bank.toLowerCase().includes(search.toLowerCase()));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#f8f8f8' : '#333' }]}>
      <View style={[styles.searchContainer, { backgroundColor: isDay ? '#fff' : '#444' }]}>
        <Icon name="search" size={24} color={isDay ? '#000' : '#fff'} />
        <TextInput
          style={[styles.searchInput, { color: isDay ? '#000' : '#fff', placeholderTextColor: isDay ? '#000' : '#bbb' }]}
          placeholder="Search by bank name"
          placeholderTextColor={isDay ? '#000' : '#bbb'}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text style={[styles.sectionTitle, { color: isDay ? '#000' : '#fff' }]}>All Banks</Text>
      <FlatList
        data={filteredBanks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.bankListItem, { borderBottomColor: isDay ? '#ddd' : '#555' }]}>
            <Text style={[styles.bankListText, { color: isDay ? '#000' : '#fff' }]}>{item}</Text>
            <Icon name="chevron-right" size={20} color={isDay ? '#000' : '#fff'} />
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bankListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  bankListText: {
    fontSize: 16,
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
