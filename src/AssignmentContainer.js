import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Assignment from "./Assignment";
import { approveAnswer, updateAnswer, fetchAssignment } from "./assignmentActions";
import { previousTextSelector, currentAssignmentSelector, currentTextSelector, showAssignmentSelector } from "./assignmentSelector";

class AssignmentContainer extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidMount() {
        const { fetchAssignment } = this.props;
        fetchAssignment();
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
            <Assignment
                {...this.props}
                onChange={this.onInputChange}
            />
        )
    }
}

const mapStateToProps = state => ({
    previousText: previousTextSelector(state),
    currentAssignment: currentAssignmentSelector(state),
    currentText: currentTextSelector(state),
    showAssignment: showAssignmentSelector(state),
});

const mapDispatchToProps = dispatch => ({
    approveAnswer: bindActionCreators(approveAnswer, dispatch),
    updateAnswer: bindActionCreators(updateAnswer, dispatch),
    fetchAssignment: bindActionCreators(fetchAssignment, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentContainer)
