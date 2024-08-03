import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'; // Import Feathers icon library

// Screens
import CartScreen from './CartScreen';
import LikedScreen from './LikedScreen';
import Main from './Main';
import ProfileScreen from './ProfileScreen';
import DrawerSceneWrapper from '../Drawer/DrawerSceneWrapper';

// Bottom Tab Navigator
const Bottom = createBottomTabNavigator();

const ButtomNavigator = ({children}) => {
  return (
    <DrawerSceneWrapper>
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Main':
              iconName = 'home'; 
              break;
            case 'Liked':
              iconName = 'heart'; 
              break;
            case 'Cart':
              iconName = 'shopping-cart'; 
              break;
            case 'Profile':
              iconName = 'user'; 
              break;
            default:
              iconName = 'help-circle'; 
              break;
          }

          return (
            <View style={[
              styles.iconContainer,
              { backgroundColor: focused ? 'green' : 'transparent' }
            ]}>
              <Icon 
                name={iconName} 
                size={size} 
                color={focused ? 'white' : color} 
              />
            </View>
          );
        },
        tabBarActiveTintColor: 'green', 
        tabBarInactiveTintColor: 'gray', 
      })}
    >
      <Bottom.Screen
        name='Main'
        component={Main}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name='Liked'
        component={LikedScreen}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name='Cart'
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Bottom.Navigator>
    </DrawerSceneWrapper>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
