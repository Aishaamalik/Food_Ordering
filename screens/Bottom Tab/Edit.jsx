import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute, useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { fullName, mobileNumber, email, location, updateProfile } = route.params;

  const [name, setName] = useState(fullName);
  const [number, setNumber] = useState(mobileNumber);
  const [userEmail, setUserEmail] = useState(email);
  const [userLocation, setUserLocation] = useState(location);

  const handleUpdateProfile = () => {
    updateProfile({
      fullName: name,
      mobileNumber: number,
      email: userEmail,
      location: userLocation,
    });
    
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileSection}>
        <Image source={require('../Assets/Profile/profile.jpg')} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userEmail}
          onChangeText={setUserEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Location</Text>
        <TextInput
          style={[styles.input, { height: 60 }]}
          value={userLocation}
          onChangeText={setUserLocation}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
        <Text style={styles.updateButtonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
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
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 90,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 6,
    marginRight: 120,
  },
  inputSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E8F0FE',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
