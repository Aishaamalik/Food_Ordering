import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';

const { width, height } = Dimensions.get('window');

const sizeOptions = ['Small', 'Medium', 'Large', 'Extra Large'];

const MyOrderScreen = () => {
  const [imageHeight, setImageHeight] = useState(height / 2);
  const [size, setSize] = useState('Small');
  const [quantity, setQuantity] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const [basePrice, setBasePrice] = useState(5.8); // Base price for one item
  const [currentPrice, setCurrentPrice] = useState(basePrice); // Current price based on quantity

  const handleSliderValueChange = (value) => {
    setSliderValue(value);
    const newHeight = Math.max(height / 4, Math.min(height / 2 + value * (height / 4), height / 2));
    setImageHeight(newHeight);
    const sizeIndex = Math.round(value * (sizeOptions.length - 1));
    setSize(sizeOptions[sizeIndex]);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setCurrentPrice(basePrice * (quantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setCurrentPrice(basePrice * (quantity - 1));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image
            source={require('../Assets/whitechocolatemocha.png')} // Adjust the path as needed
            style={[styles.image, { height: imageHeight }]}
          />
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.5</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Ice Chocolate Coffee</Text>
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
                <Text style={styles.originalPrice}>$8.0</Text>
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

            <TouchableOpacity style={styles.placeOrderButton}>
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
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
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
