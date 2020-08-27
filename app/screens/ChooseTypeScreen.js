import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"
import CardList from "../components/CardList"

const type =[
    {pk:1,title:"BreakFast",subtitle:" 8:00-10:00 am, 25/08/2020"},
    {pk:2,title:"Lunch",subtitle:" 12:30-14:30 pm, 25/08/2020 "},
    {pk:3,title:"Dinner",subtitle:" 7:30-9:30 pm, 24/08/2020"},
]

function ChooseTypeScreen({route ,navigation }) {
    const hall_number = route.params.hall_number; 

    const handlePress =(type,date ) =>{
        // console.log(date);
        let len = date.length
        let date2 = date.substr(len-11,len)
        console.log(date2);
        navigation.navigate("ItemsScreen" , {hall_number:hall_number , type:type , date:date2});
    }

    return(
        <View style={[stylesD.topBarMargin,{height:"100%" ,width:"100%"}]}>
            <View style={{ alignItems: 'center',justifyContent:"center",height:60, borderWidth:2,borderColor:"black",borderRadius:20}}>
                <Text style={{fontSize:20}}> Mess Hall {hall_number}</Text>
            </View>
            <CardList
                data={type}
                height={Dimensions.get('window').height-150}
                marginTop={0}
                subtitleExists={1}
                handlePress={handlePress}
            />
            <View style={{width:"100%",height:50,flexDirection:"row",marginTop:10}}>
                <View style={{width:"44%" , marginLeft:"4%",marginRight:"2%",height:"100%",backgroundColor:"red"}}>
                    <TouchableOpacity style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("TokenScreen", {hall_number:hall_number})}>
                        <Text style={{color:"white",fontWeight:"bold"}}> {"Today's Tokens"}</Text>  
                    </TouchableOpacity>
                </View>
                <View style={{width:"44%" ,  marginLeft:"2%",marginRight:"4%",height:"100%",backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("MyOrderScreen", {hall_number:hall_number, amount:12321})}>
                        <Text style={{color:"white",fontWeight:"bold"}}> {"Past Orders"} </Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    );
}

export default ChooseTypeScreen;