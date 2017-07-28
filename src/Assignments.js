import React from "react";
import Assignment from "./Assignment"

function Assignments({ currentAssignment, currentText, showAssignment, previousText, onChange }) {
    return (
        <div className="container">
            {showAssignment &&
                <span>
                    {currentAssignment &&
                        <Assignment
                        question={currentAssignment.question}
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

export default Assignments;
