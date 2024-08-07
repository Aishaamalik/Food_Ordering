import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const OrderScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Ongoing');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Order</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Feather name="home" size={24} color="black" />
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
        <View style={styles.yellowContainer}>
          <Text style={styles.containerText}>Ongoing Orders</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
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
  yellowContainer: {
    flex: 1,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenContainer: {
    flex: 1,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default OrderScreen;
