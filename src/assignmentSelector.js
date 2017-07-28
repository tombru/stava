import { createSelector } from 'reselect'

const assignmentSelector = state => state.assignment;

export const previousTextSelector = createSelector(
    assignmentSelector,
    assignment => assignment.previousText
);

export const currentAssignmentSelector = createSelector(
    assignmentSelector,
    assignment => assignment.currentAssignment
);

export const currentTextSelector = createSelector(
    assignmentSelector,
    assignment => assignment.currentText
);

export const showAssignmentSelector = createSelector(
    assignmentSelector,
    assignment => assignment.showAssignment
);