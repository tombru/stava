import React from "react";
import Assignment from "./Assignment"

function Assignments({ currentFilename, currentText, question, showAssignment, previousText, onChange }) {
    return (
        <div className="container">
            {showAssignment &&
                <span>
                    {currentFilename &&
                            <span>
                                <Assignment
                                    question={question}
                                    currentText={currentText}
                                    filename={currentFilename}
                                    onChange={onChange}
                                />
                            </span>}
                    {!currentFilename && <h1>Slut!</h1>}
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
