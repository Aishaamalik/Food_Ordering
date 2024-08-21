import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const pages = [
  { name: 'Onboarding', icon: 'slideshow' },
  { name: 'Sign In', icon: 'login' },
  { name: 'Sign Up', icon: 'person-add' },
  { name: 'Forgot Password', icon: 'lock' },
  { name: 'Enter Code OTP', icon: 'dialpad' },
  { name: 'Home', icon: 'home' },
  { name: 'Products', icon: 'local-offer' },
  { name: 'Product Detail', icon: 'info' },
  { name: 'Search', icon: 'search' },
  { name: 'Cart', icon: 'shopping-cart' },
  { name: 'Add Card', icon: 'credit-card' },
  { name: 'Add Delivery Address', icon: 'location-on' },
  { name: 'Chat List', icon: 'chat' },
  { name: 'Chat', icon: 'chat-bubble' },
  { name: 'Checkout', icon: 'payment' },
  { name: 'Delivery Address', icon: 'location-pin' },
  { name: 'Profile', icon: 'person' },
  { name: 'Edit Profile', icon: 'edit' },
  { name: 'FAQ', icon: 'help' },
  { name: 'My Order', icon: 'receipt' },
  { name: 'Notification', icon: 'notifications' },
  { name: 'Wishlist', icon: 'favorite' },
  { name: 'Review', icon: 'rate-review' },
  { name: 'Reward', icon: 'card-giftcard' },
  { name: 'Track Order', icon: 'map' },
  { name: 'Payment', icon: 'attach-money' },
  { name: 'Error - 404', icon: 'error' },
];

const PagesScreen = () => {
  const isDay = useSelector(state => state.theme.isDay);
  const navigation = useNavigation();

  const handlePress = (pageName) => {
    const routes = {
      'Onboarding': 'Onboarding',
      'Sign Up': 'SignUp',
      'Sign In': 'SignIn',
      'Forgot Password': 'Forget Password',
      'Enter Code OTP': 'CodeOPT',
      'Home': 'Main',
      'Products': 'Products',
      'Product Detail': 'OrderScreen',
      'Search': 'Search',
      'Cart': 'Cart',
      'Add Card': 'Add Card',
      'Add Delivery Address': 'Change Address',
      'Chat List': 'Chat List',
      'Checkout': 'Checkout',
      'Chat': 'Chat',
      'Delivery Address': 'Delivery Address',
      'Profile': 'Profile',
      'Edit Profile': 'Edit',
      'FAQ': 'FQA',
      'My Order': 'My Order',
      'Notification': 'Notifications',
      'Wishlist': 'Liked',
      'Review': 'Review',
      'Reward': 'Rewards',
      'Track Order': 'Track Order',
      'Payment': 'Payment',
      'Error - 404': 'Error'
    };

    if (routes[pageName]) {
      navigation.navigate(routes[pageName], pageName === 'Edit Profile' ? { user: { fullName: 'AShYellow' } } : {});
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.pageItem, { backgroundColor: isDay ? '#F5F5F5' : '#333' }]}
      onPress={() => handlePress(item.name)}
    >
      <View style={[styles.iconContainer, { backgroundColor: isDay ? '#4CAF50' : '#555' }]}>
        <Icon name={item.icon} size={24} color={isDay ? '#fff' : '#ddd'} />
      </View>
      <Text style={[styles.pageText, { color: isDay ? 'black' : '#ddd' }]}>{item.name}</Text>
      <Icon name="chevron-right" size={24} color={isDay ? '#000' : '#ddd'} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#F5F5F5' : '#222' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#ddd'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? 'black' : '#ddd' }]}>Pages</Text>
      </View>

      <FlatList
        data={pages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.pageList}
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
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pageList: {
    padding: 15,
  },
  pageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  pageText: {
    flex: 1,
    fontSize: 16,
  },
});

export default PagesScreen;
