import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Themes/ThemeAction';

const CustomSwitch = () => {
  const isDay = useSelector(state => state.theme.isDay);
  const dispatch = useDispatch();
  const translateX = new Animated.Value(isDay ? 0 : 60);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isDay ? 0 : 60,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [isDay]);

  const handleToggleSwitch = () => {
    dispatch(toggleTheme());
  };

  return (
    <View style={[styles.container, { backgroundColor: isDay ? 'white' : 'black' }]}>
      <TouchableOpacity onPress={handleToggleSwitch} style={styles.iconWrapper}>
        <View style={styles.iconBackgroundWrapper}>
          <Animated.View
            style={[
              styles.iconBackground,
              {
                transform: [{ translateX }],
                backgroundColor: isDay ? 'green' : 'green',
              },
            ]}
          />
          <Icon name="day-sunny" size={30} color={isDay ? 'black' : 'gray'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleSwitch} style={styles.iconWrapper}>
        <View style={styles.iconBackgroundWrapper}>
          <Icon name="night-clear" size={30} color={!isDay ? 'black' : 'gray'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: 'white',
    borderWidth: 3,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 12,
    borderRadius: 50,
    width: 140,
    height: 60,
    marginLeft: 20,
    marginTop: 30,
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackgroundWrapper: {
    position: 'relative',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    zIndex: -1,
  },
});
