import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


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
  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay);

  const renderItem = ({ item }) => (
    <View style={[styles.notificationItem, { borderBottomColor: isDay ? '#ddd' : '#555' }]}>
      <Image source={item.image} style={styles.notificationImage} />
      <View style={styles.notificationText}>
        <Text style={[styles.notificationTitle, { color: isDay ? '#000' : '#fff' }]}>{item.title}</Text>
        <Text style={[styles.notificationDate, { color: isDay ? '#888' : '#aaa' }]}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#fff' : '#333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#fff' : '#444', borderColor: isDay ? '#ddd' : '#555' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#fff' }]}>Notifications (12)</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={24} color={isDay ? '#000' : '#fff'} />
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationList: {
    padding: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 15,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDate: {
    fontSize: 14,
  },
});

export default NotificationScreen;
