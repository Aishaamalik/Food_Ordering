import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather'; // Import Feather icons

// Import other screens...
import MainHome from './1MainHome';
import MyOrderScreen from './2MyOrderScreen';
import TransactionScreen from './3TransactionScreen';
import PagesScreen from './4PagesScreen';
import ComponentScreen from './5ComponentScreen';
import ProductScreen from './6ProductScreen';
import ChatListScreen from './7ChatListScreen';
import ProfileScreen from './8ProfileScreen';
import LogoutScreen from './9LogoutScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerPosition="right" // Position the drawer on the right side
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home'; // Feather icon name for Home
              break;
            case 'My Order':
              iconName = 'shopping-cart'; // Feather icon name for Shopping Cart
              break;
            case 'Transactions':
              iconName = 'credit-card'; // Feather icon name for Transactions (no direct match for 'receipt')
              break;
            case 'Pages':
              iconName = 'file-text'; // Feather icon name for Pages (no direct match for 'pages')
              break;
            case 'Components':
              iconName = 'package'; // Feather icon name for Components (no direct match for 'widgets')
              break;
            case 'Products':
              iconName = 'box'; // Feather icon name for Products (no direct match for 'store')
              break;
            case 'Chat List':
              iconName = 'message-square'; // Feather icon name for Chat List (no direct match for 'chat')
              break;
            case 'Profile':
              iconName = 'user'; // Feather icon name for Profile
              break;
            case 'Logout':
              iconName = 'log-out'; // Feather icon name for Logout
              break;
            default:
              iconName = 'help-circle'; // Default icon
              break;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        drawerActiveTintColor: 'green', // Color for active icon
        drawerInactiveTintColor: 'gray', // Color for inactive icon
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
