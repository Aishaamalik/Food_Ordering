
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp')},
    ],
  }));

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
  },
});
