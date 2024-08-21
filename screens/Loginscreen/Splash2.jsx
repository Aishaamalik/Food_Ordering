import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const Splash2 = ({ navigation }) => {
  const isDay = useSelector(state => state.theme.isDay);

  const animatedValues = {
    O: new Animated.Value(0),
    M: new Animated.Value(0),
    B: new Animated.Value(0),
    E: new Animated.Value(0),
    icon: new Animated.Value(0),
  };

  useEffect(() => {
    const animations = Object.keys(animatedValues).map(key => {
      return Animated.timing(animatedValues[key], {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      });
    });

    Animated.stagger(200, animations).start(() => {
      setTimeout(() => {
        navigation.replace('Onboarding1');
      }, 1500);
    });
  }, [navigation]);

  const getTransformStyle = (animatedValue, xStart, yStart) => ({
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [xStart, 0],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [yStart, 0],
        }),
      },
    ],
  });

  return (
    <View style={[styles.container, { backgroundColor: isDay ? '#e6ffe6' : '#003300' }]}>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.O, -300, -300)]}>
        <Text style={[styles.letter, { color: isDay ? '#006600' : '#00ff00' }]}>O</Text>
      </Animated.View>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.M, 300, -300)]}>
        <Text style={[styles.letter, { color: isDay ? '#006600' : '#00ff00' }]}>M</Text>
      </Animated.View>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.B, -300, 300)]}>
        <Text style={[styles.letter, { color: isDay ? '#006600' : '#00ff00' }]}>B</Text>
      </Animated.View>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.E, 300, 300)]}>
        <Text style={[styles.letter, { color: isDay ? '#006600' : '#00ff00' }]}>E</Text>
      </Animated.View>
      <Animated.View style={[styles.iconContainer, {
        opacity: animatedValues.icon,
        transform: [{ scale: animatedValues.icon }],
        backgroundColor: isDay ? '#e6ffe6' : '#003300',
      }]}>
        <Icon name="coffee" size={50} color={isDay ? '#004d00' : '#00ff00'} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  letterContainer: {
    marginHorizontal: 10,
  },
  letter: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: 30,
    marginLeft: -25,
  },
});

export default Splash2;
