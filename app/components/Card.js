import React , {useState} from 'react';
import { StyleSheet , SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity} from 'react-native';
import Constants from "expo-constants"

import colors from "../config/colors"
import stylesD from "../config/stylesD"

function Card({title, subtitle, showNumber, handleIncrease ,handleDecrease,handlePress,pk}){

	return (
		<TouchableOpacity style={stylesD.cardTouchableContainer} onPress={()=>{handlePress(title ,subtitle);console.log(title,subtitle);}}>
			<View style={stylesD.cardContainer}>
				<Text style={{fontSize:30}}> {title} </Text>
				{subtitle && subtitle!=='' ? <Text> {subtitle} </Text> : <Text/>}
				{
					showNumber !==1 ? <View style={{height:1,width:1}}/> :
						<View style={{height:20,width:'100%', paddingLeft:15}}>

						</View>  
				}
			</View>
		</TouchableOpacity>
	);
}

export default Card;