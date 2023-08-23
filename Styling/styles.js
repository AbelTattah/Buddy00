import { StyleSheet,StatusBar } from "react-native";

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
      flex:3,
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:30,
      height:150,
      width:340,
      padding:0,
      justifyContent:'center',
      
     

    },
    dashboardTopSection:{
      flex:0.15,
      flexDirection:'row',
      backgroundColor:'#00f',
      height:500,
      width:500,
      borderRadius:15,
      borderBottomWidth:5,
      borderBottomColor:'white',
      borderRightWidth:5,
      borderRightColor:'#000',
      marginBottom:120,
      marginTop:-207
    },
    dashboardName: {
      position:'absolute',
      top:120,
      left:128,
      fontSize:20,
      
      
    },
    dashboardAvatar:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      top:32,
      right:39,
      borderRadius:99,
      borderTopColor:'white',
      height:133,
      width:133,
      backgroundColor:'#888'
    },
    ScrollView: {
      backgroundColor:'blue',
      height:300
    },
    contentContainer:{
      paddingVertical: 20,
      marginTop:100,
      flex:1,
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:30,
      height:350,
      width:340,
      padding:0,
      justifyContent:'center',
    },
    contentContainer1:{
      paddingTop: StatusBar.currentHeight,
      flex:1,
      backgroundColor:'#fff',
      borderWidth:1,
      borderRadius:30,
      height:250,
      width:340,
      padding:0,
      justifyContent:'center',
      marginBottom:10,
      position:'absolute',
      top:120
    },
    lobbyGreeting : {
      marginTop:70,
      marginLeft:66,
      fontSize:20,
      color:'white'
    },
    lobbyWeather: {
      position:'absolute',
    top:200,
    left:60
    },
    lobbyMiniUpdates: {
      marginTop:30,
      height:150,
      width:340,
      flex:0.4,
      marginBottom:-110
    }, 
    lobbyMiniUpdatesTop: {
      flexDirection:'row',
      height:20,
      justifyContent:'space-evenly',
      width: 320,
      marginBottom:20
    },
    container1: {
      flex: 4,
      paddingTop: StatusBar.currentHeight,
      borderWidth:1,
      marginTop:20,
      borderRadius:40,
      height:300,
      paddingBottom:30
    },
    scrollView1: {
      backgroundColor: 'white',
      marginHorizontal: 0,
      
    },
    text1: {
      padding:10,
      fontSize: 17,
      margin:10,
      backgroundColor:'#8889',
      borderRadius:30
    },
      
  

  });

  export default styles;

  