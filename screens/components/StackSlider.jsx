import React from 'react';
import { View, PanResponder, Animated, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const SLIDER_HEIGHT = height / 2;

const StackSlider = ({ onSliderValueChange }) => {
  const pan = React.useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      pan.setValue(gestureState.dy);
    },
    onPanResponderRelease: (event, gestureState) => {
      Animated.spring(pan, {
        toValue: 0,
        useNativeDriver: false,
      }).start(() => onSliderValueChange(gestureState.dy));
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.slider, { transform: [{ translateY: pan }] }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: SLIDER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '80%',
    height: 50,
    backgroundColor: '#E0A75E',
    borderRadius: 25,
  },
});

export default StackSlider;
