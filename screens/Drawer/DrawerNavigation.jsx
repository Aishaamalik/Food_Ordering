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
  bg: '#D0F0C0',
  active: 'green',
  inactive: 'gray', 
  transparent: 'transparent', 
};

const Drawer = createDrawerNavigator();

function DrawerNavigation({ navigation }) {
  const CustomHeader = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Icon name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: Colors.bg, 
        width: 250, 
      }}
      screenOptions={{
        headerShown: false, // Disable the default header
        drawerType: 'slide',
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive, 
        overlayColor: Colors.transparent, 
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainHome}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="My Order"
        component={MyOrderScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Pages"
        component={PagesScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Chat List"
        component={ChatListScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ header: () => <CustomHeader /> }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ header: () => <CustomHeader /> }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
