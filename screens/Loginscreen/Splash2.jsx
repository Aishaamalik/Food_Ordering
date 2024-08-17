import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Splash2 = ({ navigation }) => {
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
        navigation.replace('Onboarding');
      }, 1500);
    });
  }, []);

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
    <View style={styles.container}>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.O, -300, -300)]}>
        <Text style={styles.letter}>O</Text>
      </Animated.View>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.M, 300, -300)]}>
        <Text style={styles.letter}>M</Text>
      </Animated.View>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.B, -300, 300)]}>
        <Text style={styles.letter}>B</Text>
      </Animated.View>
      <Animated.View style={[styles.letterContainer, getTransformStyle(animatedValues.E, 300, 300)]}>
        <Text style={styles.letter}>E</Text>
      </Animated.View>
      <Animated.View style={[styles.iconContainer, {
        opacity: animatedValues.icon,
        transform: [{ scale: animatedValues.icon }]
      }]}>
        <Icon name="coffee" size={50} color="#004d00" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
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
    color: '#006600', 
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
