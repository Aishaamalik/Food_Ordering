import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomStarRating from '../other/CustomStarRating';

const WriteReviewScreen = ({ navigation }) => {
  const [rating, setRating] = useState(4);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Write Review</Text>
      </View>

      <View style={styles.productInfo}>
        <Image source={require('../Assets/productspics/creamymocha.jpeg')} style={styles.productImage} />
        <View>
          <Text style={styles.productTitle}>Brewed Cappuccino Latte With Creamy Milk</Text>
          <Text style={styles.productCategory}>Beverages</Text>
        </View>
      </View>

      <View style={styles.reviewSection}>
        <Text style={styles.reviewPrompt}>What do you think?</Text>
        <Text style={styles.reviewDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
        <Text style={styles.ratingValue}>{rating.toFixed(1)}</Text>
        <CustomStarRating rating={rating} setRating={setRating} />
      </View>

      <TextInput
        style={styles.reviewInput}
        placeholder="Write your review here"
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
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
    color: '#000',
  },
  moreButton: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#E0F2F1',
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
    color: '#000',
  },
  productCategory: {
    fontSize: 14,
    color: '#757575',
  },
  reviewSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  reviewPrompt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  reviewDescription: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginVertical: 10,
  },
  ratingValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  reviewInput: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    textAlignVertical: 'top',
    color: 'black',
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