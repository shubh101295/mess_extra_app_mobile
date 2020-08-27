import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

import MyButton from "../components/MyButton"
import ItemCardList from "../components/ItemCardList"

const extras2 =[
    {pk:1, name:'Item1 ', item_left:15, item_taken:0, cost:9},
    {pk:2, name:'Item2 ', item_left:7, item_taken:0 , cost:1},
    {pk:3, name:'Item3 ', item_left:2, item_taken:0 , cost:2},
    {pk:4, name:'Item1 ', item_left:5, item_taken:0 , cost:5},
    {pk:5, name:'Item2 ', item_left:7, item_taken:0 , cost:20},
    {pk:6, name:'Item3 ', item_left:2, item_taken:0 , cost:30},
]

function ItemsScreen({route ,navigation }) {

    hall_number = route.params.hall_number
    type =route.params.type
    date = route.params.date

    const [extras , setExtras] = useState(extras2) 
    const [taken , setTaken] = useState([]) 
    const [amount , setAmount] = useState(0) 

    handleIncrease = (id) => {
        let oldArray  = [...extras];
        let len = oldArray.length; 
        let x=amount;
        for(let i=0;i<len;i++)
        {
            if(oldArray[i].pk === id)
            {
                if(oldArray[i].item_left>oldArray[i].item_taken)
                {
                    oldArray[i].item_taken += 1;
                    x+=  oldArray[i].cost;
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
        let oldArray2 = []
        for(let i=0;i<len;i++)
        {
            if(oldArray[i].item_taken>0) oldArray2.push(oldArray[i])
        } 
        setTaken(oldArray2);
        
    }

    handleDecrease = (id) => {
        let oldArray  = [...extras];
        let len = oldArray.length; 
        let x = amount;
        for(let i=0;i<len;i++)
        {
            if(oldArray[i].pk === id)
            {
                if(oldArray[i].item_taken>0)
                {
                    oldArray[i].item_taken -= 1;
                    x -= oldArray[i].cost;
                }
                break;
            }
        } 
        setExtras(oldArray);
        setAmount(x);
        let oldArray2 = []
        for(let i=0;i<len;i++)
        {
            if(oldArray[i].item_taken>0) oldArray2.push(oldArray[i])
        } 
        setTaken(oldArray2);
    }
    
    onBooking =  () =>{
        navigation.navigate("Cart" , {hall_number:hall_number, type:type ,date:date , amount:amount , extras:taken})
    }

    return(
        <View style={[stylesD.topBarMargin,{height:"100%" ,width:"100%"}]}>
            <View style={{ alignItems: 'center',height:60, borderWidth:2,borderColor:"black",borderRadius:20}}>
                <Text style={{fontSize:20}}> Mess Hall {hall_number}</Text>
                <Text style={{fontSize:15}}> {type} , {date}</Text> 
            </View>
            <ItemCardList
                hall_number={hall_number}
                type={type}
                height={Dimensions.get('window').height-100}
                marginTop={0}
                extras={extras}
                handleIncrease ={handleIncrease}
                handleDecrease = {handleDecrease}
            />
            <TouchableOpacity style={{height:40,width:"100%"}} onPress={()=>onBooking()}>
                <View style={{height:"100%", width:"100%",alignItems: 'center',justifyContent:"center", 
                                borderWidth:2,borderColor:"black",backgroundColor:"#ffcc00"}}
                >
                    <Text> Proceed to Book </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ItemsScreen;