import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Assignment from "./Assignment";
import { approveAnswer, updateAnswer, fetchAssignment } from "./assignmentActions";

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
    previousText: state.assignment.previousText,
    currentAssignment: state.assignment.currentAssignment,
    currentText: state.assignment.currentText,
    showAssignment: state.assignment.showAssignment,
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
