import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
//screen
import SplashScreen from './Stack/SplashScreen'
import HomeScreen from './Stack/HomeScreen'
import OrderScreen from './Bottom Tab/OrderScreen'
import CheckkOutScreen from './checkout/CheckkOutScreen'
import DeliveryAddress from './checkout/DeliveryAddress'
import Payment from './checkout/Payment'
import ChangeAddress from './OtherScreens/ChangeAddress'
import TrackOrder from './OtherScreens/TrackOrder'

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
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})