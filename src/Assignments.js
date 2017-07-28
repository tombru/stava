import React from "react";
import Assignment from "./Assignment"

function Assignments({ currentAssignment, currentText, showAssignment, previousText, onChange }) {
    return (
        currentAssignment ? <div className="container">
            {showAssignment &&
            <span>
                    <span>
                        <Assignment
                            question={currentAssignment.question}
                            currentText={currentText}
                            link={currentAssignment.link}
                            onChange={onChange}
                        />
                    </span>
                </span>
            }
            {!showAssignment &&
            <div className="previousAssignment">
                <h1>{previousText}</h1>
            </div>
            }
        </div>: null
    )

}

export default Assignments;
