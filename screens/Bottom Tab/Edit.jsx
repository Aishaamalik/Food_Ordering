import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux';

const EditProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { fullName, mobileNumber, email, location, profileImage, updateProfile } = route.params;

  const isDay = useSelector(state => state.theme.isDay);

  const [name, setName] = useState(fullName);
  const [number, setNumber] = useState(mobileNumber);
  const [userEmail, setUserEmail] = useState(email);
  const [userLocation, setUserLocation] = useState(location);
  const [profileImg, setProfileImg] = useState(profileImage || require('../Assets/Profile/profile.jpg')); // Default profile image

  const handleUpdateProfile = () => {
    updateProfile({
      fullName: name,
      mobileNumber: number,
      email: userEmail,
      location: userLocation,
      profileImage: profileImg,
    });

    navigation.goBack();
  };

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setProfileImg({ uri: response.assets[0].uri });
        }
      }
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#fff' : '#333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#f8f8f8' : '#555' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#fff'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#333' : '#fff' }]}>Edit Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileSection}>
        <Image source={profileImg} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon} onPress={handleSelectImage}>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputSection}>
        <Text style={[styles.label, { color: isDay ? '#555' : '#ccc' }]}>Full Name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDay ? '#E8F0FE' : '#444' , color : isDay ? 'black' : 'white' }]}
          value={name}
          onChangeText={setName}
        />

        <Text style={[styles.label, { color: isDay ? '#555' : '#ccc'  }]}>Mobile Number</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDay ? '#E8F0FE' : '#444' ,  color : isDay ? 'black' : 'white' }]}
          value={number}
          onChangeText={setNumber}
          keyboardType="phone-pad"
        />

        <Text style={[styles.label, { color: isDay ? '#555' : '#ccc' }]}>Email</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDay ? '#E8F0FE' : '#444' ,  color : isDay ? 'black' : 'white'}]}
          value={userEmail}
          onChangeText={setUserEmail}
          keyboardType="email-address"
        />

        <Text style={[styles.label, { color: isDay ? '#555' : '#ccc' }]}>Location</Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDay ? '#E8F0FE' : '#444', height: 60 ,  color : isDay ? 'black' : 'white'}]}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 6,
    marginRight: 115,
    marginTop: 70,
  },
  inputSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
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
