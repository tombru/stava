import Dropbox from "dropbox";
import { List } from "immutable"
import { parseTargetText, parseQuestion, getKey } from "./UrlUtil"
import { APPROVE_ANSWER, ASSIGNMENTS_FETCHED, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";
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

export const fetchAssignments = () => {
    return dispatch => {
        const dbx = new Dropbox({ accessToken: getKey() });
        dbx.filesListFolder({ path: '/EoT/bilder-stava' })
            .then((response) => {
                const promises = response.entries
                    .map(entry => entry.path_lower)
                    .map(path => dbx.filesGetTemporaryLink({ path }));
                Promise.all(promises).then(responses => {
                    const assignments = responses.map(response => {
                        const { metadata, link } = response;
                        const { name } = metadata;
                        return {
                            link,
                            question: parseQuestion(name),
                            targetText: parseTargetText(name)
                        }
                    });
                    dispatch({
                        type: ASSIGNMENTS_FETCHED,
                        assignments: List(assignments)
                    })
                })
            })
            .catch((error) => {
                console.log(error);
            });
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