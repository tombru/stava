import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";
import { speakSwedish } from "./speak"

export const approveAnswer = (writtenText) => {
    return dispatch => {
        speakSwedish(writtenText);
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