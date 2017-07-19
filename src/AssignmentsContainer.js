import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Assignments from "./Assignments";
import { approveAnswer, updateAnswer } from "./assignmentsActions";

class AssignmentsContainer extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this)
    }

    static targetText(currentFilename) {
        return currentFilename.substring(0, currentFilename.indexOf(".")).replace("_", " ");
    }

    onInputChange(event) {
        const writtenText = event.target.value;
        this.handleWrittenText(writtenText);
    }

    handleWrittenText(writtenText) {
        const { targetText, updateAnswer, approveAnswer } = this.props;
        const upperCaseTargetText = targetText.toUpperCase();
        const upperCaseWrittenText = writtenText.toUpperCase();
        if (upperCaseTargetText === upperCaseWrittenText) {
            approveAnswer();
        } else if (upperCaseTargetText.startsWith(upperCaseWrittenText)) {
            updateAnswer(writtenText);
        }
    }

    render() {
        return (
            <Assignments
                {...this.props}
                onChange={this.onInputChange}
            />
        )
    }
}

const mapStateToProps = state => ({
    targetText: AssignmentsContainer.targetText(state.assignments.currentFilename),
    previousText: AssignmentsContainer.targetText(state.assignments.previousFilename),
    currentFilename: state.assignments.currentFilename,
    previousFilename: state.assignments.previousFilename,
    currentText: state.assignments.currentText,
    showAssignment: state.assignments.showAssignment,
    nrOfRunsLeft: state.assignments.nrOfRunsLeft
});

const mapDispatchToProps = dispatch => ({
    approveAnswer: bindActionCreators(approveAnswer, dispatch),
    updateAnswer: bindActionCreators(updateAnswer, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentsContainer)
