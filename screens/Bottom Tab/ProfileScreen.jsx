import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mostOrderedItems = [
  {
    id: '1',
    name: 'Creamy Latte Coffee',
    category: 'Beverages',
    image: require('../Assets/productspics/cofee.jpeg'),
  },
  {
    id: '3',
    name: 'Ombe Ice Coffee Latte',
    category: 'Beverages',
    image: require('../Assets/productspics/cofee.jpeg'),
  },
  {
    id: '4',
    name: 'OweweCoffee Latte',
    category: 'Beverages',
    image: require('../Assets/productspics/cofee.jpeg'),
  },
];

const Profile = () => {
  const navigation = useNavigation();
  
  const [profileData, setProfileData] = useState({
    fullName: 'Ash Yellow',
    mobileNumber: '+92 7268372663',
    email: 'example@gmail.com',
    location: 'abc, Corner abc, 24125151',
    profileImage: require('../Assets/Profile/profile.jpg'), 
  });

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const storedProfile = await AsyncStorage.getItem('profileData');
        if (storedProfile) {
          setProfileData(JSON.parse(storedProfile));
        }
      } catch (error) {
        console.error('Failed to load profile data', error);
      }
    };

    loadProfileData();
  }, []);

  useEffect(() => {
    const saveProfileData = async () => {
      try {
        await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      } catch (error) {
        console.error('Failed to save profile data', error);
      }
    };

    saveProfileData();
  }, [profileData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Cart')}>
          <Icon name="arrow-back" size={24} color="#2E8B57" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('Edit', { ...profileData, updateProfile: setProfileData })}
        >
          <Icon name="edit" size={24} color="#2E8B57" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={profileData.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{profileData.fullName}</Text>
        <Text style={styles.profileLocation}>{profileData.location}</Text>
      </View>

      <View style={styles.contactSection}>
        <View style={styles.contactItem}>
          <View style={styles.contactIcon}>
            <Icon name="phone" size={24} color="#2E8B57" />
          </View>
          <View style={styles.contactText}>
            <Text style={styles.contactLabel}>Mobile Phone</Text>
            <Text style={styles.contactValue}>{profileData.mobileNumber}</Text>
          </View>
        </View>
        <View style={styles.contactItem}>
          <View style={styles.contactIcon}>
            <Icon name="email" size={24} color="#2E8B57" />
          </View>
          <View style={styles.contactText}>
            <Text style={styles.contactLabel}>Email Address</Text>
            <Text style={styles.contactValue}>{profileData.email}</Text>
          </View>
        </View>
        <View style={styles.contactItem}>
          <View style={styles.contactIcon}>
            <Icon name="location-on" size={24} color="#2E8B57" />
          </View>
          <View style={styles.contactText}>
            <Text style={styles.contactLabel}>Address</Text>
            <Text style={styles.contactValue}>{profileData.location}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Most Ordered</Text>
      <FlatList
        data={mostOrderedItems}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.textContainer1}>
                <Text style={styles.itemCategory}>{item.category}</Text>
              </View>
            </View>
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
    backgroundColor: 'white',
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
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  profileLocation: {
    fontSize: 14,
    color: '#888',
  },
  contactSection: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactIcon: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'black',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: 10,
  },
  contactLabel: {
    fontSize: 14,
    color: '#888',
  },
  contactValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginVertical: 10,
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 10,
    height: 120,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#2E8B57',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    alignItems: 'flex-start',
    width: 250,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer1: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  itemCategory: {
    marginTop: 15,
    fontSize: 15,
    color: 'white',
  },
});

export default Profile;
