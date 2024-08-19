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
import Edit from './Bottom Tab/Edit'
import Notifications from './MainScreens/Notifications'
import Search from './MainScreens/Search'
import SignUp from './Loginscreen/SignUp'
import SignIn from './Loginscreen/SignIn'
import Onboarding from './Loginscreen/Onboarding'
import ForgetPassword from './Loginscreen/ForgetPassword'
import CodeOPT from './Loginscreen/CodeOPT'
import Chat from './Drawer/Other Screens/Chat'
import FQA from './other/FQA'
import Review from './other/Review'
import Rewards from './other/Rewards'
import Error from './other/Error'
import CustomStarRating from './other/CustomStarRating'
import Splash2 from './Loginscreen/Splash2'
import Onboarding1 from './Loginscreen/Onboarding1'
import Main from './Bottom Tab/Main'
import App from '../App'
import MainHome from './Drawer/1MainHome'
import CustomSwitch from './Drawer/CustomSwitch'

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
        <Stack.Screen
        name='Edit'
        component={Edit}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Notifications'
        component={Notifications}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Search'
        component={Search}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Onboarding'
        component={Onboarding}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Forget Password'
        component={ForgetPassword}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='CodeOPT'
        component={CodeOPT}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Chat'
        component={Chat}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='FQA'
        component={FQA}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Review'
        component={Review}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Rewards'
        component={Rewards}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Error'
        component={Error}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Rating'
        component={CustomStarRating}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Splash2'
        component={Splash2}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Onboarding1'
        component={Onboarding1}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Main Home'
        component={Main}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='H'
        component={SplashScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Custom Switch'
        component={CustomSwitch}
        options={{headerShown: false}}
        />
        

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})