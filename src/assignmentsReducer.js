import { APPROVE_ANSWER, SHOW_ASSIGNMENT, UPDATE_ANSWER } from "./assignmentsActionTypes";

const assignments = ["spöke.jpg", "badhus.jpg", "borrmaskin.jpg", "choklad.jpg", "cykelvagn.jpg", "dammsugare.jpg", "dator.jpg", "gitarr.jpeg", "lekplats.jpg", "makaroner.jpg", "mannagrynsgröt.jpg", "nudlar.jpg", "ostbågar.jpg", "studsmatta.png", "tandborste.jpg", "tandkräm.jpg", "ugnspannkaka.jpg", "yoghurt.jpg", "sol.png", "glasögon.png", "dinosaurie.jpg", "cykel.jpg", "fiskespö.jpg", "lastbil.jpg", "flygplan.jpg", "giraff.jpg", "häst.jpg", "percy.png", "bill_callahan.jpg", "hiss.jpg", "pizza.jpg", "bamse.jpg", "buss.jpeg", "sko.jpg", "pappa.jpeg", "mamma.jpg", "farmor.jpg", "daniel_tiger.jpg", "alfons.jpg", "thomas_tåg.jpg"];

const pickRandom = (a) => {
    return a[Math.floor(Math.random() * a.length)]
};

const initialState = {
    assignments: assignments,
    currentFilename: pickRandom(assignments),
    previousFilename: "",
    showAssignment: true,
    nrOfRunsLeft: 20,
    currentText: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPROVE_ANSWER:
            const { assignments, currentFilename, nrOfRunsLeft } = state;
            const undoneAssignments = assignments.filter(assignment => assignment !== currentFilename);
            return {
                ...state,
                assignment: undoneAssignments,
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