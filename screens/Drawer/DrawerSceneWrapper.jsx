import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
        },
        {
          rotateZ: `${interpolate(progress.value, [0, 1], [0, -3], 'clamp')}deg`,
        },
        {
          translateY: interpolate(progress.value, [0, 1], [0, 40], 'clamp'), // Adds downward animation
        },
      ],
      borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
      shadowOpacity: interpolate(progress.value, [0, 1], [0, 0.8], 'clamp'),
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    shadowColor: '#000', 
    shadowOffset: { width: -16, height: 16 }, 
    shadowRadius: 32, 
    elevation: 20, 
    shadowOpacity: 0.8,
  },
});
