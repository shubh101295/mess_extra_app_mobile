import React,{useState} from 'react';
import { Modal ,View , StyleSheet , TouchableWithoutFeedback , Button , FlatList ,TextInput,Text} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from "../config/colors"
import stylesD from "../config/stylesD"

function MyAppPicker({setValue ,value  ,items}){
	const [modalVisible , setModalVisible] = useState(false);
    
     return(
        <>
            <TouchableWithoutFeedback onPress={() => {
            	setModalVisible(true);
            }}>
            <View style={[stylesD.inputContainer,{backgroundColor:"dodgerblue",borderRadius:0,height:40,justifyContent:"center"}]}>
                <Text>{value!=="" ?value:'--Select--'}</Text>
            </View>                        
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                <FlatList 
                    data={items}
                    keyExtractor = {category => category.pk.toString()}
                    renderItem={({item})=> 
                        <View style={{height:30,justifyContent:"center"}}>
                        <TouchableWithoutFeedback 
                        	onPress={()=>{
                                setValue(item.value)
                                setModalVisible(false)
                            }}
                        >
                        	<Text> {item.value} </Text>
                        </TouchableWithoutFeedback>
                        <View style={{marginTop:5,height:1,backgroundColor:"black"}} /> 
                        </View>
                    }
                    
                />
            </Modal>
        </>
    );
}

export default MyAppPicker;