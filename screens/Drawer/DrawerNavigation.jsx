import React from 'react';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
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
  bg: 'green', 
  active: 'green',
  inactive: 'gray', 
  transparent: 'transparent', 
  background: 'white', 
};

const Drawer = createDrawerNavigator();

function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, 
        drawerType: 'slide',
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive, 
        overlayColor: Colors.transparent, 
        sceneContainerStyle: {
          backgroundColor: Colors.background,
        },
        drawerStyle: {
          backgroundColor: Colors.background
        },
      }}
    >
      <Drawer.Screen name="Home" component={MainHome} />
      <Drawer.Screen name="My Order" component={MyOrderScreen} />
      <Drawer.Screen name="Transactions" component={TransactionScreen} />
      <Drawer.Screen name="Pages" component={PagesScreen} />
      <Drawer.Screen name="Components" component={ComponentScreen} />
      <Drawer.Screen name="Products" component={ProductScreen} />
      <Drawer.Screen name="Chat List" component={ChatListScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
