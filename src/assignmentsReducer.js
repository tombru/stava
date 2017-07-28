import { List } from "immutable"
import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";

const assignments = List([]);
// const assignments = List(["vad gör flickan - hon badar.jpg"]);
// const assignments = List(["vad gör flickan - hon badar.jpg", "vad gör dom-dom åker hiss.jpg", "vad gör hon-hon åker hiss.jpg", "vad gör dom-dom åker tunnelbana.jpeg", "vad gör pojken - han gråter.jpg","vad gör pojken - han skrattar.jpg", "vad gör flickan-hon borstar tänderna.jpg", "vad gör pojken-han springer.gif", "vad gör flickan-hon äter banan.jpg", "vad gör bill callahan-han spelar gitarr.jpg"]);

const pickRandom = (a) => {
    const randomIndex = Math.floor(Math.random() * a.size);
    return a.get(randomIndex) || "";
};

const initialState = {
    assignments: assignments,
    currentFilename: pickRandom(assignments),
    previousFilename: "",
    showAssignment: true,
    currentText: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPROVE_ANSWER:
            const { assignments, currentFilename } = state;
            const undoneAssignments = assignments.filter(assignment => assignment !== currentFilename);
            return {
                ...state,
                assignments: undoneAssignments,
                currentFilename: pickRandom(undoneAssignments),
                showAssignment: false,
                currentText: "",
                previousFilename: currentFilename
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