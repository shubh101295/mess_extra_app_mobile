import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Alert,Dimensions} from 'react-native';
import Constants from "expo-constants"
import {Formik } from 'formik' 
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    password: Yup.string().required().min(4).label("Password"),
})


import colors from "../config/colors"
import stylesD from "../config/stylesD"
import MyButton from "../components/MyButton"

function PlaceOrderPasswordConfirm({route,navigation}) {
    console.log(route.params);

    onSubmission = (password) =>{
        if (password ===  "shubh")
        {
            navigation.navigate("Receipt" ,
                {
                    purchasedData:route.params.extras_taken,
                    hall_number: route.params.hall_number,
                    order_number:"oijhfrgbkdwmnc21342mm", 
                    type :route.params.type,
                    date: route.params.date,
                    height:Dimensions.get('window').height,
                    amount:route.params.amount, 
                    username :"shubh",
                    roll_number:190828
                }
            );
        }
        else
        {
            Alert.alert(
                "Wrong Password",
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
                <Text>Mess App Logo</Text>
            </View>
            <Text> Confirm Password to place order </Text>
            <Formik
                initialValues ={{ password: '' }}
                onSubmit={values => {
                	console.log(values);
                    onSubmission(values.password)
                }}
                validationSchema = {validationSchema}
            >
                {({handleChange , handleSubmit , errors , setFieldTouched , touched}) => (
                    <View style={stylesD.formContainer}>
                        <Text style={stylesD.heading}>Password</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("password")}
                            placeholder="Password"
                            onBlur={() => setFieldTouched("password")}
                            autoCapitalize="none"
                            autoCorrect={false} 
                            secureTextEntry
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.password && <Text style={{ color :"red" }}> {errors.password}</Text>}
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

export default PlaceOrderPasswordConfirm;