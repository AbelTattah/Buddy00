export const SNAME = 'SNAME'
export const SID = 'SID'
export const SIN = 'SIN'
export const COURSE = 'COURSE'
export const EMAIL = 'EMAIL'
export const CURRENT_COURSE = 'CURRENT_COURSE'

export const setName = namee => dispatch => {
  dispatch({
    type: SNAME,
    payload: namee
  })
}
export const setSid = sidd => dispatch => {
  dispatch({
    type: SID,
    payload: sidd
  })
}

export const setSin = sin => dispatch => {
  dispatch({
    type: SIN,
    payload: sin
  })
}

export const setCourse = course => dispatch => {
  dispatch({
    type: COURSE,
    payload: course
  })
}

export const setEmail = email => dispatch => {
  dispatch({
    type: EMAIL,
    payload: email
  })
}

export const setCurrentCourse = currentc => dispatch => {
  dispatch({
    type: CURRENT_COURSE,
    payload: currentc
  })
}
