import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import StackSwiperWapper from '../Bottom Tab/StackSwiperWapper';

const CustomImageCaroselSquare = ({ data = [] }) => {
  const FIXED_SIZE = 120;
  const scrollViewRef = useRef(null);
  const scrollInterval = 1000; 
  const itemWidth = FIXED_SIZE + 20;

  useEffect(() => {
    if (data.length === 0) return;

    const scrollToNext = () => {
      const scrollView = scrollViewRef.current;
      if (scrollView) {
        const currentOffset = scrollView.contentOffset ? scrollView.contentOffset.x : 0;
        const nextOffset = (currentOffset + itemWidth) % (itemWidth * data.length);
        scrollView.scrollTo({
          x: nextOffset,
          animated: true,
        });
      } else {
        console.warn('ScrollView reference is not defined');
      }
    };

    const intervalId = setInterval(scrollToNext, scrollInterval);

    return () => clearInterval(intervalId);
  }, [data.length, itemWidth]);

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
      >
        {data.map((item, index) => (
          <View key={index} style={[styles.imageWrapper, { width: FIXED_SIZE, height: FIXED_SIZE }]}>
            <View style={styles.overlay} />
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </StackSwiperWapper>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
  },
  imageWrapper: {
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    backgroundColor: '#00674b',
    opacity: 0.9,
  },
});

export default CustomImageCaroselSquare;
