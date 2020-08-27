import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert,FlatList} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"


const orders2 =[
    {pk:1, hall_number:12 , type:"Breakfast" , date:"21/08/2020", amount:210, order_number:"gfgb34tefrgg"},
    {pk:2, hall_number:12 , type:"Dinner" , date:"21/08/2020", amount:210, order_number:"gfgb34tsdfg"},
    {pk:3, hall_number:12 , type:"Breakfast" , date:"22/08/2020", amount:210, order_number:"gfgb34tsdfgg"},
    {pk:4, hall_number:12 , type:"Lunch" , date:"22/08/2020", amount:210, order_number:"gfgb34tgefg"},
    {pk:5, hall_number:12 , type:"Lunch" , date:"23/08/2020", amount:210, order_number:"gfgb34tgweg"},
    {pk:6, hall_number:12 , type:"Dinner" , date:"23/08/2020", amount:210, order_number:"gfgb34tweg"},
]

function MyOrderScreen({route,navigation}) {

    const hall_number = route.params.hall_number
    const total_amount = route.params.amount 
    const [orders , setOrders ] = useState(orders2) 

   
    return(
        <View style={[stylesD.topBarMargin,{height:"100%" ,width:"100%"}]}>
            <View style={{ alignItems: 'center',height:40, borderWidth:2,borderColor:"black",borderRadius:20}}>
                <Text style={{fontSize:20}}> Mess Hall {hall_number}</Text>
            </View>
            <Text style={{fontSize:20}}> Total Amount - Rs.{total_amount}</Text>    
            <FlatList
                data={orders}
                keyExtractor={item => item.pk.toString()}
                renderItem={({item}) =>
                    <View style={[stylesD.cardContainer,stylesD.cardTouchableContainer,{flexDirection:"row"}]}>
                        <View style={{height:"100%" ,flex:1,justifyContent:"center"}}>
                            <Text > Mess Hall {item.hall_number} </Text>
                            <Text > {item.type} , {item.date} </Text>
                            <Text> Amount - Rs.{item.amount} </Text>
                            <Text> Order NUmber - {item.order_number} </Text>
                        </View>
                        <View style={{height:"100%",width:100,justifyContent:"center"}}>
                            <TouchableOpacity style={{width:"100%",height:"100%"}} 
                                onPress={()=>navigation.navigate("Receipt",
                                    {
                                        hall_number:hall_number,
                                        order_number:item.order_number,
                                        type:item.type,
                                        date:item.date,
                                        username:"shubh",
                                        roll_number:190828
                                    }
                                )}
                            >
                                <View style={{width:"100%" ,height:50,backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
                                    <Text style={{color:"white",fontWeight:"bold"}}> Receipt </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />

        </View>
    );
}

export default MyOrderScreen;