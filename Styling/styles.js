import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Homepage:{
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      flex:6,
      backgroundColor:'white'
    
    },
    quo: {
      marginTop:100,
      flex:0.4,
      backgroundColor:'#000',
      borderWidth:0,
      borderRadius:20,
      height:50,
      borderBottomWidth:5,
      borderBottomColor:'#000',
      width:340,
      padding:0,
      justifyContent:'center',
      borderRightWidth:5,
      borderRightColor:'#000'

    },
    lobbyQuotes: {
      marginTop:100,
      flex:0.7,
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:30,
      height:150,
      width:340,
      padding:0,
      justifyContent:'center',
      
     

    },
    button1: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#000',
      width:19,
      height:34,
      borderRadius:15,
      borderBottomWidth:5,
      borderBottomColor:'#000',
      borderRightWidth:5,
      borderRightColor:'#000'
    },
    Options: {
      gap:8,
      marginTop:0,
      margin:10,
      justifyContent:'space-evenly',
      flex:4,
      flexDirection:'row',
      marginTop:20,
      marginBottom:-6
    },
    updates:{
      flex:1.1,
      flexDirection:'row',
      backgroundColor:'#00f',
      height:5,
      width:500,
      borderRadius:15,
      borderBottomWidth:5,
      borderBottomColor:'white',
      borderRightWidth:5,
      borderRightColor:'#000',
      marginBottom:100,
      marginTop:-200
    },
    up1 :{
      width:260,
      borderRightWidth:1,
      borderRightColor:'#ffd70099'
    },
    up2 :{
      width:140,
      height:170,
      borderBottomWidth:1,
      borderBottomColor:'#ffd70099'
    },
    nextc: {
      marginTop:-18,
      backgroundColor:'#000',
      width:90,
      height:10,
      borderTopWidth:5,
      borderTopColor:'blue',
      borderRightWidth:5,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      borderRightColor:'blue'
    },
    headerr: {
      flex:1,
      flexDirection:'row',
      marginRight:80,
      marginLeft:10,
      gap:10,
      marginTop:10
      
    },
    wea: {
      fontSize:20,
      fontWeight:800,
    }
      
      
  

  });

  export default styles;

  