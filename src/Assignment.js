import React from "react";
import Question from "./Question"

function Assignment({ currentAssignment, currentText, showAssignment, previousText, onChange }) {
    return (
        <div className="container">
            {showAssignment &&
                <span>
                    {currentAssignment &&
                        <Question
                            questionText={currentAssignment.question}
                            currentText={currentText}
                            link={currentAssignment.link}
                            onChange={onChange}
                        />
                    }
                </span>
            }
            {!showAssignment &&
                <div className="previousAssignment">
                    <h1>{previousText}</h1>
                </div>
            }
        </div>
    )
}

export default Assignment;
