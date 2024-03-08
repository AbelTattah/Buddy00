import { createContext, useState} from "react";

export const userContext = createContext({
    sid:0,
    name: "",
    courses: [],
    isLoggedIn:false,
    pdf:"",
    setSid:()=>{},
    setName:() =>{},
    setCourses:() =>{},
    setAuthState:()=>{},
    setPdf:()=>{}
})


function UserContextProvider({children}) {
    const [sid,setSID] = useState(0)
    const [name,setNAME] = useState("")
    const [courses,setCOURSES] = useState("")
    const [isLoggedIn,setAUTHSTATE] = useState(false)
    const [pdf,setPDF] = useState("")

    function setSid(sid){
        setSID(sid)
    }

    function setName(name){
        setNAME(name)
    }

    function setCourses(courses){
        setCOURSES(courses)
    }

    function setAuthState(state) {
        setAUTHSTATE(state)
    }

    function setPdf(pdf) {
        setPDF(pdf)
    }

     return (
        <userContext.Provider value={{name,setName,courses,setCourses,sid,setSid,isLoggedIn,setAuthState,pdf,setPdf}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider