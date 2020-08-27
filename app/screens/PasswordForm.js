import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity} from 'react-native';
import Constants from "expo-constants"
import {Formik } from 'formik' 
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    password1: Yup.string().required().min(4).label("Password"),
    password2: Yup.string().required().oneOf([Yup.ref('password1'), null], "Password do not match!").label("It")
})


import colors from "../config/colors"
import stylesD from "../config/stylesD"
import MyButton from "../components/MyButton"


function PasswordForm({navigation}) {
    return(
        <View style={[stylesD.formContainer,{marginTop:  Constants.statusBarHeight}]}>
            <View style={[stylesD.logoContainer,{backgroundColor:"red"}]}>
                <Text>App Image</Text>
            </View>
            <Text> Login Password -used while logging in </Text>
            <Formik
                initialValues ={{ password2: '' , password1 : ''}}
                onSubmit={values => {
                    console.log(values);
                    navigation.navigate("Password2")
                }}
                validationSchema = {validationSchema}
            >
                {({handleChange , handleSubmit , errors , setFieldTouched , touched}) => (
                    <View style={stylesD.formContainer}>
                        <Text style={stylesD.heading}>Password</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("password1")}
                            placeholder="Password"
                            onBlur={() => setFieldTouched("password1")}
                            autoCapitalize="none"
                            autoCorrect={false} 
                            secureTextEntry
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.password1 && <Text style={{ color :"red" }}> {errors.password1}</Text>}
                        </View>
                        <Text style={stylesD.heading}>Confirm Password</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("password2")}
                            placeholder="Confirm password"
                            onBlur={() => setFieldTouched("password2")}
                            autoCapitalize="none"
                            autoCorrect={false} 
                            secureTextEntry
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.password2 && <Text style={{ color :"red" }}> {errors.password2}</Text>}
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

export default PasswordForm;