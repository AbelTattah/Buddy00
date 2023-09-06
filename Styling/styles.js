import { height } from "@fortawesome/free-solid-svg-icons/faRepeat";
import { StyleSheet,StatusBar } from "react-native";

const styles = StyleSheet.create({
    Homepage:{
  
    },
    dashboardTopSection:{
      
  backgroundColor:'blue'
    },
    dashboardName: {
fontFamily:'FredokaBold',
fontSize:19,
marginLeft:200
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

    LobbyUpdates:{
     height:400,
     marginTop:200,
     borderWidth:1,
     borderRadius:50,
     width:400,
     padding:10
    
     
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
      marginLeft:96,
      fontSize:20,
      color:'white',
      fontFamily:'FredokaBold'
    },
    lobbyWeather: {
      position:'absolute',
    top:200,
    left:60
    },
    lobbyMiniUpdates: {
    flex:2
    }, 
    lobbyMiniUpdates1: {
      marginTop:30,
      height:150,
      width:340,
      flex:0.4,
      marginBottom:-110
    },
    lobbyMiniUpdatesTop: {
      flex:1,
      flexDirection:'row',
      height:300,
      justifyContent:'space-evenly',
      width: 320,
      marginBottom:31
    },
    container1: {
      flex: 5,
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
      
      fontFamily:'FredokaLight',
      padding:10,
      fontSize: 17,
      margin:10,
      backgroundColor:'#8889',
      borderRadius:30
    },
    meContentContainer:{
      flex:1,
      width:600,
      height:600
    },
    meTopSection: {
      flex:3,
      height:100,
      width:600,
      backgroundColor:'blue',
      marginTop:-40
    
    },
    meMiddeSection: {
      flex:1.5,
      height:100,
      width:400,
      backgroundColor:'white',
      borderTopLeftRadius:70,
      marginTop:-50
    },
    meBottomSection: {
      flex:1,
      height:80,
      width:300,
      margin:20,
      borderWidth:2,
      backgroundColor:'blue',
      borderBottomWidth:1,
      borderBottomColor:'white',
      borderTopLeftRadius:30,
      borderBottomRightRadius:30,
    },
    me : {
      
      marginTop:-3,
    flex:6,
    justifyContent:'center',
    alignItems:'center',
    
    },
    meTopButtons: {
      width :300,
      height:86,
      borderWidth:3,
      borderColor:'black',
      borderRadius:20,
      justifyContent:'center',
      backgroundColor:'#ddd'

    },
    meTopButtonView: {
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      gap:30
    },
    meTopButtonText :{
      justifyContent:'center',
      color:'black',
      fontSize:20,
      textAlign:"center",
      fontFamily:'FredokaBold'
    
    },
    meMiddleButtons: {
      width :300,
      height:36,
      borderWidth:3,
      borderColor:'blue',
      borderRadius:20
    },
    meMiddleButtonView: {
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      gap:5
    },
    meMiddleButtonText :{
      color:'black',
      fontSize:20,
      textAlign:"center"
    },
    meMiddeTopText: {
      fontSize:20,
      textAlign:"center",
      marginTop:17
    },
    meTopText :{
      color:'white',
      fontSize:20,
      textAlign:"center",
      marginBottom:-37,
      marginTop:-4
    
    },
    Input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    personalTimetableTopButton:{
      width:300,
      height:200,
      margin:300
    },
    personalTimetableTopButtonView:{
      margin:22,
      gap:5,
      marginLeft:300
    },
    perTMainview :{
      height:460,
      width:380,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:3,
      backgroundColor:'#ccc',
      gap:20,
      
    },
    perTviews :{
      height:40,
      width:340,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:3,
      backgroundColor:'#ccc',
      gap:10,
      
    },
    perT: {
      fontFamily:'FredokaBold'
    },
    //To do SECTION. Any code beyon this point is to style the todo page until any comment says otherwise
    todoContainer:{
      backgroundColor: '#0000Ff',
      height: '100%',
    },
    todoItemsContainer:{

      width: '100%',
      backgroundColor: '#ecf3f7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end',
 
    },
    Login:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
//This section is used to specify the style of each individual to do item/task
taskItem:{
  backgroundColor: '#ecf3f7',
  borderTopWidth: 0.8,
  borderColor: '#8889',
  width: 350,
  padding: 2,
  display: 'flex',
  flexDirection: 'row',
  paddingTop: 1,
  height: 65,
  margin: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
},
taskTime:{
  width: '20%',
  height: '100%',
  backgroundColor: '#ecf3f7',
},
timetxt: {
  fontSize: 16,
},
taskItemField:{
  height: '100%',
  width: '80%',
  borderRadius: 10,
  backgroundColor: '#adcbfb',
  padding: '4px',
},
TaskInputField:{
  height: '100%',
  width: 0,
  

},
addTask:{

},


//Login Page
loginMain :{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#00f8',
},
loginIn:{
gap:20,
margin:23
},
loginTextIn:{
  backgroundColor:'#ddd',
  width:400,
  height:40

},
regButtonView:{
  marginTop:100
}
,


//Register
regCheckmain:{
flex:1,
gap:10
},

regCheck:{
flexDirection:'row',
gap:5
}

  });

  export default styles;

  