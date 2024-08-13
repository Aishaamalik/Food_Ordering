import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const likedItems = [
  {
    id: '1',
    name: 'Sample Item',
    variant: 'Sample Variant',
    price: 50,
    image: require('../Assets/productspics/cofee.jpeg'),
  },
];

const LikedScreen = () => {
  const totalItems = likedItems.length;
  const totalPrice = likedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Wishlist</Text>
        <Icon name="search" size={24} color="#000" />
        
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>{totalItems} Items</Text>
        <Text style={styles.summaryText}>•</Text>
        <Text style={styles.summaryText}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>

      <FlatList
        data={likedItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemVariant}>Variant: {item.variant}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="favorite" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  summaryText: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 5,
  },
  listContent: {
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemVariant: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LikedScreen;
