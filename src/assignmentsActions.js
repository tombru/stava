import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";

const speakSwedish = (writtenText) => {
    const msg = new SpeechSynthesisUtterance(writtenText);
    msg.lang = 'sv-SE';
    window.speechSynthesis.speak(msg);
};

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