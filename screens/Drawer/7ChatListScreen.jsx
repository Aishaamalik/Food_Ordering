// MessagesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const messages = [
  {
    id: '1',
    name: 'Emily Johnson',
    message: 'Hello William, Thank you for your app',
    time: '2m ago',
    avatar: require('../Assets/Notifications/p1.jpg'),
    read: true,
  },
  {
    id: '2',
    name: 'Olivia James',
    message: 'Hello William!',
    time: '5m ago',
    avatar: require('../Assets/Notifications/p1.jpg'),
    read: false,
  },
  {
    id: '3',
    name: 'William Thompson',
    message: 'Text me!',
    time: 'Wed',
    avatar: require('../Assets/Notifications/p1.jpg'),
    read: true,
  },
  {
    id: '4',
    name: 'Michael Anderson',
    message: 'Hello William!',
    time: 'Mon',
    avatar: require('../Assets/Notifications/p1.jpg'),
    read: false,
  },
  {
    id: '5',
    name: 'Ava Hernandez',
    message: 'Text me!',
    time: '2hr ago',
    avatar: require('../Assets/Notifications/p1.jpg'),
    read: true,
  },
  {
    id: '6',
    name: 'James White',
    message: 'Hello!',
    time: 'Sat',
    avatar: require('../Assets/Notifications/p1.jpg'),
    read: true,
  },
];

const MessagesScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.messageContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      {item.read ? (
        <MaterialIcons name="done-all" size={20} color="green" />
      ) : (
        <View style={styles.unreadDot} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="green" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="gray"
        />
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 140,
    color: 'black'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    margin: 16,
    paddingHorizontal: 16,
    color: 'black'

  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: 'black'

  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    color: 'black'

  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    color: 'black'

  },
  messageContent: {
    flex: 1,
    color: 'black'

  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'

  },
  message: {
    fontSize: 14,
    color: 'black'

  },
  time: {
    fontSize: 12,
    color: 'black'

  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

export default MessagesScreen;