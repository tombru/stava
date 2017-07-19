import React from "react";
import Assignment from "./Assignment"

function Assignments({ currentFilename, currentText, question, showAssignment, nrOfRunsLeft, previousText, onChange }) {
    return (
        <div className="container">
            {showAssignment &&
                <span>
                    {nrOfRunsLeft !== 0 &&
                            <span>
                                <Assignment
                                    question={question}
                                    currentText={currentText}
                                    filename={currentFilename}
                                    onChange={onChange}
                                />
                                <h4>{nrOfRunsLeft}</h4>
                            </span>}
                    {nrOfRunsLeft === 0 && <h1>Slut!</h1>}
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
