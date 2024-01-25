import { SID, SNAME, SIN, COURSE, EMAIL, CURRENT_COURSE } from "./actions";

const initialState = {
  namee: "",
  sidd: 11335775,
  sin: true,
  course: {},
  email: "",
  currentc: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SNAME:
      return { ...state, namee: action.payload };
    case SID:
      return { ...state, sidd: action.payload };
    case SIN:
      return { ...state, sin: action.payload };
    case COURSE:
      return { ...state, course: action.payload };
    case EMAIL:
      return { ...state, email: action.payload };
    case CURRENT_COURSE:
      return { ...state, currentc: action.payload };
    default:
      return state;
  }
}

export default userReducer;
