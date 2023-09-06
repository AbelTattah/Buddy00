import { SID,SNAME,SIN } from "./actions";


const initialState ={
    namee:'Good Morning',
    sidd:0,
    sin:false
}


function userReducer(state = initialState,action) {
    switch (action.type) {
        case SNAME:
            return {...state,namee:action.payload};
        case SID:
            return {...state,sidd:action.payload};
        case SIN:
            return {...state,sin:action.payload};
        default:
            return state;

    }
}


export default userReducer;