import React, { useEffect, useRef, useCallback } from 'react';
import { StyleSheet, ScrollView, Text, Animated, Image, View, Dimensions } from 'react-native';
import StackSwiperWapper from '../Bottom Tab/StackSwiperWapper';

const { width: screenWidth } = Dimensions.get('window');

const CustomImageCaroselSquare = ({ data = [] }) => {
  const FIXED_SIZE = screenWidth * 0.3; 
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollInterval = 2000;
  const itemWidth = FIXED_SIZE + 20; 
  const itemCount = data.length;

  const scrollToNext = useCallback(() => {
    if (scrollViewRef.current) {
      let newPosition = scrollX._value + itemWidth;
      if (newPosition >= itemWidth * itemCount) {
        newPosition = 0;
      }
      scrollViewRef.current.scrollTo({
        x: newPosition,
        animated: true,
      });
    }
  }, [scrollX, itemWidth, itemCount]);

  useEffect(() => {
    if (itemCount === 0) return;

    const intervalId = setInterval(scrollToNext, scrollInterval);

    return () => clearInterval(intervalId);
  }, [itemCount, scrollToNext, scrollInterval]);

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.x;
    const totalContentWidth = itemWidth * itemCount;

    if (position >= totalContentWidth) {
      scrollViewRef.current.scrollTo({ x: 0, animated: false });
    }

    scrollX.setValue(position);
  };

  return (
    <StackSwiperWapper style={styles.wrapper}>
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
        {data.concat(data).map((item, index) => {
          const inputRange = [
            (index - 1) * itemWidth,
            index * itemWidth,
            (index + 1) * itemWidth,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.0, 0.8],
            extrapolate: 'clamp',
          });

          const isMainItem = scrollX.interpolate({
            inputRange: [
              (index - 1) * itemWidth,
              index * itemWidth,
              (index + 1) * itemWidth,
            ],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          const overlayHeight = isMainItem.interpolate({
            inputRange: [0, 1],
            outputRange: ['50%', '100%'],
            extrapolate: 'clamp',
          });

          const overlayOpacity = isMainItem.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.itemWrapper,
                {
                  width: FIXED_SIZE,
                  height: FIXED_SIZE,
                  transform: [{ scale }],
                },
              ]}
            >
              <Image
                source={item.image}
                style={styles.itemImage}
                resizeMode="cover"
              />
              <Animated.View
                style={[
                  styles.overlay,
                  { height: overlayHeight, opacity: overlayOpacity },
                ]}
              />
              <View style={styles.itemContent}>
                <Text style={styles.itemLabel1}>{item.label1}</Text>
                <Text style={styles.itemLabel2}>{item.label2}</Text>
              </View>
            </Animated.View>
          );
        })}
      </ScrollView>
    </StackSwiperWapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '70%',
    height: '70%', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  scrollViewContent: {
    flexDirection: 'row',
  },
  itemWrapper: {
    marginHorizontal: 9,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  itemImage: {
    width: '40%', 
    height: '40%', 
    position: 'absolute',
    zIndex: 2,
  },
  itemContent: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  itemLabel1: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  itemLabel2: {
    fontSize: 14,
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2E8B57',
    zIndex: 1,
  },
});

export default CustomImageCaroselSquare;
