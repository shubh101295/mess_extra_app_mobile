import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,Alert,FlatList} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"


const extras2 =[
    {pk:1, name:'Item1 ', item_taken:3, cost:8},
    {pk:2, name:'Item2 ', item_taken:0 , cost:0},
    {pk:3, name:'Item3 ', item_taken:1 , cost:3},
    {pk:4, name:'Item1 ', item_taken:3 , cost:5},
    {pk:5, name:'Item2 ', item_taken:2 , cost:25},
    {pk:6, name:'Item3 ', item_taken:5 , cost:60},
    {pk:11, name:'Item1 ', item_taken:3, cost:8},
    {pk:12, name:'Item2 ', item_taken:0 , cost:0},
    {pk:13, name:'Item3 ', item_taken:1 , cost:3},
    {pk:14, name:'Item1 ', item_taken:3 , cost:5},
    {pk:15, name:'Item2 ', item_taken:2 , cost:25},
    {pk:16, name:'Item3 ', item_taken:5 , cost:60},
    {pk:21, name:'Item1 ', item_taken:3, cost:8},
    {pk:22, name:'Item2 ', item_taken:0 , cost:0},
    {pk:23, name:'Item3 ', item_taken:1 , cost:3},
    {pk:24, name:'Item1 ', item_taken:3 , cost:5},
    {pk:25, name:'Item2 ', item_taken:2 , cost:25},
    {pk:26, name:'Item3 ', item_taken:5 , cost:60},
    {pk:31, name:'Item1 ', item_taken:3, cost:8},
    {pk:32, name:'Item2 ', item_taken:0 , cost:0},
    {pk:33, name:'Item3 ', item_taken:1 , cost:3},
]

function TodayPurchasedTokenScreen({route}) {

    const [extras , setExtras ] = useState(extras2) 
    const hall_number = route.params.hall_number
    const type =route.params.type
    const date = route.params.date
    
    const itemGiven = (pk) =>{
    	console.log(pk);
    	let oldArray  = [...extras];
        let len = oldArray.length; 
        let newArray = []

        for(let i=0;i<len;i++)
        {
            if(oldArray[i].pk === pk)
            {
				console.log("found");        	
            }
            else 
            {
                newArray.push(oldArray[i]);
            }
        } 
        setExtras(newArray);
        console.log(extras.length)
    }

    return(
        <View style={[stylesD.topBarMargin,{height:"100%" ,width:"100%"}]}>
            <View style={{ alignItems: 'center',height:60, borderWidth:2,borderColor:"black",borderRadius:20}}>
                <Text style={{fontSize:20}}> Mess Hall {hall_number}</Text>
                <Text> {type} , {date}</Text>
            </View>
            {
            	extras.length ==0  ? <Text style={{textAlign:"center"}}> No Item</Text>:
            	<FlatList
                    data={extras}
                    keyExtractor={item => item.pk.toString()}
                    renderItem={({item}) =>
                            <View style={[stylesD.cardContainer,stylesD.cardTouchableContainer, {flexDirection:"row"}]}>
                            	<View style={{height:"100%" , width:Dimensions.get('window').width*0.94 -150,justifyContent:"center"}}> 	
                            		<Text style={{fontWeight:"bold"}}> Name - {item.name}</Text> 
                            		<Text style={{fontWeight:"bold"}}> Cost - {item.cost}</Text>
                            		<Text style={{fontWeight:"bold"}}> Qunatity - {item.item_taken}</Text>
                            	</View> 
                            	<View style={{height:"100%" , width:100,justifyContent:"center"}}>
                            		<TouchableOpacity style={{width:100, height:50}} onPress={() => itemGiven(item.pk)}>
                            			<View style={{flex:1,backgroundColor:"red", borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                            				<Text style={{color:"white",fontSize:20}}>Given</Text>
                            			</View>
                            		</TouchableOpacity>
                            	</View>
                            </View> 
                    }
                />
            }
        </View>
    );
}

export default TodayPurchasedTokenScreen;