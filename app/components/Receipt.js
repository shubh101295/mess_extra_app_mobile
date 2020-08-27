import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

const purchasedData2 =[
    {pk:1, name:'Item1 ', item_left:15, item_taken:3, cost:9},
    {pk:2, name:'Item2 ', item_left:7, item_taken:2 , cost:1},
    {pk:3, name:'Item3 ', item_left:2, item_taken:2 , cost:2},
    {pk:4, name:'Item1 ', item_left:5, item_taken:6 , cost:5},
    {pk:5, name:'Item2 ', item_left:7, item_taken:6 , cost:20},
    {pk:6, name:'Item3 ', item_left:2, item_taken:2 , cost:30},
]

function Receipt({route}){

	const [x,setX] =useState(0)

	let purchasedData =[]
	let amount=0
		purchasedData =  route.params.purchasedData
		amount = route.params.amount

	if(typeof amount === "undefined"){
		console.log("In Catch block");
		purchasedData = purchasedData2
		amount =0
		for(i=0;i<purchasedData.length;i++)
		{
			amount+= purchasedData[i].item_taken * purchasedData[i].cost;
		}
		console.log(amount)
	}
	console.log(amount)
	hall_number = route.params.hall_number
	order_number = route.params.order_number
	type = route.params.type
	date = route.params.date
	height = Dimensions.get('window').height
	username = route.params.username
	roll_number = route.params.roll_number


	return (
		<View style={[stylesD.receiptContainer ,stylesD.topBarMargin]}>
			<View style={{alignItems:"center",height:60}}> 
				<Text> Receipt </Text>
				<Text> Mess Hall {hall_number} </Text>
				<Text> {type} , {date} </Text>
			</View>
			<Text> Order number : <Text style={{fontWeight:"bold"}}>{order_number}</Text></Text> 
			<Text> Username : <Text style={{fontWeight:"bold"}}>{username}</Text></Text> 
			<Text> Roll Number : <Text style={{fontWeight:"bold"}}>{roll_number}</Text></Text> 
			<Text/>
			<View style={{width:"100%",height:1,backgroundColor:"black"}}/>
			<View style={{flexDirection:"row" ,width:"100%"}}>
				<View style={{width:40}}>
					<Text>S.No.</Text>  
				</View>
				<View style={{width:Dimensions.get('window').width-230}}> 
					<Text>Item Name</Text>  
				</View>
				<View style={{width:50}}>
					<Text style={{textAlign:"right"}}>Price</Text>  
				</View>
				<View style={{width:50}}>
					<Text style={{textAlign:"right"}}>Qty.</Text>  
				</View>
				<View style={{width:50}}>
					<Text style={{textAlign:"right"}}>Total</Text>  
				</View>
			</View>	
			<View style={{width:"100%",height:1,backgroundColor:"black"}}/>
			<View style={{width:"100%",height:height-210}}>
				<FlatList
					data={purchasedData}
					keyExtractor={item => item.pk.toString()}
					renderItem={({item}) => 
						<View style={{flexDirection:"row" ,width:"100%"}}>
							<View style={{width:40}}>
								<Text style={{textAlign:"center"}} >{x}</Text>  
							</View>
							<View style={{width:Dimensions.get('window').width-230}}> 
								<Text>{item.name}</Text>  
							</View>
							<View style={{width:50}}>
								<Text style={{textAlign:"right"}}>{item.cost}</Text>  
							</View>
							<View style={{width:50}}>
								<Text style={{textAlign:"right"}}>{item.item_taken}</Text>  
							</View>
							<View style={{width:50}}>
								<Text style={{textAlign:"right"}}>{item.cost * item.item_taken}</Text>  
							</View>
						</View>		
					}
				/>
			</View>
			<View style={{width:"100%",height:1,backgroundColor:"black"}}/>
				<Text style={{textAlign:"right",marginRight:10}}> Total Amount = {amount}</Text>
			<View style={{width:"100%",height:1,backgroundColor:"black"}}/>
				
		</View>
	);
}

export default Receipt;