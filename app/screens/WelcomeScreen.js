import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

const option_account_type = [
    {pk:1 , value:"Student"},
    {pk:2 , value:"Authority"},
]

function WelcomeScreen({navigation}) {
    return(
        <View style={[stylesD.formContainer,{marginTop:  Constants.statusBarHeight}]}>
            <View style={[stylesD.logoContainer,{backgroundColor:"red"}]}>
                <Text>App Image</Text>
            </View>

            <View style={{height:80,width:"100%"}}/>
            <TouchableOpacity style={stylesD.WelcomeViewButton} onPress={() => navigation.navigate("Login")}>
                <View style={{width:"100%" ,height:"100%",backgroundColor:"lightgreen", justifyContent:"center",alignItems:"center",borderRadius:20}}>
                    <Text> Login </Text> 
                </View>
            </TouchableOpacity>
            <View style={{height:20,width:"100%"}}/>
            <TouchableOpacity style={stylesD.WelcomeViewButton} onPress={() => navigation.navigate("Register")}>
                <View style={{width:"100%" ,height:"100%",backgroundColor:"red", justifyContent:"center",alignItems:"center",borderRadius:20}}>
                    <Text> Register </Text> 
                </View>
            </TouchableOpacity>
            <View style={{height:20,width:"100%"}}/>
            
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}><Text style={{textAlign:"center"}}> forgot password</Text></TouchableOpacity> 
        </View>
    );
}

export default WelcomeScreen;