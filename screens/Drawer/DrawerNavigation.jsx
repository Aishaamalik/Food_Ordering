import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import { View, TouchableOpacity } from 'react-native';

// Import other screens
import MainHome from './1MainHome';
import MyOrderScreen from './2MyOrderScreen';
import TransactionScreen from './3TransactionScreen';
import PagesScreen from './4PagesScreen';
import ComponentScreen from './5ComponentScreen';
import ProductScreen from './6ProductScreen';
import ChatListScreen from './7ChatListScreen';
import ProfileScreen from './8ProfileScreen';
import LogoutScreen from './9LogoutScreen';

// Define Colors object
const Colors = {
  bg: '#009688',
  active: '#00674b', // Green color for active state
  inactive: '#ccc',  // Gray color for inactive state
  transparent: 'transparent',
  background: 'white',
};

const Drawer = createDrawerNavigator();

function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.background,
          width: '50%',
        },
        sceneContainerStyle: {
          backgroundColor: Colors.background,
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainHome}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="home" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="My Order"
        component={MyOrderScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="box" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="credit-card" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Pages"
        component={PagesScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="file" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="settings" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Products"
        component={ProductScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="package" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Chat List"
        component={ChatListScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="message-circle" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="user" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={({ route }) => ({
          drawerIcon: ({ focused }) => (
            <Icon name="log-out" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        })}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
