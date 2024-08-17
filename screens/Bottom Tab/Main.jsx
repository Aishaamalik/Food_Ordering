import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Entypo';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomImageCaroselSquare from '../components/CustomImageCaroselSquare';
import SecondStack from '../components/SecondStack';
import Beverages from '../Productsscreens/Beverages';

const { width: screenWidth } = Dimensions.get('window');

const Main = () => {
  const [profileData, setProfileData] = useState({ 
    fullName: '',
  });

  const navigation = useNavigation();

  const loadProfileData = async () => {
    try {
      const storedProfile = await AsyncStorage.getItem('signedInUser');
      if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        if (!profile.fullName) {
          profile.fullName = 'Ash Yellow';
        }
        setProfileData(profile);
      } else {
        setProfileData({ fullName: 'Ash Yellow' });
      }
    } catch (error) {
      console.error('Failed to load profile data', error);
      setProfileData({ fullName: 'Ash Yellow' }); 
    }
  };
  

  useEffect(() => {
    loadProfileData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadProfileData();
    }, [])
  );

  useEffect(() => {
    const updateProfile = async () => {
      try {
        await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      } catch (error) {
        console.error('Failed to update profile data', error);
      }
    };

    updateProfile();
  }, [profileData]);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good Morning';
    } else if (hours < 18) {
      return 'Good Afternoon';
    } else if (hours < 21) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  const data = [
    { image: require('../Assets/chai.png'), label1: 'Chai', label2: '$ 5.8' },
    { image: require('../Assets/blackcoffee.png'), label1: 'Black Coffee', label2: '$ 5.8' },
    { image: require('../Assets/whitechocolatemocha.png'), label1: 'Choco Mocha', label2: '$ 5.8' },
    { image: require('../Assets/chai.png'), label1: 'Chai', label2: '$ 5.8' },
    { image: require('../Assets/blackcoffee.png'), label1: 'Black Coffee', label2: '$ 5.8' },
    { image: require('../Assets/whitechocolatemocha.png'), label1: 'Choco Mocha', label2: '$ 5.8' },
  ];

  const data2 = [
    { icon: 'coffee', label1: 'Beverages', label2: '41 Menus' },
    { icon: 'coffee', label1: 'Food', label2: '37 Menus' },
    { icon: 'coffee', label1: 'Pizza', label2: '28 Menus' },
    { icon: 'coffee', label1: 'Drink', label2: '12 Menus' },
    { icon: 'coffee', label1: 'Lunch', label2: '67 Menus' },
  ];

  return (
    <FlatList
      data={[]} 
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
          <View style={styles.topBar}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>{getGreeting()}</Text>
              <Text style={styles.subtitle}>{profileData.fullName}</Text>
            </View>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.iconButton}
              onPress={() => navigation.navigate('Notifications')}>
                <Icon1 name="notification" size={24} color="#388e3c" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => navigation.openDrawer()}
              >
                <Icon name="menu" size={24} color="#388e3c" />
              </TouchableOpacity>
            </View>
          </View>

            <View style={styles.searchContainer}>
              <Icon name="search" size={24} color="#388e3c" style={styles.searchIcon} />
              <TextInput
                style={styles.searchBar}
                placeholder="Search beverages or foods"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.Container1}>
              <CustomImageCaroselSquare data={data} />
            </View>
            <View style={styles.categoriesContainer}>
              <Text style={styles.categoriesTitle}>Categories</Text>
            </View>
            <View style={styles.Container2}>
              <SecondStack data={data2} navigation={navigation} />
            </View>
            <View style={styles.featuredContainer}>
              <View style={styles.featuredHeader}>
                <Text style={styles.featuredTitle}>Featured Beverages</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                  <Text style={styles.moreText}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
        </>
      }
      ListFooterComponent={
        <View style={styles.Container3}>
          <Beverages />
        </View>
      }
      contentContainerStyle={styles.scrollViewContent}
    />
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',

  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    height: 80,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 20,
    color: 'black',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor:'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#388e3c',
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    marginBottom: 16,
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  Container1: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.7,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoriesTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Container2: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 16,
  },
  featuredContainer: {
    marginBottom: 16,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreText: {
    color: '#388e3c',
    fontSize: 16,
  },
  Container3: {
    flex: 1,
  },
  subtitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Main;
