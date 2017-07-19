import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";

const assignments = ["vad gör pojken - pojken gråter.jpg","vad gör pojken - pojken skrattar.jpg", "vad gör flickan-hon borstar tänderna.jpg", "vad gör pojken-han springer.gif", "vad gör flickan-hon äter banan.jpg", "vad gör bill callahan-han spelar gitarr.jpg"];

const pickRandom = (a) => {
    return a[Math.floor(Math.random() * a.length)] || "";
};

const nrOfRunsLeft = 40;
const initialState = {
    assignments: assignments,
    currentFilename: pickRandom(assignments),
    previousFilename: "",
    showAssignment: true,
    nrOfRunsLeft: nrOfRunsLeft < assignments.length ?  nrOfRunsLeft: assignments.length,
    currentText: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPROVE_ANSWER:
            const { assignments, currentFilename, nrOfRunsLeft } = state;
            const undoneAssignments = assignments.filter(assignment => assignment !== currentFilename);
            return {
                ...state,
                assignments: undoneAssignments,
                currentFilename: pickRandom(undoneAssignments),
                nrOfRunsLeft: nrOfRunsLeft - 1,
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