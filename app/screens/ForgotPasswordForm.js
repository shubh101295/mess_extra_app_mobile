import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity} from 'react-native';
import Constants from "expo-constants"
import {Formik } from 'formik' 
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
})


import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"


function ForgotPasswordForm({navigation}) {
    return(
        <View style={[stylesD.formContainer,{marginTop:  Constants.statusBarHeight}]}>
            <View style={[stylesD.logoContainer,{backgroundColor:"red"}]}>
                <Text>App Image</Text>
            </View>
            <Formik
                initialValues ={{ email: '' }}
                onSubmit={values => {
                    console.log(values);
                    navigation.navigate("Activate",{email:values.email});
                }}
                validationSchema = {validationSchema}
            >
                {({handleChange , handleSubmit , errors , setFieldTouched , touched}) => (
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
                        <TouchableOpacity onPress={handleSubmit} style={stylesD.formButton}>
                            <View style={[stylesD.inputContainer,{backgroundColor:"dodgerblue",flex:1,justifyContent:"center"}]}>
                                <Text> Send verification code </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}          
            </Formik>
        </View>
    );
}

export default ForgotPasswordForm;