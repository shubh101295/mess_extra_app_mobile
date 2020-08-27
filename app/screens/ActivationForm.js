import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity , Alert} from 'react-native';
import Constants from "expo-constants"
import {Formik } from 'formik' 
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    code: Yup.string().required().label("Code").length(8),
})


import colors from "../config/colors"
import stylesD from "../config/stylesD"


function LoginForm({route,navigation}) {
    const email = route.params.email;

    OnSubmission = (value) => {
        console.log(value)
        value.code = parseInt(value.code);
        if (value.code ===  12345678)
        {
            navigation.navigate("Password");
        }
        else
        {
            Alert.alert(
                "Activation Code is wrong",
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
                <Text> App Image</Text>
            </View>
            <Text> An verification code has been sent to {email}</Text>
            <View style={[{height:50}]}/>
            
            <Formik
                initialValues ={{ code: '' }}
                onSubmit={values => {
                    console.log(values);
                    OnSubmission(values)
                }}
                validationSchema = {validationSchema}
            >
                {({handleChange , handleSubmit , errors , setFieldTouched , touched}) => (
                    <View style={stylesD.formContainer}>
                        <Text style={stylesD.heading}>code</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("code")}
                            placeholder="code"
                            onBlur={() => setFieldTouched("code")}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.code && <Text style={{ color :"red" }}> {errors.code}</Text>}
                        </View>
                        <TouchableOpacity onPress={handleSubmit} style={stylesD.formButton}>
                            <View style={[stylesD.inputContainer,{backgroundColor:"dodgerblue",flex:1,justifyContent:"center"}]}>
                                <Text> Activate </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}          
            </Formik>
        </View>
    );
}

export default LoginForm;