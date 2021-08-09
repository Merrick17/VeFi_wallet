import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const TermsBtn = () => {
    return (
        <TouchableOpacity style={styles.body}>
            <View style={styles.iconBody}>
                <FeatherIcon name="file-text" style={styles.fileIcon}/>
            </View>
            <Text style={styles.btnLabel}>Terms of Service</Text>
            <MaterialIcon name="keyboard-arrow-right" style={styles.arrowIcon}/>
        </TouchableOpacity>
    )
}

export default TermsBtn

const styles = StyleSheet.create({
    body:{
        //flex:1, 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        width:336,
        height:80,
        borderRadius:36, 
        backgroundColor:'#272636',
        paddingHorizontal:10,
        marginBottom:10
    }, 
    iconBody:{
        height:48,
        width:48,
        backgroundColor:'#31CBD1', 
        borderRadius:24,
        justifyContent:'center',
        alignItems:'center'
    }, 
    fileIcon:{
        fontSize:30,
    }, 
    arrowIcon:{
        fontSize:45, 
        color:"#FFF",
        fontWeight:'100'
    }, 
    btnLabel:{
        color:'#FFF', 
        fontFamily:'Gilroy-Regular', 
        fontSize:18
    }
})
