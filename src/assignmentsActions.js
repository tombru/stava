import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";

export const approveAnswer = () => {
    return dispatch => {
        dispatch({
            type: APPROVE_ANSWER
        });
        setTimeout(() => {
            dispatch({
                type: SHOW_ASSIGNMENT
            })
        }, 2000)
    }
};

export const updateAnswer = (writtenText) => {
    return dispatch => {
        return dispatch({
            type: UPDATE_ANSWER,
            writtenText
        });
    }
};