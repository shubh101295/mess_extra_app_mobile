import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,ScrollView} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import Constants from "expo-constants"
import {Formik } from 'formik' 
import * as Yup from 'yup'

import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"
import MyAppPicker from "../components/MyAppPicker"

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().min(2).label("Name"),
    roll_number: Yup.number().integer().positive().required().label("Roll Number"),
    department: Yup.string().required().label("Department"),
    year: Yup.string().required().label("Year"),
    program: Yup.string().required().label("Program"),
    blood_group: Yup.string().required().label("Blood Group"),
})


const optionsData =[
    {   pk:1,  value:"Val1" },
    {   pk:2,  value:"Val2" },
    {   pk:3,  value:"Val3" },
    {   pk:4,  value:"Val4" },
    {   pk:5,  value:"Val5" },
    {   pk:6,  value:"Val6" },
    {   pk:7,  value:"Val7" },
    {   pk:8,  value:"Val8" },
    {   pk:9,  value:"Val9" },
    {   pk:10,  value:"Val10" },
    {   pk:11,  value:"Val11" },
    {   pk:12,  value:"Val12" },
    {   pk:13,  value:"Val13" },
    {   pk:14,  value:"Val14" },
    {   pk:15,  value:"Val15" },
    {   pk:16,  value:"Val16" },
    {   pk:17,  value:"Val17" },
    {   pk:18,  value:"Val18" },
    {   pk:19,  value:"Val19" },
    {   pk:20,  value:"Val20" },
    {   pk:21,  value:"Val21" },
    {   pk:22,  value:"Val22" },
    {   pk:23,  value:"Val23" },
    {   pk:24,  value:"Val24" },
    {   pk:25,  value:"Val25" },
    {   pk:26,  value:"Val26" },
    {   pk:27,  value:"Val27" },
    {   pk:28,  value:"Val28" },
    {   pk:29,  value:"Val29" },
    {   pk:30,  value:"Val30" },
]

const years = [
    {pk:1 , value:"1st Year"},
    {pk:2 , value:"2nd Year"},
    {pk:3 , value:"3rd Year"},
    {pk:4 , value:"4th Year"},
    {pk:5 , value:"5th Year"},
    
]

function RegisterForm({navigation}) {

    return(
        <ScrollView>
        <View style={[stylesD.formContainer,{marginTop:  Constants.statusBarHeight}]}>
            <View style={[stylesD.logoContainer,{backgroundColor:"red"}]}>
                <Text>App Image</Text>
            </View>
            <Formik
                initialValues ={{ email: '' , name : '' , roll_number:'', year:'',program:'', department:'' ,blood_group:''}}
                onSubmit={values => {
                    console.log(values);
                    navigation.navigate("Activate",{email:values.email});
                }}
                validationSchema = {validationSchema}
            >
                {({handleChange , handleSubmit , errors , setFieldTouched , touched,values}) => (
                    <View style={stylesD.formContainer}>
                        <Text style={stylesD.heading}>name</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("name")}
                            placeholder="name"
                            onBlur={() => setFieldTouched("name")}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.name && <Text style={{ color :"red" }}> {errors.name}</Text>}
                        </View>
                        <Text style={stylesD.heading}>Email ( IITK email )</Text>
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
                        <Text style={stylesD.heading}>Roll Number</Text>
                        <View style={stylesD.inputContainer}>
                        <TextInput
                            onChangeText = {handleChange("roll_number")}
                            placeholder="Roll Number"
                            onBlur={() => setFieldTouched("roll_number")}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        </View>
                        <View style={stylesD.formError}>
                            {touched.roll_number && <Text style={{ color :"red" }}> {errors.roll_number}</Text>}
                        </View>
                        <Text style={stylesD.heading}>Department</Text>
                        <TouchableOpacity onPress={()=>setFieldTouched('department')}>
                        <MyAppPicker value={values.department} items={optionsData} setValue={handleChange('department')} />
                        </TouchableOpacity>
                        <View style={stylesD.formError}>
                            {touched.department && <Text style={{ color :"red" }}> {errors.department}</Text>}
                        </View>
                        
                        <Text style={stylesD.heading}>Year</Text>
                        <TouchableOpacity onPress={()=>setFieldTouched('year')}>
                        <MyAppPicker value={values.year} items={years} setValue={handleChange('year')} />
                        </TouchableOpacity>
                        <View style={stylesD.formError}>
                            {touched.year && <Text style={{ color :"red" }}> {errors.year}</Text>}
                        </View>
                        
                        <Text style={stylesD.heading}>Program</Text>
                        <TouchableOpacity onPress={()=>setFieldTouched('program')}>
                        <MyAppPicker value={values.program} items={optionsData} setValue={handleChange('program')} />
                        </TouchableOpacity>
                        <View style={stylesD.formError}>
                            {touched.program && <Text style={{ color :"red" }}> {errors.program}</Text>}
                        </View>
                        
                        <Text style={stylesD.heading}>Blood Group</Text>
                        <TouchableOpacity onPress={()=>setFieldTouched('blood_group')}>
                            <MyAppPicker value={values.blood_group} items={optionsData} setValue={handleChange('blood_group')} />
                        </TouchableOpacity>
                        <View style={stylesD.formError}>
                            {touched.blood_group && <Text style={{ color :"red" }}> {errors.blood_group}</Text>}
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
        </ScrollView>
    );
}

export default RegisterForm;