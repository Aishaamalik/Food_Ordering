import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TrackingOrdersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tracking Orders</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.greenScreen}>
        <Text style={styles.greenScreenText}>Green Screen</Text>
      </View>

      <View style={styles.estimatedTimeContainer}>
        <Text style={styles.estimatedTimeText}>Estimated Time</Text>
        <Text style={styles.timeText}>5-10 min</Text>
      </View>

      <View style={styles.deliveryInfoContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://example.com/profile.jpg' }} // Replace with actual image URL
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Mr. Shandy</Text>
            <Text style={styles.profileId}>ID 2445556</Text>
          </View>
          <View style={styles.contactIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="phone" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="message" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.addressContainer}>
          <View style={styles.addressItem}>
            <Icon name="location-on" size={24} color="#4CAF50" />
            <View style={styles.addressTextContainer}>
              <Text style={styles.addressTitle}>Sweet Corner St.</Text>
              <Text style={styles.addressSubtitle}>Franklin Avenue 2263</Text>
            </View>
          </View>
          <View style={styles.addressItem}>
            <Icon name="store" size={24} color="#4CAF50" />
            <View style={styles.addressTextContainer}>
              <Text style={styles.addressTitle}>Ombe Coffee Shop</Text>
              <Text style={styles.addressSubtitle}>Sent at 08:23 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  greenScreen: {
    height: 200,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenScreenText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  estimatedTimeContainer: {
    position: 'absolute',
    top: 150,
    left: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  estimatedTimeText: {
    fontSize: 12,
    color: '#888',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryInfoContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileId: {
    fontSize: 14,
    color: '#888',
  },
  contactIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
  },
  addressContainer: {
    marginTop: 10,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressTextContainer: {
    marginLeft: 10,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressSubtitle: {
    fontSize: 14,
    color: '#888',
  },
});

export default TrackingOrdersScreen;
