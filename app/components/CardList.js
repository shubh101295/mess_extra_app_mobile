import React , {useState} from 'react';
import { StyleSheet ,FlatList, SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity} from 'react-native';
import Constants from "expo-constants"

import Card from './Card'
import colors from "../config/colors"
import stylesD from "../config/stylesD"


function CardList({data , height,subtitleExists, marginTop,handlePress}){

	// console.log(data)
	// console.log("1")
	return (
		<View style={{width:"100%" ,height:height ,marginTop:marginTop}}>
			<FlatList 
				data={data}
                keyExtractor = {category => category.pk.toString()}
                renderItem={({item})=> 
                    <Card 
                    	title={item.title}
                    	subtitle=  {subtitleExists===1 ? item.subtitle :""} 
                    	handlePress={handlePress}
                    	pk={item.pk}
                    ></Card>
                }
			/>
		</View>
	);
}

export default CardList;