import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons

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
  bg: '#D0F0C0',
  active: 'green',
  inactive: 'gray', 
  transparent: 'transparent', 
};

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerType="slide" 
      drawerStyle={{
        backgroundColor: Colors.bg, 
        width: 250, 
      }}
      screenOptions={({ route }) => ({
        headerShown: true,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive, 
        overlayColor: Colors.transparent, 
        drawerIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home'; 
              break;
            case 'My Order':
              iconName = 'shopping-cart';
              break;
            case 'Transactions':
              iconName = 'credit-card'; 
              break;
            case 'Pages':
              iconName = 'file-text'; 
              break;
            case 'Components':
              iconName = 'package'; 
              break;
            case 'Products':
              iconName = 'box'; 
              break;
            case 'Chat List':
              iconName = 'message-square'; 
              break;
            case 'Profile':
              iconName = 'user'; 
              break;
            case 'Logout':
              iconName = 'log-out'; 
              break;
            default:
              iconName = 'help-circle'; 
              break;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={MainHome}
      />
      <Drawer.Screen
        name="My Order"
        component={MyOrderScreen}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionScreen}
      />
      <Drawer.Screen
        name="Pages"
        component={PagesScreen}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentScreen}
      />
      <Drawer.Screen
        name="Products"
        component={ProductScreen}
      />
      <Drawer.Screen
        name="Chat List"
        component={ChatListScreen}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
