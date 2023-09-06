export const SNAME ='SNAME';
export const SID ='SID';
export const SIN ='SIN';


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