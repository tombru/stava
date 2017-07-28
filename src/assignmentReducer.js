import { List } from "immutable"
import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER, ASSIGNMENT_FETCHED } from "./assignmentActionTypes";

const assignments = List([]);

const pickRandom = (a) => {
    const randomIndex = Math.floor(Math.random() * a.size);
    return a.get(randomIndex);
};

const initialState = {
    assignments: assignments,
    currentAssignment: pickRandom(assignments),
    previousText: "",
    showAssignment: true,
    currentText: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ASSIGNMENT_FETCHED:
            return {
                ...state,
                assignments: action.assignments,
                currentAssignment: pickRandom(action.assignments)
            };
        case APPROVE_ANSWER:
            const { assignments, currentAssignment } = state;
            const undoneAssignment = assignments.filter(assignment => assignment !== currentAssignment);
            return {
                ...state,
                assignments: undoneAssignment,
                currentAssignment: pickRandom(undoneAssignment),
                showAssignment: false,
                currentText: "",
                previousText: currentAssignment.targetText
            };
        case SHOW_ASSIGNMENT:
            return {
                ...state,
                showAssignment: true
            };
        case UPDATE_ANSWER:
            return {
                ...state,
                currentText: action.writtenText
            };
        default:
            return state
    }
}