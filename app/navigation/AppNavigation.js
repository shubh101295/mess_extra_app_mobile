import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert,FlatList} from 'react-native';
import {createStackNavigator}  from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import ChooseTypeScreen from "../screens/ChooseTypeScreen"


import colors from "../config/colors"
import stylesD from "../config/stylesD"

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="TypeScreen" component={ChooseTypeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
)

function AppNavigation() {

    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}

export default AppNavigation;