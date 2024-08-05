import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductScreen = () => {
  return (
    <ScrollView style={styles.mainContent}>
      <View style={styles.header}>
        <Text style={styles.featuredTitle}>Featured Beverages</Text>
        <Text style={styles.moreText}>More</Text>
      </View>
      <ProductList />
    </ScrollView>
  );
};

const ProductList = () => {
  const products = [
    {
      title: "Hot Creamy Cappuccino Latte Ombe",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/cofee.jpeg'),
    },
    {
      title: "Creamy Mocha Ome Coffee",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/cofee.jpeg'),
    },
    {
      title: "Arabica Latte Ombe Coffee",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/cofee.jpeg'),
    },
    {
      title: "Original Hot Coffee",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/cofee.jpeg'),
    },
  ];

  return (
    <View>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </View>
  );
};

const ProductCard = ({ product }) => {
  return (
    <View style={styles.productCard}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
      <View style={styles.productPoints}>
        <Text style={styles.pointsText}>{product.points}</Text>
      </View>
      <View style={styles.productRating}>
        <Icon name="star" size={16} color="#fff" />
        <Text style={styles.ratingText}>{product.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreText: {
    fontSize: 14,
    color: 'green',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
  },
  productPoints: {
    marginRight: 8,
  },
  pointsText: {
    fontSize: 14,
    color: 'green',
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
});

export default ProductScreen;