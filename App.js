import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity ,Dimensions , ScrollView} from 'react-native';
import Constants from "expo-constants"


import AuthNavigation from "./app/navigation/AuthNavigation"
// console.disableYellowBox = true;

const values = [
    {pk:1 , title:"Jai Bappa" , subtitle:"ertyhj"},
    {pk:2 , title:"Jai Bappa" , subtitle:"ertyhj"},
    {pk:3 , title:"Jai Bappa" , subtitle:"ertyhj"},
    {pk:4 , title:"Jai Bappa" , subtitle:"ertyhj"},
    {pk:5 , title:"Jai Bappa" , subtitle:"ewe3r4t5y6uirtyhj"},
    {pk:6 , title:"Jai Bappa" , subtitle:"ertyhj"},
    {pk:7 , title:"Jai Bappa" , subtitle:"ewe3r4t5y6uirtyhj"},
]

const extras2 =[
    {pk:1, name:'Item1 ', item_left:115, item_taken:3, cost:8},
    {pk:2, name:'Item2 ', item_left:7, item_taken:0 , cost:0},
    {pk:3, name:'Item3 ', item_left:2, item_taken:1 , cost:3},
    {pk:4, name:'Item1 ', item_left:5, item_taken:3 , cost:5},
    {pk:5, name:'Item2 ', item_left:7, item_taken:2 , cost:25},
    {pk:6, name:'Item3 ', item_left:2, item_taken:5 , cost:60},
    {pk:11, name:'Item1 ', item_left:115, item_taken:3, cost:8},
    {pk:12, name:'Item2 ', item_left:7, item_taken:0 , cost:0},
    {pk:13, name:'Item3 ', item_left:2, item_taken:1 , cost:3},
    {pk:14, name:'Item1 ', item_left:5, item_taken:3 , cost:5},
    {pk:15, name:'Item2 ', item_left:7, item_taken:2 , cost:25},
    {pk:16, name:'Item3 ', item_left:2, item_taken:5 , cost:60},
    {pk:21, name:'Item1 ', item_left:115, item_taken:3, cost:8},
    {pk:22, name:'Item2 ', item_left:7, item_taken:0 , cost:0},
    {pk:23, name:'Item3 ', item_left:2, item_taken:1 , cost:3},
    {pk:24, name:'Item1 ', item_left:5, item_taken:3 , cost:5},
    {pk:25, name:'Item2 ', item_left:7, item_taken:2 , cost:25},
    {pk:26, name:'Item3 ', item_left:2, item_taken:5 , cost:60},
    {pk:31, name:'Item1 ', item_left:115, item_taken:3, cost:8},
    {pk:32, name:'Item2 ', item_left:7, item_taken:0 , cost:0},
    {pk:33, name:'Item3 ', item_left:2, item_taken:1 , cost:3},
    {pk:34, name:'Item1 ', item_left:5, item_taken:3 , cost:5},
    {pk:35, name:'Item2 ', item_left:7, item_taken:2 , cost:25},
    {pk:36, name:'Item3 ', item_left:2, item_taken:5 , cost:60},
    {pk:111, name:'Item1 ', item_left:115, item_taken:3, cost:8},
    {pk:112, name:'Item2 ', item_left:7, item_taken:0 , cost:0},
    {pk:113, name:'Item3 ', item_left:2, item_taken:1 , cost:3},
    {pk:114, name:'Item1 ', item_left:5, item_taken:3 , cost:5},
    {pk:115, name:'Item2 ', item_left:7, item_taken:2 , cost:25},
    {pk:116, name:'Item3 ', item_left:2, item_taken:5 , cost:60},
    {pk:121, name:'Item1 ', item_left:115, item_taken:3, cost:8},
    {pk:122, name:'Item2 ', item_left:7, item_taken:0 , cost:0},
    {pk:123, name:'Item3 ', item_left:2, item_taken:1 , cost:3},
    {pk:124, name:'Item1 ', item_left:5, item_taken:3 , cost:5},
    {pk:125, name:'Item2 ', item_left:7, item_taken:2 , cost:25},
    {pk:126, name:'Item3 ', item_left:2, item_taken:5 , cost:60},
    
]


export default function App() {
 
  return (

      <AuthNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  }
});
