import React, { useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
import SecondStackSwiperWapper from '../Bottom Tab/WapperScreens/SecondStackSwiperWapper';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; // Import useSelector

const { width: screenWidth } = Dimensions.get('window');

const SecondStack = ({ data = [] }) => {
  const navigation = useNavigation();
  const isDay = useSelector(state => state.theme.isDay); // Get isDay from Redux store
  const BOX_WIDTH = screenWidth * 0.45;
  const BOX_HEIGHT = BOX_WIDTH * 0.4;
  const itemWidth = BOX_WIDTH + 40;
  const itemCount = data.length;

  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.x;
    const totalContentWidth = itemWidth * itemCount;

    if (position >= totalContentWidth - itemWidth) {
      scrollViewRef.current.scrollTo({ x: 0, animated: false });
    }
  };

  const handleItemClick = (label1) => {
    if (label1 === 'Beverages') {
      navigation.navigate('Beverages'); 
    }
    if (label1 === 'Food') {
      navigation.navigate('Food'); 
    }
    if (label1 === 'Pizza') {
      navigation.navigate('Pizza'); 
    }
    if (label1 === 'Drink') {
      navigation.navigate('Drinks'); 
    }
    if (label1 === 'Lunch') {
      navigation.navigate('Lunch'); 
    }
  };

  return (
    <SecondStackSwiperWapper style={[styles.wrapper, { backgroundColor: isDay ? 'white' : '#333' }]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        contentContainerStyle={styles.scrollViewContent}
        onScroll={handleScroll}
        pagingEnabled
      >
        {data.concat(data).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.itemWrapper,
              {
                width: BOX_WIDTH,
                height: BOX_HEIGHT,
                borderColor: isDay ? '#d3d3d3' : 'white', 
                backgroundColor: isDay ? 'white' : 'green',
                shadowColor: isDay ? 'black' : 'white',

                
              },
            ]}
            onPress={() => handleItemClick(item.label1)}
          >
            <View style={[styles.halfBox, styles.greenHalf, { backgroundColor: isDay ? 'white' : 'black' }]}>
              <Icon name={item.icon} size={30} color={isDay ? 'green' : 'lightgreen'} style={styles.icon} />
            </View>
            <View style={[styles.halfBox, styles.yellowHalf, { backgroundColor: isDay ? 'white' : 'black' }]}>
              <Text style={[styles.label1, { color: isDay ? 'black' : 'white' }]}>{item.label1}</Text>
              <Text style={[styles.label2, { color: isDay ? 'green' : 'lightgreen' }]}>{item.label2}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SecondStackSwiperWapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    paddingHorizontal: 0,
  },
  itemWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8, 
  },
  halfBox: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenHalf: {
    flex: 0.3,
  },
  yellowHalf: {
    flex: 0.7,
  },
  icon: {
    color: 'green',
  },
  label1: {
    fontSize: 16,
  },
  label2: {
    fontSize: 16,
  },
});

export default SecondStack;
