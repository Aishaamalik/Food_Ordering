import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import CustomImageCaroselSquare from '../components/CustomImageCaroselSquare';

const { width: screenWidth } = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();

  const data = [
    { label: 'Item 1' },
    { label: 'Item 2' },
    { label: 'Item 3' },
    { label: 'Item 4' },
    { label: 'Item 5' },
    // { label: 'Item 6' },
    // { label: 'Item 7' },
    // { label: 'Item 8' },
    // { label: 'Item 9' },
    // { label: 'Item 10' },
    // { label: 'Item 11' },
    // { label: 'Item 12' },
    // { label: 'Item 13' },
    // { label: 'Item 14' },
    // // { label: 'Item 15' },
    // { label: 'Item 16' },
    // { label: 'Item 17' },
    // { label: 'Item 18' },
    // { label: 'Item 19' },
    // { label: 'Item 20' },
    // { label: 'Item 21' },
    // { label: 'Item 22' },
    // { label: 'Item 23' },
    // { label: 'Item 24' },
  ];

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
        <View style={styles.yellowContainer}>
          <CustomImageCaroselSquare data={data} />
        </View>
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
    height: screenWidth * 0.5,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderColor: 'white',
  },
});

export default Main;
