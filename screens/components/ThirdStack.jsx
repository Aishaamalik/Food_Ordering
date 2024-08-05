import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ThirdStackSwiperWapper from '../Bottom Tab/ThirdStackSwiperWapper';

const ThirdStack = () => {
  return (
    <ThirdStackSwiperWapper>
      <ScrollView style={styles.mainContent}>
        <ProductList />
      </ScrollView>
    </ThirdStackSwiperWapper>
  );
};

const ProductList = () => {
  const products = [
    {
      title: "Hot Creamy Cappuccino Latte Ombe",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/creamymocha.jpeg'),
    },
    {
      title: "Creamy Mocha Ome Coffee",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/HotCreamyMocha.jpeg'),
    },
    {
      title: "Arabica Latte Ombe Coffee",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/Arabicalatte.jpeg'),
    },
    {
      title: "Original Hot Coffee",
      price: "12.6",
      points: "50 Pts",
      rating: "3.8",
      image: require('../Assets/productspics/blackcoffee.jpeg'),
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
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <View style={styles.priceAndPoints}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.pointsText}>{product.points}</Text>
        </View>
        <View style={styles.productRating}>
          <Icon name="star" size={16} color="#fff" />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: '30%',
    height: 150,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 20,
    fontWeight:'400',
    marginBottom: 30,
    color:'black',

  },
  priceAndPoints: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 20,
    color: 'green',
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  ratingText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 4,
  },
});

export default ThirdStack;
