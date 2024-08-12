import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
//screen
import SplashScreen from './Stack/SplashScreen'
import HomeScreen from './Stack/HomeScreen'
import OrderScreen from './Bottom Tab/OrderScreens/OrderScreen'
import CheckkOutScreen from './Bottom Tab/checkout/CheckkOutScreen'
import DeliveryAddress from './Bottom Tab/checkout/DeliveryAddress'
import Payment from './Payment Screens/Payment'
import ChangeAddress from './Bottom Tab/checkout/ChangeAddress'
import TrackOrder from './Drawer/Other Screens/TrackOrder'
import AddCard from './Payment Screens/AddCard'
import NetBanking from './Payment Screens/NetBanking'
import Beverages from './Productsscreens/Beverages'
import Drinks from './Productsscreens/Drinks'
import Food from './Productsscreens/Food'
import Lunch from './Productsscreens/Lunch'
import Pizza from './Productsscreens/Pizza'

//stack
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='OrderScreen'
        component={OrderScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Checkout'
        component={CheckkOutScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Delivery Address'
        component={DeliveryAddress}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Payment'
        component={Payment}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Change Address'
        component={ChangeAddress}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Track Order'
        component={TrackOrder}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Add Card'
        component={AddCard}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Net Banking'
        component={NetBanking}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Beverages'
        component={Beverages}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Drinks'
        component={Drinks}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Food'
        component={Food}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Lunch'
        component={Lunch}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Pizza'
        component={Pizza}
        options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})