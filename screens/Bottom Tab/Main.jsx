import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import StackSwiperWapper from './StackSwiperWapper';

const { width: screenWidth } = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.name}>William</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-cart" size={24} color="#388e3c" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="menu" size={24} color="#388e3c" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#388e3c" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search beverages or foods"
            placeholderTextColor="gray"
          />
        </View>
        <StackSwiperWapper>
        <View style={styles.yellowContainer}>
          <Swiper
            showsButtons={false}
            autoplay
            autoplayTimeout={3}
            containerStyle={styles.swiperContainer}
          >
            <View style={styles.slide}>
              <Text style={styles.slideText}>Coffee 1</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.slideText}>Coffee 2</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.slideText}>Coffee 3</Text>
            </View>
          </Swiper>
        </View>
        </StackSwiperWapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'flex-start', 
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
  yellowContainer: {
    backgroundColor: 'white', 
    height: '50%', 
    borderRadius: 40,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16, 
    borderColor: 'yellow',
  },
  swiperContainer: {
    width: screenWidth * 0.9, 
    height: '100%', 
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Green background for slides
    borderRadius: 5,
    padding: 20,
  },
  slideText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Main;
