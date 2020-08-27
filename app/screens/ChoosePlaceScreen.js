import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"
import CardList from "../components/CardList"

const venue =[
    {pk:1,title:"Mess Hall 1"},
    {pk:2,title:"Mess Hall 2"},
    {pk:3,title:"Mess Hall 3"},
    {pk:4,title:"Mess Hall 4"},
    {pk:5,title:"Mess Hall 5"},
    {pk:6,title:"Mess Hall 6"},
    {pk:7,title:"Mess Hall 7"},
    {pk:8,title:"Mess Hall 8"},

]

function ChoosePlaceScreen() {

    return(
        <View style={[stylesD.topBarMargin,{height:"100%" ,width:"100%"}]}>
            <View style={{ alignItems: 'center',justifyContent:"center",height:60, borderWidth:2,borderColor:"black",borderRadius:20}}>
                <Text style={{fontSize:20}}> Choose Venue</Text>
            </View>
            <CardList
                data={venue}
                height={Dimensions.get('window').height-60}
                marginTop={0}
                subtitleExists={0}
            />
        </View>
    );
}

export default ChoosePlaceScreen;