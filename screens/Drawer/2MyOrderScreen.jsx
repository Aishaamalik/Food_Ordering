import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const { width, height } = Dimensions.get('window');

const sizeOptions = ['Small', 'Medium', 'Large', 'Extra Large'];

const MyOrderScreen = ({ route }) => {
  const navigation = useNavigation(); // Initialize useNavigation
  const { product } = route.params; // Get the product data from navigation params

  const [imageHeight, setImageHeight] = useState(height / 2);
  const [size, setSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const [basePrice, setBasePrice] = useState(parseFloat(product.price)); // Use the product price
  const [currentPrice, setCurrentPrice] = useState(basePrice); // Current price based on quantity

  useEffect(() => {
    setCurrentPrice(basePrice * quantity); // Update the current price when quantity changes
  }, [quantity]);

  const handleSliderValueChange = (value) => {
    setSliderValue(value);
    const newHeight = Math.max(height / 4, Math.min(height / 2 + value * (height / 4), height / 2));
    setImageHeight(newHeight);
    const sizeIndex = Math.round(value * (sizeOptions.length - 1));
    setSize(sizeOptions[sizeIndex]);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlaceOrder = () => {
    // Navigate to Cart screen and pass the necessary information
    navigation.navigate('Cart', { product, quantity, size, currentPrice });
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image
            source={product.image} 
            style={[styles.image, { height: imageHeight }]}
          />
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”
            </Text>

            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              step={0.4}
              value={sliderValue}
              onValueChange={handleSliderValueChange}
              minimumTrackTintColor="#3b5998"
              maximumTrackTintColor="#ccc"
            />

            <View style={styles.sizeLabelsContainer}>
              {sizeOptions.map((option, index) => (
                <Text
                  key={index}
                  style={[
                    styles.sizeLabel,
                    size === option && styles.selectedSizeLabel,
                  ]}
                >
                  {option}
                </Text>
              ))}
            </View>

            <View style={styles.priceQuantityContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.currentPrice}>${currentPrice.toFixed(2)}</Text>
                <Text style={styles.originalPrice}>${product.price}</Text>
              </View>

              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                  <Icon name="minus" size={16} color="gray" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                  <Icon name="plus" size={16} color="gray" />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.note}>
              *)Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Text>

            <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
              <Text style={styles.placeOrderText}>PLACE ORDER ${(currentPrice * quantity).toFixed(2)}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  upperContainer: {
    flex: 0.3,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 0.7,
    backgroundColor: 'white',
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: width - 40,
    resizeMode: 'contain',
  },
  ratingContainer: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: 'orange',
    borderRadius: 25,
    padding: 8,
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFF',
    fontWeight: 'bold',
    padding: 2,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  slider: {
    width: width - 32,
    height: 40,
    marginVertical: 16,
  },
  sizeLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  sizeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    width: (width - 32) / sizeOptions.length,
    textAlign: 'center',
  },
  selectedSizeLabel: {
    color: 'black',
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    padding: 8,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  note: {
    fontSize: 14,
    color: '#666',
    marginVertical: 16,
  },
  placeOrderButton: {
    backgroundColor: 'green',
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 16,
  },
  placeOrderText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default MyOrderScreen;
