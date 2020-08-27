import React , {useState} from 'react';
import { StyleSheet ,FlatList, SafeAreaView,Button,Text,Platform,Image ,View,TextInput ,TouchableOpacity,Alert} from 'react-native';
import Constants from "expo-constants"

import ItemCard from './ItemCard'
import colors from "../config/colors"
import stylesD from "../config/stylesD"



function ItemCardList({hall_number,type,height, marginTop ,extras, handleIncrease ,handleDecrease }){

	return (
		<View style={{width:"100%" ,height:height ,marginTop:marginTop}}>
			<FlatList 
				data={extras}
                keyExtractor = {category => category.pk.toString()}
                renderItem={({item})=> 
                    <ItemCard 
                    	name={item.name}
                    	item_left = {item.item_left}
                    	item_taken = {item.item_taken}
                    	id={item.pk}
                    	handleIncrease = {handleIncrease}
                    	handleDecrease = {handleDecrease}
                    	cost={item.cost}
                    ></ItemCard>
                }
			/>
		</View>
	);
}

export default ItemCardList;