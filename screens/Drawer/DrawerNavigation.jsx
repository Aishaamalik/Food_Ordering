import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { View, Text, StyleSheet } from 'react-native';

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
  active: '#00674b', 
  inactive: '#ccc', 
  transparent: 'transparent',
  background: 'white',
  header: 'black',
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'right', 
    alignItems: 'center',
  },
  drawerIconContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.active,
    textAlign: 'center',
    marginLeft: 10, 
  },
  drawerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.header,
    textAlign: 'center',
    marginVertical: 10,  // Adjust vertical margin as needed
  },
  mainmenucomtainer: {
    textAlign: 'left',
  },
});


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <View style={styles.drawerIconContainer}>
          <Fontisto name="coffeescript" size={30} color="#00693E" />
          <Text style={styles.drawerTitle}>Ombe</Text>
        </View>
      </View>
      <View>
      <Text style={styles.drawerText}>Main Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};


function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: true,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.background,
          width: '60%',
        },
        sceneContainerStyle: {
          backgroundColor: Colors.background,
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainHome}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="home" size={15} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Order"
        component={MyOrderScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="box" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="credit-card" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pages"
        component={PagesScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="file" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="settings" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="package" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat List"
        component={ChatListScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="message-circle" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="user" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="log-out" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
