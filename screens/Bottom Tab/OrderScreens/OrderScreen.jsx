import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; 

const { width, height } = Dimensions.get('window');
const sizeOptions = ['Small', 'Medium', 'Large', 'Extra Large'];

const OrderScreen = ({ route }) => {
  const navigation = useNavigation();
  const { product, quantity, size, currentPrice } = route.params;

  const isDay = useSelector(state => state.theme.isDay);
  const [imageHeight, setImageHeight] = useState(height / 2);
  const [sizeLabel, setSizeLabel] = useState(size);
  const [quantityValue, setQuantityValue] = useState(quantity);
  const [sliderValue, setSliderValue] = useState(0);
  const [basePrice, setBasePrice] = useState(parseFloat(product.price));
  const [updatedPrice, setUpdatedPrice] = useState(basePrice);

  useEffect(() => {
    setUpdatedPrice(basePrice * quantityValue);
  }, [quantityValue]);

  const handleSliderValueChange = (value) => {
    setSliderValue(value);
    const newHeight = Math.max(height / 4, Math.min(height / 2 + value * (height / 4), height / 2));
    setImageHeight(newHeight);
    const sizeIndex = Math.round(value * (sizeOptions.length - 1));
    setSizeLabel(sizeOptions[sizeIndex]);
  };

  const increaseQuantity = () => {
    setQuantityValue(quantityValue + 1);
  };

  const decreaseQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  };

  const handlePlaceOrder = () => {
    navigation.navigate('Cart', { product, quantity: quantityValue, size: sizeLabel, currentPrice: updatedPrice });
  };

  const handleBookmarkPress = () => {
    navigation.navigate('Liked', {
      newItem: {
        id: product.id,
        name: product.name,
        price: updatedPrice,
        image: product.image,
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={[styles.contentContainer, { backgroundColor: isDay ? '#F5F5F5' : '#333' }]}>
      <View style={[styles.container, { backgroundColor: isDay ? '#F5F5F5' : '#222' }]}>
        <View style={[styles.upperContainer, { backgroundColor: isDay ? 'green' : '#444' }]}>
          <TouchableOpacity style={styles.iconLeft} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color={isDay ? '#FFF' : '#AAA'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconRight} onPress={handleBookmarkPress}>
            <Icon name="bookmark" size={24} color={isDay ? '#FFF' : '#AAA'} />
          </TouchableOpacity>
          <Image source={product.image} style={[styles.image, { height: imageHeight }]} />
        </View>
        <View style={[styles.lowerContainer, { backgroundColor: isDay ? '#FFF' : '#444' }]}>
          <View style={styles.ratingContainer}>
            <Text style={[styles.ratingText, { color: isDay ? '#FFF' : '#AAA' }]}>{product.rating}</Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.title, { color: isDay ? 'black' : 'white' }]}>{product.name}</Text>
            <Text style={[styles.description, { color: isDay ? 'gray' : '#CCC' }]}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore”
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              step={0.4}
              value={sliderValue}
              onValueChange={handleSliderValueChange}
              minimumTrackTintColor={isDay ? '#3b5998' : '#1e90ff'}
              maximumTrackTintColor={isDay ? '#ccc' : '#555'}
            />
            <View style={styles.sizeLabelsContainer}>
              {sizeOptions.map((option, index) => (
                <Text key={index} style={[styles.sizeLabel, sizeLabel === option && styles.selectedSizeLabel, { color: isDay ? 'black' : 'white' }]}>
                  {option}
                </Text>
              ))}
            </View>
            <View style={styles.priceQuantityContainer}>
              <View style={styles.priceContainer}>
                <Text style={[styles.currentPrice, { color: isDay ? 'green' : '#0f0' }]}>${updatedPrice.toFixed(2)}</Text>
                <Text style={[styles.originalPrice, { color: isDay ? 'gray' : '#999' }]}>${product.price}</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                  <Icon name="minus" size={16} color={isDay ? 'gray' : '#AAA'} />
                </TouchableOpacity>
                <Text style={[styles.quantityText, { color: isDay ? 'black' : 'black' }]}>{quantityValue}</Text>
                <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                  <Icon name="plus" size={16} color={isDay ? 'gray' : '#AAA'} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[styles.note, { color: isDay ? 'gray' : '#BBB' }]}>
              *)Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Text>
            <TouchableOpacity style={[styles.placeOrderButton, { backgroundColor: isDay ? 'green' : '#333' }]} onPress={handlePlaceOrder}>
              <Text style={[styles.placeOrderText, { color: isDay ? 'white' : '#FFF' }]}>PLACE ORDER ${(updatedPrice * quantityValue).toFixed(2)}</Text>
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
  },
  upperContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  iconRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  lowerContainer: {
    flex: 0.7,
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
  },
  originalPrice: {
    fontSize: 16,
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
    marginVertical: 16,
  },
  placeOrderButton: {
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  placeOrderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
