import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Assignments from "./Assignments";
import { approveAnswer, updateAnswer, fetchAssignments } from "./assignmentsActions";

class AssignmentsContainer extends Component {

    componentDidMount() {
        const { fetchAssignments } = this.props;
        fetchAssignments();
    }

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        const writtenText = event.target.value;
        this.handleWrittenText(writtenText);
    }

    handleWrittenText(writtenText) {
        const { currentAssignment, updateAnswer, approveAnswer } = this.props;
        const { targetText } = currentAssignment;
        const upperCaseTargetText = targetText.toUpperCase();
        const upperCaseWrittenText = writtenText.toUpperCase();
        if (upperCaseTargetText === upperCaseWrittenText) {
            approveAnswer(writtenText);
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
    previousText: state.assignments.previousText,
    currentAssignment: state.assignments.currentAssignment,
    previousFilename: state.assignments.previousFilename,
    currentText: state.assignments.currentText,
    showAssignment: state.assignments.showAssignment,
});

const mapDispatchToProps = dispatch => ({
    approveAnswer: bindActionCreators(approveAnswer, dispatch),
    updateAnswer: bindActionCreators(updateAnswer, dispatch),
    fetchAssignments: bindActionCreators(fetchAssignments, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentsContainer)
