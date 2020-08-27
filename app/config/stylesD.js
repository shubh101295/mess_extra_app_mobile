import { Dimensions } from 'react-native';
import Constants from "expo-constants"

import colors from "./colors"

export default {

    topBarMargin:{
        marginTop:Constants.statusBarHeight,
    },
    formContainer:{
        width:"100%",
        height:"100%",
    },
    formError:{
    	height:15,
    	marginBottom:10
    },
    formButton:{
    	height:50
    },
    inputContainer:{
        backgroundColor:colors.light,
        height:50,
        padding:5,
        marginHorizontal:10,
        flexDirection:"row",
        borderRadius:20,     
        alignItems:"center"   
    },
    heading:{
    	paddingLeft:15
    },
    logoContainer:{
    	height:200,
    	width:200,
    	alignItems:"center",
    	justifyContent:"center",
    	backgroudColor:colors.light,
    	marginLeft:(Dimensions.get('window').width-200)/2,
    	marginVertical:20,
    },
    cardContainer:{
        width:"100%",
        height:"100%",
        backgroundColor:"#99ff99",
        padding:10,
        justifyContent:"center"
    },
    cardTouchableContainer:{
        width:"94%",
        marginLeft:"3%",
        marginBottom:10,
        height:150,
    },
    receiptContainer:{
        width:"99%",
        borderWidth:2,
        borderColor:"black",
        borderRadius:20,
        padding:10,
        alignSelf:"center"
    },
    WelcomeViewButton:{
        height:50,
        width:"75%",
        alignSelf:"center",
        borderRadius:20,
        
    }
}