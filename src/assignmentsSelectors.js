import { createSelector } from 'reselect'

const getAssignments = (state) => state.assignments;

const targetText = (currentFilename) => {
    const part = currentFilename.substring(currentFilename.indexOf("-") + 1, currentFilename.length);
    return part.substring(0, part.indexOf(".")).replace("_", " ").trim();
};

const question = (currentFilename) => {
    return currentFilename.substring(0, currentFilename.indexOf("-")).trim();
};

export const currentTextSelector = createSelector(
    [ getAssignments ],
    (assignments) => {
        return targetText(assignments.currentFilename)
    }
);

export const previousTextSelector = createSelector(
    [ getAssignments ],
    (assignments) => {
        return targetText(assignments.previousFilename)
    }
);

export const questionSelector = createSelector(
    [ getAssignments ],
    (assignments) => {
        return question(assignments.currentFilename)
    }
);