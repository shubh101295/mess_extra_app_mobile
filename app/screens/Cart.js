import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,Switch,View,TextInput ,TouchableOpacity,Dimensions,Alert} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"
import ItemCardList from "../components/ItemCardList"


function Cart({ route ,navigation}) {

    hall_number = route.params.hall_number
    type =route.params.type
    date = route.params.date
    amount2 = route.params.amount
    extras2 = route.params.extras
    
    const [extras , setExtras] = useState(extras2) 
    const [amount , setAmount] = useState(amount2);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    handleIncrease = (id) => {
        let oldArray  = [...extras];
        let len = oldArray.length; 
        let x = amount;    
        for(let i=0;i<len;i++)
        {
            if(oldArray[i].pk === id)
            {
                if(oldArray[i].item_left>oldArray[i].item_taken)
                {
                    oldArray[i].item_taken += 1;
                    x+= oldArray[i].cost;
                }
                else
                {
                    Alert.alert(
                        "",
                        "Only " + oldArray[i].item_left + " " + oldArray[i].name+ " Available",
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
                break;
            }
        } 
        setExtras(oldArray);
        setAmount(x);
    }

    handleDecrease = (id) => {
        let oldArray  = [...extras];
        let len = oldArray.length; 
        let newArray = []

        let x = amount;
        for(let i=0;i<len;i++)
        {
            if(oldArray[i].pk === id)
            {
                if(oldArray[i].item_taken>1)
                {
                    oldArray[i].item_taken -= 1;
                    newArray.push(oldArray[i]);

                }
                x-=oldArray[i].cost;
            }
            else 
            {
                newArray.push(oldArray[i]);
            }
        } 
        setExtras(newArray);
        setAmount(x);
    }

    onBooking =  () =>{
        navigation.navigate("PlaceOrderPasswordConfirm" , {hall_number:hall_number, type:type ,date:date , amount:amount , extras_taken:extras, partial_order:isEnabled})
    }
    
    return(
        <View style={[stylesD.topBarMargin,{height:"100%" ,width:"100%"}]}>
            <View style={{ alignItems: 'center',height:60, borderWidth:2,borderColor:"black",borderRadius:20}}>
                <Text style={{fontSize:20}}> Mess Hall {hall_number}</Text>
                <Text style={{fontSize:15}}> {type} , {date}</Text>
            </View>
            <View style={{ alignItems: 'center',height:20}}>
                <Text style={{fontSize:15}}> Confirm Order</Text> 
            </View>
            <ItemCardList
                hcall_number={hall_number}
                type={type}
                height={Dimensions.get('window').height-200}
                marginTop={0}
                extras={extras}
                handleIncrease ={handleIncrease}
                handleDecrease = {handleDecrease}
            />
            <View style={{ height:80 , flexDirection :"row",padding:10}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20}}> Total Cost </Text> 
                    <Text style={{fontSize:20}}> Allow Partial Bookings </Text>
                </View>
                <View style={{paddingRight:10}}>
                    <Text style={{fontWeight:"bold",textAlign:"right",fontSize:20}}> Rs. {amount} </Text> 
                    <Switch
                        trackColor={{ false: "#767577", true: "#33cc33" }}
                        thumbColor={isEnabled ? "#1f7a1f" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <TouchableOpacity style={{height:40,width:"100%"}} onPress={()=>onBooking()}>
                <View style={{height:"100%", width:"100%",alignItems: 'center',justifyContent:"center", borderWidth:2,borderColor:"black",backgroundColor:"#ffcc00"}}>
                    <Text> Confirm Order </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default Cart;