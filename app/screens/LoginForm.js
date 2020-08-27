import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Alert} from 'react-native';
import Constants from "expo-constants"
import {Formik } from 'formik' 
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    account_type: Yup.string().required().min(4).label("Account Type"),
})


import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"
import MyAppPicker from "../components/MyAppPicker"

const option_account_type = [
    {pk:1 , value:"Student"},
    {pk:2 , value:"Authority"},
]

function LoginForm({navigation}) {
    
    onSubmission = (values) => {
        if (values.password ===  "shubh")
        {
            navigation.navigate("TypeScreen" , {hall_number:12});
        }
        else
        {
            Alert.alert(
                "Wrong email/Password",
                "",
                [
                    {
                      text: "Cancel",
                      style: "cancel"
                    },
                    { text: "OK" }
                ],
                { cancelable: false }
            );
        }
    }

    return(
        <View style={[stylesD.formContainer,{marginTop:  Constants.statusBarHeight}]}>
            <View style={[stylesD.logoContainer,{backgroundColor:"red"}]}>
                <Text>App Image</Text>
            </View>
            <Formik
                initialValues ={{ email: '' , password : '', account_type:''}}
                onSubmit={values => {
                    // console.log(values);
                    onSubmission(values);
                }}
                validationSchema = {validationSchema}
            >
                {({handleChange , handleSubmit , errors , setFieldTouched , touched,values}) => (
                    <View style={stylesD.formContainer}>
                        <Text style={stylesD.heading}>email</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("email")}
                            placeholder="email"
                            onBlur={() => setFieldTouched("email")}
                            keyboardType="email-address"                        
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.email && <Text style={{ color :"red" }}> {errors.email}</Text>}
                        </View>
                        <Text style={stylesD.heading}>password</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("password")}
                            placeholder="password"
                            onBlur={() => setFieldTouched("password")}
                            autoCapitalize="none"
                            autoCorrect={false} 
                            secureTextEntry
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.password && <Text style={{ color :"red" }}> {errors.password}</Text>}
                        </View>

                        <Text style={stylesD.heading}>Account Type</Text>
                        <TouchableOpacity onPress={()=>setFieldTouched('account_type')}>
                            <MyAppPicker value={values.account_type} items={option_account_type} setValue={handleChange('account_type')} />
                        </TouchableOpacity>
                        <View style={stylesD.formError}>
                            {touched.account_type && <Text style={{ color :"red" }}> {errors.account_type}</Text>}
                        </View>
                        
                        <TouchableOpacity onPress={handleSubmit} style={stylesD.formButton}>
                            <View style={[stylesD.inputContainer,{backgroundColor:"dodgerblue",flex:1,justifyContent:"center"}]}>
                                <Text> Login </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}          
            </Formik>
        </View>
    );
}

export default LoginForm;