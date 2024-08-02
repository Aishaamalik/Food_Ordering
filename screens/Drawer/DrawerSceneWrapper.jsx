
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(progress.value, [0, 1], [0, 100]), // Move to the right
      },
      {
        translateY: interpolate(progress.value, [0, 1], [0, 100]), // Move down
      },
    ],
    borderRadius: 20,
    overflow: 'hidden',
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
    // Optional: Adjust padding or margins if needed to ensure the component doesn't touch the screen edges
  },
});
