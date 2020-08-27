import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert,FlatList} from 'react-native';
import {createStackNavigator}  from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

import LoginForm from "../screens/LoginForm"
import ActivationForm from "../screens/ActivationForm"
import ForgotPasswordForm from "../screens/ForgotPasswordForm"
import PasswordForm from "../screens/PasswordForm"
import Password2Form from "../screens/Password2Form"
import RegisterForm from "../screens/RegisterForm"
import WelcomeScreen from "../screens/WelcomeScreen"
import ChooseTypeScreen from "../screens/ChooseTypeScreen"
import ItemsScreen from "../screens/ItemsScreen"
import Cart from "../screens/Cart"
import PlaceOrderPasswordConfirm from "../screens/PlaceOrderPasswordConfirm"
import TokenScreen from "../screens/TokenScreen"
import TodayPurchasedTokenScreen from "../screens/TodayPurchasedTokenScreen"
import MyOrderScreen from "../screens/MyOrderScreen"

import Receipt from "../components/Receipt"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterForm} options={{headerShown:false}}/>
        <Stack.Screen name="Activate" component={ActivationForm} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginForm} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordForm} options={{headerShown:false}}/>
        <Stack.Screen name="Password" component={PasswordForm} options={{headerShown:false}}/>
        <Stack.Screen name="Password2" component={Password2Form} options={{headerShown:false}}/>
        <Stack.Screen name="TypeScreen" component={ChooseTypeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ItemsScreen" component={ItemsScreen} options={{headerShown:false}}/>        
        <Stack.Screen name="PlaceOrderPasswordConfirm" component={PlaceOrderPasswordConfirm} options={{headerShown:false}}/>        
        <Stack.Screen name="Receipt" component={Receipt} options={{headerShown:false}}/>        
        <Stack.Screen name="TokenScreen" component={TokenScreen} options={{headerShown:false}}/>        
        <Stack.Screen name="TodayPurchasedTokenScreen" component={TodayPurchasedTokenScreen} options={{headerShown:false}}/>        
        <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} options={{headerShown:false}}/>        
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>        
    </Stack.Navigator>
)

function AuthNavigation() {

    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}

export default AuthNavigation;