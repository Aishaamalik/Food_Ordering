import React, { useEffect, useRef, useCallback } from 'react';
import { StyleSheet, ScrollView, Text, Animated } from 'react-native';
import StackSwiperWapper from '../Bottom Tab/StackSwiperWapper';

const CustomImageCarouselSquare = ({ data = [] }) => {
  const FIXED_SIZE = 110;
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
    <StackSwiperWapper>
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
            outputRange: [0.9, 1.0, 0.9],
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
              <Animated.View
                style={[
                  styles.overlay,
                  { height: overlayHeight, opacity: overlayOpacity },
                ]}
              />
              <Text style={styles.itemText}>{item.label}</Text>
            </Animated.View>
          );
        })}
      </ScrollView>
    </StackSwiperWapper>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: 'row',
  },
  itemWrapper: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#006741',
    zIndex: 0,
  },
});

export default CustomImageCarouselSquare;
