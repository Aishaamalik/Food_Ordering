import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
//screen
import SplashScreen from './Stack/SplashScreen'
import HomeScreen from './Stack/HomeScreen'
import OrderScreen from './Bottom Tab/OrderScreen'
import Main from './Bottom Tab/Main'
import CheckkOutScreen from './Bottom Tab/CheckkOutScreen'

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
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})