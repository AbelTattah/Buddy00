//import { height } from "@fortawesome/free-solid-svg-icons/faRepeat";
import { StyleSheet,StatusBar } from "react-native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');
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
    
    todoItemsContainer:{
      height: '100%',
      width: '100%',
      backgroundColor: '#0000ff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    taskContainer:{
      height: '70%',
      width: '100%',
      borderTopLeftRadius: 40,
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    adddTask:{
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      right: 20,
      top: 100,
      height: 45,
      width: 45,
      backgroundColor: '#fff',
    },
    addtxt:{
      fontSize: 40,
      position: 'relative',
      top: -5,
    },
    today:{
      color: '#fff',
    },
//This section is used to specify the style of each individual to do item/task
taskItem:{
  width: '80%',
  height: 70,
  backgroundColor: '#ecf3f7',
  borderWidth: 0.5,
  borderRadius: 20,
  borderColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  padding: 5,
  margin: 10,
},
taskLeft:{
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},  

taskCheck:{
  width: 20,
  height: 20,
  borderRadius: 3,
  backgroundColor: '#b2acb3'
},

taskText:{
  height: '80%',
  width: '85%',
  backgroundColor: '#ecf3f7',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 18,
  paddingVertical: 10,
},
tasksstate:{
  width: 30,
  height: '50%',
  backgroundColor: '#0000ff',
}
//styles for todo modal
,


modalView:{
  backgroundColor: '#adcbfb',
  height: '80%',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: 10,
  borderTopRightRadius: 40,
  borderTopLeftRadius: 40,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
taskTitleinModal:{
  height: 80,
  width: '80%',
  backgroundColor: '#adcbfb',
  fontSize: 30,
  borderBottomColor: '#99a7b3',
  borderBottomWidth: 1,
},
taskReminderinModal:{
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  height: 65,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
},
addLocation:{
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  height: 65,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
},
locationImage:{
  height: 30,
  width: 30,
}
,
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

  