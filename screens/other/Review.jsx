import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomStarRating from '../other/CustomStarRating';
import { useSelector } from 'react-redux';

const WriteReviewScreen = ({ navigation }) => {
  const [rating, setRating] = useState(4);
  const isDay = useSelector(state => state.theme.isDay);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDay ? '#FFFFFF' : '#333' }]}>
      <View style={[styles.header, { backgroundColor: isDay ? '#F5F5F5' : '#444' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={isDay ? '#000' : '#FFF'} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: isDay ? '#000' : '#FFF' }]}>Write Review</Text>
      </View>

      <View style={styles.productInfo}>
        <Image source={require('../Assets/productspics/creamymocha.jpeg')} style={styles.productImage} />
        <View>
          <Text style={[styles.productTitle, { color: isDay ? '#000' : '#FFF' }]}>Brewed Cappuccino Latte With Creamy Milk</Text>
          <Text style={[styles.productCategory, { color: isDay ? '#757575' : '#BBB' }]}>Beverages</Text>
        </View>
      </View>

      <View style={styles.reviewSection}>
        <Text style={[styles.reviewPrompt, { color: isDay ? '#000' : '#FFF' }]}>What do you think?</Text>
        <Text style={[styles.reviewDescription, { color: isDay ? '#757575' : '#BBB' }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
        <Text style={[styles.ratingValue, { color: isDay ? '#000' : '#FFF' }]}>{rating.toFixed(1)}</Text>
        <CustomStarRating rating={rating} setRating={setRating} />
      </View>

      <TextInput
        style={[styles.reviewInput, { borderColor: isDay ? '#ddd' : '#555', color: isDay ? 'black' : 'white' }]}
        placeholder="Write your review here"
        placeholderTextColor={isDay ? '#888' : '#BBB'}
        multiline
      />

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SEND</Text>
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
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#E0F2F1',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 20,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productCategory: {
    fontSize: 14,
  },
  reviewSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  reviewPrompt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  ratingValue: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  reviewInput: {
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WriteReviewScreen;
