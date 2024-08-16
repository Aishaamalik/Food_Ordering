import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const pages = [
  { name: 'Onboarding', icon: 'slideshow' },
  { name: 'Sign In', icon: 'login' },
  { name: 'Sign Up', icon: 'person-add' },
  { name: 'Forgot Password', icon: 'lock' },
  { name: 'Enter Code OTP', icon: 'dialpad' },
  { name: 'Enter New Password', icon: 'lock-open' },
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

const PagesScreen = ({ navigation }) => {
  const handlePress = (pageName) => {
    if (pageName === 'Onboarding') {
      navigation.navigate('Onboarding');
    }
    if (pageName === 'Sign Up') {
      navigation.navigate('SignUp');
    }
    if (pageName === 'Sign In') {
      navigation.navigate('SignIn');
    }
    if (pageName === 'Forgot Password') {
      navigation.navigate('Forget Password');
    }
    if (pageName === 'Enter Code OTP') {
      navigation.navigate('CodeOPT');
    }
    if (pageName === 'Home') {
      navigation.navigate('Main');
    }
    if (pageName === 'Products') {
      navigation.navigate('Products');
    }
    if (pageName === 'Product Detail') {
      navigation.navigate('OrderScreen');// not working
    }
    if (pageName === 'Search') {
      navigation.navigate('Search');
    }
    if (pageName === 'Cart') {
      navigation.navigate('Cart');
    }
    if (pageName === 'Add Card') {
      navigation.navigate('Add Card');
    }
    if (pageName === 'Add Delivery Address') {
      navigation.navigate('Change Address');
    }
    if (pageName === 'Chat List') {
      navigation.navigate('Chat List');
    }
    if (pageName === 'Checkout') {
      navigation.navigate('Checkout');
    }
    if (pageName === 'Chat') {
      navigation.navigate('Chat');
    }
    if (pageName === 'Delivery Address') {
      navigation.navigate('Delivery Address');
    }
    if (pageName === 'Profile') {
      navigation.navigate('Profile');
    }
    if (pageName === 'Edit Profile') {
      navigation.navigate('Edit', { user: { fullName: 'AShYellow' } });
    }
    if (pageName === 'FAQ') {
      navigation.navigate('FQA');
    }
    if (pageName === 'My Order') {
      navigation.navigate('My Order');
    }
    if (pageName === 'Notification') {
      navigation.navigate('Notifications');
    }
    if (pageName === 'Wishlist') {
      navigation.navigate('Liked');
    }
    if (pageName === 'Review') {
      navigation.navigate('Review');
    }
    if (pageName === 'Reward') {
      navigation.navigate('Rewards');
    }
    if (pageName === 'Track Order') {
      navigation.navigate('Track Order');
    }
    if (pageName === 'Payment') {
      navigation.navigate('Payment');
    }
    if (pageName === 'Error - 404') {
      navigation.navigate('Error');
    }
    
    
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.pageItem} 
      onPress={() => handlePress(item.name)}
    >
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={24} color="#fff" />
      </View>
      <Text style={styles.pageText}>{item.name}</Text>
      <Icon name="chevron-right" size={24} color="#000" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pages</Text>
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
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
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
    color: 'black',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  pageText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default PagesScreen;