import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

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
    name: 'Owewe Coffee Latte',
    category: 'Beverages',
    image: require('../Assets/productspics/cofee.jpeg'),
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay); 

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
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#ffffff' : '#333333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#ffffff' : '#444444' }]}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Cart')}>
          <Icon name="arrow-back" size={24} color={isDay ? '#2E8B57' : '#a2d9a2'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000000' : '#ffffff' }]}>Profile</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Edit', { ...profileData, updateProfile: setProfileData })}
        >
          <Icon name="edit" size={24} color={isDay ? '#2E8B57' : '#a2d9a2'} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={profileData.profileImage || require('../Assets/Profile/profile.jpg')} style={styles.profileImage} />
        <Text style={[styles.profileName, { color: isDay ? '#000000' : '#ffffff' }]}>{profileData.fullName}</Text>
        <Text style={[styles.profileLocation, { color: isDay ? '#888888' : '#aaaaaa' }]}>{profileData.location}</Text>
      </View>

      <View style={styles.contactSection}>
        <View style={styles.contactItem}>
          <View style={[styles.contactIcon, { backgroundColor: isDay ? '#ffffff' : '#555555' }]}>
            <Icon name="phone" size={24} color={isDay ? '#2E8B57' : '#a2d9a2'} />
          </View>
          <View style={styles.contactText}>
            <Text style={[styles.contactLabel, { color: isDay ? '#888888' : '#aaaaaa' }]}>Mobile Phone</Text>
            <Text style={[styles.contactValue, { color: isDay ? '#000000' : '#ffffff' }]}>{profileData.mobileNumber}</Text>
          </View>
        </View>
        <View style={styles.contactItem}>
          <View style={[styles.contactIcon, { backgroundColor: isDay ? '#ffffff' : '#555555' }]}>
            <Icon name="email" size={24} color={isDay ? '#2E8B57' : '#a2d9a2'} />
          </View>
          <View style={styles.contactText}>
            <Text style={[styles.contactLabel, { color: isDay ? '#888888' : '#aaaaaa' }]}>Email Address</Text>
            <Text style={[styles.contactValue, { color: isDay ? '#000000' : '#ffffff' }]}>{profileData.email}</Text>
          </View>
        </View>
        <View style={styles.contactItem}>
          <View style={[styles.contactIcon, { backgroundColor: isDay ? '#ffffff' : '#555555' }]}>
            <Icon name="location-on" size={24} color={isDay ? '#2E8B57' : '#a2d9a2'} />
          </View>
          <View style={styles.contactText}>
            <Text style={[styles.contactLabel, { color: isDay ? '#888888' : '#aaaaaa' }]}>Address</Text>
            <Text style={[styles.contactValue, { color: isDay ? '#000000' : '#ffffff' }]}>{profileData.location}</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: isDay ? '#000000' : '#ffffff' }]}>Most Ordered</Text>
      <FlatList
        data={mostOrderedItems}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: isDay ? '#2E8B57' : '#444444' }]}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.textContainer}>
              <Text style={[styles.itemName, { color: '#ffffff' }]}>{item.name}</Text>
              <Text style={[styles.itemCategory, { color: '#ffffff' }]}>{item.category}</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
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
  },
  profileLocation: {
    fontSize: 14,
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
    borderRadius: 30,
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
  },
  contactValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  listContent: {
    paddingHorizontal: 10,
    height: 120,
  },
  itemContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
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
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCategory: {
    fontSize: 15,
  },
});

export default Profile;
