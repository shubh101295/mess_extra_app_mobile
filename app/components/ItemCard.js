import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity} from 'react-native';
import Constants from "expo-constants"

import { AntDesign } from '@expo/vector-icons';

import colors from "../config/colors"
import stylesD from "../config/stylesD"

function ItemCard({name ,item_left ,item_taken,id, handleIncrease ,handleDecrease ,cost, cost_description}){

	return (
		<View style={[stylesD.cardContainer, stylesD.cardTouchableContainer]}>
			<Text  style={{fontSize:30}}>{name}</Text>
			<Text > Cost : {cost} {cost_description}</Text>
			<Text > Items Left : {item_left} </Text>
			<View style={{flexDirection:"row",justifyContent: "flex-end",marginRight:30}}>
				<AntDesign name="caretdown" size={30} color="black" style={{position:"absolute", bottom:4,right:55}} onPress={()=>handleDecrease(id)} />
					<Text style={{marginLeft:5,marginRight:5,fontSize:20}}>{item_taken}</Text>
				<AntDesign name="caretup" size={30} color="black" onPress={()=>handleIncrease(id)}/>
			</View>
		</View>
	);	
}

export default ItemCard;