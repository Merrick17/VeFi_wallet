import {Dimensions, StyleSheet} from 'react-native'; 

export const GlobalStyles = StyleSheet.create({

    screen:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#1F1D2B',
        height:'100%', 
        width:'100%'
    }, 
    labelStyle:{
        color:'#FFF',
        fontSize:17,
        alignSelf:'center', 
        

    },
    safeArea:{
        height:Dimensions.get('window').width, 
        width:Dimensions.get('window').height, 
        flex:1, 
        alignContent:'flex-start', 
        justifyContent:'flex-start'
    }
}); 