export const SNAME ='SNAME';
export const SID ='SID';
export const SIN ='SIN';
export const COURSE ='COURSE';

export const setName = namee => dispatch => {
    dispatch({
        type: SNAME,
        payload:namee,
    });
}
export const setSid = sidd => dispatch => {
    dispatch({
        type: SID,
        payload:sidd,
    });
}

export const setSin = sin => dispatch => {
    dispatch({
        type: SIN,
        payload:sin,
    });
}

export const setCourse = course => dispatch => {
    dispatch({
        type: COURSE,
        payload:course,
    });
}
