import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { View, Text, StyleSheet } from 'react-native';
import CustomSwitch from '../Drawer/CustomSwitch.jsx';

// Import other screens
import MainHome from './1MainHome';
import MyOrderScreen from './2MyOrderScreen';
import PagesScreen from './4PagesScreen';
import ComponentScreen from './5ComponentScreen';
import ProductScreen from './6ProductScreen';
import ChatListScreen from './7ChatListScreen';
import Profile from '../Bottom Tab/ProfileScreen.jsx';
import Payment from '../Payment Screens/Payment.jsx';
import Splash2 from '../Loginscreen/Splash2.jsx';

// Define Colors object with default values
const Colors = {
  bg: '#009688',
  active: '#00674b', 
  inactive: '#ccc', 
  transparent: 'transparent',
  background: 'white',
  header: 'black',
};

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const isDay = useSelector(state => state.theme.isDay);

  // Determine theme-based colors
  const drawerBackgroundColor = isDay ? '#fff' : '#333';
  const drawerTextColor = isDay ? '#000' : '#fff';
  const drawerActiveColor = isDay ? '#00674b' : '#2E8B57';
  const drawerInactiveColor = isDay ? '#ccc' : '#888';

  return (
    <DrawerContentScrollView {...props} style={{ flex: 1, backgroundColor: drawerBackgroundColor }}>
      <View style={styles.drawerHeader}>
        <View style={styles.drawerIconContainer}>
          <Fontisto name="coffeescript" size={30} color={drawerActiveColor} />
          <Text style={[styles.drawerTitle, { color: drawerActiveColor }]}>Ombe</Text>
        </View>
      </View>
      <View>
        <Text style={[styles.drawerText, { color: drawerTextColor }]}>Main Menu</Text>
      </View>
      <DrawerItemList {...props} 
        activeTintColor={drawerActiveColor}
        inactiveTintColor={drawerInactiveColor}
      />
      <View style={styles.themeView}>
        <CustomSwitch /> 
      </View>
      <View style={styles.viewbuttom}>
        <Text style={[styles.drawerText2, { color: drawerTextColor }]}>Ombe Coffee Shop</Text>
        <Text style={[styles.drawerText3, { color: drawerTextColor }]}>App Version 1.1</Text>
      </View>
    </DrawerContentScrollView>
  );
};

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => {
        const isDay = useSelector(state => state.theme.isDay);
        const drawerActiveTintColor = isDay ? Colors.active : '#2E8B57';
        const drawerInactiveTintColor = isDay ? Colors.inactive : '#888';
        return {
          drawerType: 'slide',
          headerShown: false,
          drawerActiveBackgroundColor: Colors.transparent,
          drawerInactiveBackgroundColor: Colors.transparent,
          drawerActiveTintColor: drawerActiveTintColor,
          drawerInactiveTintColor: drawerInactiveTintColor,
          drawerHideStatusBarOnOpen: true,
          overlayColor: Colors.transparent,
          drawerStyle: {
            backgroundColor: isDay ? '#fff' : '#333',
            width: '60%',
          },
          sceneContainerStyle: {
            backgroundColor: isDay ? '#fff' : '#333',
          }
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
        component={Payment}
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
        component={Profile}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="user" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Splash2}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon name="log-out" size={24} color={focused ? Colors.active : Colors.inactive} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
    textAlign: 'center',
    marginLeft: 10, 
  },
  drawerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,  
  },
  drawerText2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,  
  },
  drawerText3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
  },
  themeView: {
    flex: 1,
    width: 100,  
    height: 62, 
  },
  viewbuttom: {
    flex: 1,
    padding:37,
  },
});

export default DrawerNavigation;
