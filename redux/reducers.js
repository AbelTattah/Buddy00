import { SID,SNAME,SIN,COURSE } from "./actions";


const initialState ={
    namee:'Abel',
    sidd:0,
    sin:false,
    course:{},
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
        default:
            return state;

    }
}


export default userReducer;