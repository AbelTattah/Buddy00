import { SID,SNAME,SIN,COURSE,EMAIL } from "./actions";


const initialState ={
    namee:'',
    sidd:0,
    sin:false,
    course:{},
    email:''
}


function userReducer(state = initialState,action) {
    switch (action.type) {
        case SNAME:
            return {...state,namee:action.payload};
        case SID:
            return {...state,sidd:action.payload};
        case SIN:
            return {...state,sin:action.payload};
        case COURSE:
            return {...state,course:action.payload};
        case EMAIL:
            return {...state,email:action.payload};
        default:
            return state;

    }
}


export default userReducer;