import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    title: 'New Arrivals Alert!',
    date: '15 July 2023',
    image: require('../Assets/Notifications/p1.jpg'),
  },
  {
    id: '2',
    title: 'Flash Sale Announcement',
    date: '21 July 2023',
    image: require('../Assets/Notifications/p2.jpg'),
  },
  {
    id: '3',
    title: 'Exclusive Discounts Inside',
    date: '10 March 2023',
    image: require('../Assets/Notifications/p3.jpg'),
  },
  {
    id: '4',
    title: 'Limited Stock - Act Fast!',
    date: '20 September 2023',
    image: require('../Assets/Notifications/p4.jpg'),
  },
  {
    id: '5',
    title: 'Get Ready to Shop',
    date: '15 July 2023',
    image: require('../Assets/Notifications/p5.jpg'),
  },
  {
    id: '6',
    title: "Don't Miss Out on Savings",
    date: '24 July 2023',
    image: require('../Assets/Notifications/p6.jpg'),
  },
  {
    id: '7',
    title: 'Special Offer Just for You',
    date: '28 August 2023',
    image: require('../Assets/Notifications/p1.jpg'),
  },
  {
    id: '8',
    title: "Don't Miss Out on Savings",
    date: '15 July 2023',
    image: require('../Assets/Notifications/p1.jpg'),
  },
  {
    id: '9',
    title: "Don't Miss Out on Savings",
    date: '15 July 2023',
    image: require('../Assets/Notifications/p1.jpg'),
  },
  {
    id: '10',
    title: "Don't Miss Out on Savings",
    date: '15 July 2023',
    image: require('../Assets/Notifications/p1.jpg'),
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications (12)</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  notificationList: {
    padding: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 15,
  },
  notificationText: {
    flex: 1,
    color: 'black',

  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',

  },
  notificationDate: {
    fontSize: 14,
    color: '#888',
  },
});



export default NotificationScreen;